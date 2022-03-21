import { useEffect, useState } from 'react';
import Icon from '@components/study/icon';
import ListItem from '@components/study/listItem';
import Memo from '@components/study/memo';
import { GetStaticProps, NextPage } from 'next';
import {
  createNotion,
  fetchNotionPage,
  getThemePage,
  getThemePageNameGroup,
  ThemePage,
} from '@libs/client/notion';
import {
  // BlockObjectResponse,
  UpdateBlockResponse,
} from '@notionhq/client/build/src/api-endpoints';
import client from '@libs/server/client';
import { Post } from '@prisma/client';
import useSWR from 'swr';

type ThemeContent = {
  pageId: string;
  theme: string;
  title: string;
  toggle: boolean;
  createdAt: string;
};

export type TextGroup = PostWithCount['theme'];

interface PostWithCount extends Post {
  _count: {
    comments: number;
    likes: number;
  };
}

interface posts {
  ok: boolean;
  posts: PostWithCount[];
}

export const getStaticProps: GetStaticProps = async () => {
  const notion = createNotion();
  const pageId = process.env.NOTION_PAGE_ID!;
  const mainPage = await fetchNotionPage(notion, pageId);
  const themeNameGroup = getThemePageNameGroup(mainPage);
  const themePageGroup = await getThemePage(notion, themeNameGroup);

  const themeContent: ThemeContent[] = [];
  themePageGroup.map(({ themePageBlocks, themeName }: ThemePage) => {
    themePageBlocks.results.map((study: UpdateBlockResponse) => {
      // const blockObjectResponse = study as BlockObjectResponse;
      const blockObjectResponse = study as any;

      if (blockObjectResponse.type === 'child_page') {
        return themeContent.push({
          pageId: study.id,
          theme: themeName,
          title: blockObjectResponse.child_page.title,
          toggle: false,
          createdAt: blockObjectResponse.created_time,
        });
      }
    });
  });

  const upsertPosts = async () => {
    await Promise.all(
      themeContent.map(async (post) => {
        await client.post.upsert({
          where: { pageId: post.pageId },
          update: {
            title: post.title,
            theme: post.theme,
          },
          create: post,
        });
      })
    );
  };
  await upsertPosts();

  const posts = await client.post.findMany({
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
    include: {
      _count: {
        select: {
          comments: true,
          likes: true,
        },
      },
    },
  });

  const stringPosts = JSON.stringify(posts);

  return {
    props: { stringPosts },
  };
};

const Study: NextPage = () => {
  const { data } = useSWR<posts>('/api/posts');
  const [postData, setPostData] = useState(data?.posts);
  const [filteredIcon, setfilteredIcon] = useState<TextGroup[]>([]);
  const [filteredList, setFilteredList] = useState<PostWithCount[]>([]);

  useEffect(() => {
    setPostData(data?.posts);
  }, [data]);

  const getThemeFilteredTextGroup = (
    themeContent: PostWithCount[]
  ): TextGroup[] => {
    const themeFilteredTextGroup: TextGroup[] = [];
    themeContent.map((data: PostWithCount) => {
      if (!themeFilteredTextGroup.includes(data.theme)) {
        themeFilteredTextGroup.push(data.theme);
      }
    });
    return themeFilteredTextGroup;
  };

  const themeFilteredTextGroup = data
    ? getThemeFilteredTextGroup(data.posts)
    : [];

  const onToggleList = (item: TextGroup) => () => {
    filteredIcon.includes(item)
      ? setfilteredIcon(filteredIcon.filter((icon) => icon !== item))
      : setfilteredIcon(filteredIcon.concat(item));
    postData &&
      setPostData(
        postData.map((post) =>
          post.theme === item
            ? {
                ...post,
                toggle: !post.toggle,
              }
            : post
        )
      );
  };

  useEffect(() => {
    postData &&
      setFilteredList(postData.filter((post) => post.toggle === true));
  }, [postData]);

  return (
    <>
      <div className="flex flex-col px-2 py-2 space-y-8 bg-slate-200 rounded-md shadow-md">
        <div className="flex justify-between px-4 space-x-2">
          <div className="flex items-center text-center bg-slate-400 px-2 py-2 rounded-md shadow-md">
            {filteredIcon.length === 0 ? (
              <span className="text-xl font-bold text-gray-500">
                Study Theme
              </span>
            ) : (
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2 items-center">
                {filteredIcon.map((theme, i) => (
                  <Icon key={i} text={theme} onClick={onToggleList(theme)} />
                ))}
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {data &&
              themeFilteredTextGroup.map((theme, i) => (
                <Icon
                  key={i}
                  text={theme}
                  fullName
                  onClick={onToggleList(theme)}
                />
              ))}
          </div>
        </div>
        <div className="bg-slate-400 py-2 px-2 min-h-[12rem] rounded-md shadow-md">
          <div className="space-y-3">
            {filteredList.map((filteredItem) => (
              <ListItem
                key={filteredItem.id}
                id={filteredItem.id}
                text={filteredItem.theme}
                title={filteredItem.title}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 py-5 bg-slate-200 rounded-md shadow-md">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {data?.posts.map((post) => (
            <Memo
              key={post.id}
              id={post.id}
              text={post.theme}
              title={post.theme}
              content={post.title}
              createdAt={post.createdAt}
              commentCount={post._count.comments}
              likeCount={post._count.likes}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Study;
