import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
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
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };

  return (
    <>
      <div className="px-2 py-2 space-y-2 bg-slate-400 rounded-md shadow-md">
        <div className="relative">
          <svg
            className="absolute top-0 -left-1 w-8 h-8 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClickBack}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
          <p className="px-8 py-2 w-full text-center text-sm font-semibold text-gray-800 ">
            {post.title}
          </p>
          <svg
            className="absolute top-0 -right-1 w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        <div className="px-4 py-4 min-h-[20rem] bg-slate-300 rounded-md shadow-md">
          <p className="text-sm font-medium text-gray-700">
            {post.content}
          </p>
        </div>
      </div>

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
        <div className="space-y-2">
          <div className="flex space-x-2 items-center">
            <span className="text-base font-medium text-gray-900">user1</span>
            <p className="text-sm font-normal text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              voluptatem asperiores veritatis quasi debitis quidem dicta officia
            </p>
          </div>
          <div className="flex space-x-2 items-center">
            <span className="text-base font-medium text-gray-900">user2</span>
            <p className="text-sm font-normal text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              voluptatem asperiores veritatis quasi debitis quidem dicta officia
            </p>
          </div>
          <div className="flex space-x-2 items-center">
            <span className="text-base font-medium text-gray-900">user3</span>
            <p className="text-sm font-normal text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              voluptatem asperiores veritatis quasi debitis quidem dicta officia
            </p>
          </div>
          <div className="flex space-x-2 items-center">
            <span className="text-base font-medium text-gray-900">user4</span>
            <p className="text-sm font-normal text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              voluptatem asperiores veritatis quasi debitis quidem dicta officia
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
