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
} from '@libs/client/notion';

export const getStaticPaths: GetStaticPaths = async () => {
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

  const paths: any = [];

  studyData.map(({ data }: any) => {
    data.results.map((post: any) => {
      if (post.type === 'child_page') {
        return paths.push({
          params: {
            id: post.id,
          },
        });
      }
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { id },
}: any) => {
  const notion = createNotion();

  const page: any = await notion.pages.retrieve({
    page_id: id,
  });

  const blocks: any = await fetchNotionPage(notion, id);

  const title = page.properties.title.title
    .map((title: any) => title.plain_text)
    .join('');
  const content = getBlockData(blocks);

  return {
    props: {
      post: {
        title,
        content,
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
