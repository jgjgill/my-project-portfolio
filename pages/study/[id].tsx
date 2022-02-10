import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import Input from '../../components/input';
import Comment from '../../components/study/comment';
import PostBoard from '../../components/study/postBoard';
import { comment, dummyPost, post } from '../../libs/dummy';

interface Iparams extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = dummyPost.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as Iparams;

  const post = dummyPost.find((data: post) => data.id.toString() === id);

  return {
    props: {
      post,
    },
  };
};

const Post: NextPage = ({ post }: InferGetStaticPropsType<GetStaticProps>) => {
  return (
    <>
      <PostBoard id={post.id} title={post.title} content={post.content} />

      <div className="px-2 py-2 bg-slate-400 space-y-2 rounded-md shadow-md">
        <form className="flex flex-col space-y-2">
          <Input
            label="Comment"
            name="comment"
            type="text"
            placeholder="댓글을 입력해주세요"
          />
          <button type="submit" className="border rounded-md shadow-md">
            Submit
          </button>
        </form>
        <div className="space-y-2 px-2 py-2 bg-slate-300 rounded-md shadow-md divide-y-2 divide-gray-400">
          {post.comment.map((item: comment) => (
            <Comment
              id={item.id}
              key={item.id}
              name={item.name}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Post;
