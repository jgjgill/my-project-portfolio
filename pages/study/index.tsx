import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useEffect, useState } from 'react';
import Icon from '@components/study/icon';
import ListItem from '@components/study/listItem';
import Memo from '@components/study/memo';
import { icon, post } from '@libs/client/dummy';
import client from '@libs/server/client';

interface props {
  posts: post[];
}


const iconList: icon[] = ['Front', 'Ux/Ui', 'Design', 'Back'];

export const getStaticProps: GetStaticProps<props> = async () => {
  const data = await client.post.findMany();
  const posts = JSON.parse(JSON.stringify(data));

  return {
    props: { posts },
  };
};

const Study = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [postData, setPostData] = useState<post[]>(posts);
  const [filteredIcon, setfilteredIcon] = useState<icon[]>([]);
  const [filteredList, setFilteredList] = useState<post[]>([]);

  const onToggle = (item: icon) => () => {
    filteredIcon.includes(item)
      ? setfilteredIcon(filteredIcon.filter((icon) => icon !== item))
      : setfilteredIcon(filteredIcon.concat(item));

    setPostData(
      postData.map((data) =>
        data.text === item
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
        <div></div>

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
            {iconList.map((iconText, i) => (
              <Icon
                key={i}
                text={iconText}
                fullName
                onClick={onToggle(iconText)}
              />
            ))}
          </div>
        </div>
        <div className="bg-slate-500 py-2 px-2 min-h-[12rem] rounded-md shadow-md">
          <div className="space-y-3">
            {filteredList.map((filteredItem) => (
              <ListItem
                id={filteredItem.id}
                key={filteredItem.id}
                text={filteredItem.text}
                title={filteredItem.title}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 py-5 bg-slate-500 rounded-md shadow-md">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {posts.map((post) => (
            <Memo
              key={post.id}
              id={post.id}
              text={post.text}
              title={post.title}
              content={post.content}
              commentCount={post.commentCount}
              likeCount={post.likeCount}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Study;
