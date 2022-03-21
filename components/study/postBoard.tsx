import { contentType } from '@libs/client/notionContentType';
import useMutation from '@libs/client/useMutation';
import { cls } from '@libs/client/utils';
import { useRouter } from 'next/router';
import { PostResponse, UserResponse } from 'pages/study/[id]';
import useSWR from 'swr';

export interface PostContent {
  type: string;
  text: string;
  annotations?: {
    bold: boolean;
    code: string;
    color: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
  };
}

export interface PostBoardProps {
  title: string;
  content: PostContent[];
}

const PostBoard = ({ title, content }: PostBoardProps) => {
  const router = useRouter();
  const { data: user } = useSWR<UserResponse>('/api/users/me');

  const { data, mutate: likeMutate } = useSWR<PostResponse>(
    router.query.id ? `/api/posts/${router.query.id}` : null
  );

  const [toggleLike, { loading }] = useMutation(
    `/api/posts/${router.query.id}/like`
  );

  const onClickBack = () => {
    router.back();
  };

  const onToggleLike = () => {
    if (loading) return;

    if (user?.ok) {
      toggleLike({});
      likeMutate((prev) => prev && { ...prev, isLiked: !prev.isLiked }, false);
    } else {
      alert(user?.error);
    }
  };

  return (
    <div className="px-2 py-2 space-y-2 bg-slate-400 rounded-md shadow-md">
      {data ? (
        <>
          <div className="relative flex">
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
            <p className="px-8 py-2 w-full text-center text-xl font-semibold text-gray-800 ">
              {title}
            </p>
            <button
              className={cls(data.isLiked ? 'text-red-400' : 'text-gray-700')}
              onClick={onToggleLike}
            >
              {data.isLiked ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="px-4 py-4 min-h-[20rem] whitespace-pre-wrap bg-slate-300 rounded-md shadow-md">
            {content.map((item: PostContent, i: number) =>
              contentType(item, i)
            )}
          </div>
        </>
      ) : (
        <p className="text-2xl font-semibold text-gray-700">Loading...</p>
      )}
    </div>
  );
};

export default PostBoard;
