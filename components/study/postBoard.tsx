import { useRouter } from "next/router";

interface PostBoardProps {
  id: number;
  title: string;
  content: string;
}

const PostBoard = ({id, title, content}: PostBoardProps) => {
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };
  
  return (
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
            {title}
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
          <p className="text-sm font-medium text-gray-700">{content}</p>
        </div>
      </div>
  )
}

export default PostBoard;