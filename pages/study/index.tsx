import { useEffect, useState } from 'react';
import Icon from '@components/study/icon';
import ListItem from '@components/study/listItem';
import Memo from '@components/study/memo';
import { icon, post } from '@libs/client/dummy';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { createNotion, fetchNotionPage } from '@libs/client/notion';

export const getStaticProps: GetStaticProps = async () => {
  const notion = createNotion();
  const page = process.env.NOTION_PAGE_ID!;
  const pageData = await fetchNotionPage(notion, page);

  const theme: any = [];
  pageData.results.map((themePage: any) => {
    if (themePage.type === 'child_page') {
      return theme.push({
        id: themePage.id,
        themeName: themePage.child_page.title,
      });
    }
  });

  const studyData: any = [];
  await Promise.all(
    theme.map(async (item: any) => {
      const themeData = await fetchNotionPage(notion, item.id);
      return studyData.push({
        theme: item.themeName,
        data: themeData,
      });
    })
  );


  const studyContent: any = [];
  studyData.map(({ data, theme }: any) => {
    data.results.map((study: any) => {
      if (study.type === 'child_page') {
        return studyContent.push({
          id: study.id,
          theme,
          studyTitle: study.child_page.title,
          toggle: false,
        });
      }
    });
  });

  return {
    props: { studyContent },
  };
};

const Study: NextPage = ({
  studyContent,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [postData, setPostData] = useState<any[]>(studyContent);
  const [filteredIcon, setfilteredIcon] = useState<icon[]>([]);
  const [filteredList, setFilteredList] = useState<post[]>([]);

  const themeList: string[] = [];
  studyContent.map((data: any) => {
    if (!themeList.includes(data.theme)) {
      themeList.push(data.theme);
    }
  });

  const onToggle = (item: icon) => () => {
    filteredIcon.includes(item)
      ? setfilteredIcon(filteredIcon.filter((icon) => icon !== item))
      : setfilteredIcon(filteredIcon.concat(item));

    setPostData(
      postData.map((data) =>
        data.theme === item
          ? {
              ...data,
              toggle: !data.toggle,
            }
          : data
      )
    );
  };

  useEffect(() => {
    setFilteredList(postData.filter((data) => data.toggle === true));
  }, [postData]);

  return (
    <>
      <div className="flex flex-col px-2 py-2 space-y-8 bg-slate-300 rounded-md shadow-md">
        <div className="flex justify-between px-4 space-x-2">
          <div className="flex items-center space-x-2 bg-slate-500 px-2 py-2 rounded-md shadow-md">
            {filteredIcon.length === 0 ? (
              <span className="text-xl font-bold text-gray-400">
                Study Theme
              </span>
            ) : (
              filteredIcon.map((iconText, i) => (
                <Icon key={i} text={iconText} />
              ))
            )}
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {themeList.map((theme: any) => (
              <Icon
                key={theme}
                text={theme}
                fullName
                onClick={onToggle(theme)}
              />
            ))}
          </div>
        </div>
        <div className="bg-slate-500 py-2 px-2 min-h-[12rem] rounded-md shadow-md">
          <div className="space-y-3">
            {filteredList.map((filteredItem: any) => (
              <ListItem
                id={filteredItem.id}
                key={filteredItem.id}
                text={filteredItem.theme}
                title={filteredItem.studyTitle}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 py-5 bg-slate-500 rounded-md shadow-md">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {studyContent?.map((post: any) => (
            <Memo
              key={post.id}
              id={post.id}
              text={post.theme}
              title={post.studyTitle}
              content={post.studyTitle}
              commentCount={1}
              likeCount={1}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Study;
