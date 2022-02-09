import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import Comment from '../../components/study/comment';
import PostBoard from '../../components/study/postBoard';
import { dummy } from '../../libs/dummy';

interface Iparams extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = dummy.map((item) => {
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

  const post = dummy.find((data) => data.id.toString() === id);

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
          <label htmlFor="comment" className="w-full text-center">
            Comment
          </label>
          <input type="text" className="px-2 rounded-md shadow-md" />
          <button type="submit" className="border rounded-md shadow-md">
            Submit
          </button>
        </form>
        <div className="space-y-2 px-2 py-2 bg-slate-300 rounded-md shadow-md divide-y-2 divide-gray-400">
          {[1, 2, 3, 4].map((item) => (
            <Comment
              id={item}
              key={item}
              name="user"
              content="Lorem ipsum dolor sit amea assumenda consequuntur veniam incidunt asperiores, sapiente ducimus id?"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Post;
