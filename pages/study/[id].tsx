import { ParsedUrlQuery } from 'querystring';
import Input from '@components/input';
import Comment from '@components/study/comment';
import PostBoard from '@components/study/postBoard';
import { useForm } from 'react-hook-form';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import {
  createNotion,
  fetchNotionPage,
  getBlockData,
  getThemePage,
  getThemePageNameGroup,
  ThemePage,
} from '@libs/client/notion';
import {
  GetPageResponse,
  ListBlockChildrenResponse,
  UpdateBlockResponse,
} from '@notionhq/client/build/src/api-endpoints';
import client from '@libs/server/client';

export const getStaticPaths: GetStaticPaths = async () => {
  const notion = createNotion();
  const pageId = process.env.NOTION_PAGE_ID!;
  const mainPage = await fetchNotionPage(notion, pageId);
  const themeNameGroup = getThemePageNameGroup(mainPage);
  const themePageGroup = await getThemePage(notion, themeNameGroup);
  const postsInfo = await client.post.findMany();

  const getStudyPagePaths = (themePageGroup: ThemePage[]) => {
    const paths: any = [];
    postsInfo.map((post) => {
      return paths.push({
        params: {
          id: post.id.toString(),
        },
      });
    });
    // themePageGroup.map(({ themePageBlocks }) => {
    //   themePageBlocks.results.map(
    //     (themePageBlock: UpdateBlockResponse | any) => {
    //       if (themePageBlock.type === 'child_page') {
    //         return paths.push({
    //           params: {
    //             id: themePageBlock.id,
    //           },
    //         });
    //       }
    //     }
    //   );
    // });

    return paths;
  };
  const paths = getStudyPagePaths(themePageGroup);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { id },
}: any) => {
  const notion = createNotion();

  const pageInfo = await client.post.findUnique({
    where: { id: parseInt(id) },
  });

  const studyPage: GetPageResponse | any = await notion.pages.retrieve({
    page_id: pageInfo?.pageId!,
  });

  const blocks: ListBlockChildrenResponse = await fetchNotionPage(
    notion,
    pageInfo?.pageId!
  );

  const studyPageTitle = studyPage.properties.title.title
    .map((title: any) => title.plain_text)
    .join('');
  const studyPageContent = getBlockData(blocks);

  return {
    props: {
      post: {
        title: studyPageTitle,
        content: studyPageContent,
        // blocks
      },
    },
  };
};

interface CommentForm {
  comment: string;
}

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    register,
    handleSubmit: commentSubmit,
    formState: { errors },
  } = useForm<CommentForm>();

  const commentVaild = (data: CommentForm) => {
    console.log(data);
  };

  return (
    <>
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}

      <PostBoard id={post.title} title={post.title} content={post.content} />

      <div className="px-2 py-2 bg-slate-400 space-y-2 rounded-md shadow-md">
        <form className="flex flex-col space-y-2">
          <Input
            label="Comment"
            name="comment"
            type="text"
            placeholder="댓글을 입력해주세요"
            register={register('comment', {
              required: true,
            })}
            required
          />
          <button type="submit" className="border rounded-md shadow-md">
            Submit
          </button>
        </form>
        <div className="space-y-2 px-2 py-2 bg-slate-300 rounded-md shadow-md divide-y-2 divide-gray-400">
          {/* {comments.map((item) => (
            <Comment
              id={item.id}
              key={item.id}
              name={item.user}
              content={item.content}
            />
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Post;
