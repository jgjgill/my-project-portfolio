import Link from 'next/link';
import useSWR from 'swr';
import Icon from './icon';

interface MemoProps {
  id: number;
  text: string;
  title: string;
  content: string;
  createdAt: Date;
  // commentCount: number;
  // likeCount: number;
}

const Memo = ({
  id,
  text,
  title,
  content,
  createdAt,
}: // commentCount,
// likeCount,
MemoProps) => {
  const timestamp = new Date(createdAt);
  const time = `${timestamp.getFullYear()}-${
    timestamp.getMonth() + 1
  }-${timestamp.getDate()}`;

  const { data } = useSWR(`/api/posts/${id}/length`);

  console.log(123)

  return (
    <Link href={`/study/${id}`}>
      <a className="relative flex flex-col px-2 py-6 space-y-2 bg-slate-400 max-h-80 transition hover:scale-[102%] cursor-pointer rounded-md shadow-md">
        <div className="flex relative items-center pl-2">
          <div className="absolute -top-6 -left-4">
            <Icon text={text} />
          </div>
          <span className="text-sm font-semibold text-gray-700">{title}</span>
        </div>
        <p className="text-ellipsis overflow-hidden text-sm font-medium text-gray-900">
          {content}
        </p>
        <div className="absolute bottom-0 right-1 w-full pl-3 flex justify-between text-sm font-medium text-gray-700">
          <div className="text-sm font-normal text-slate-700">{time}</div>
          <div className="flex space-x-2">
            <div className="flex items-center space-x-1">
              <svg
                className="w-4 h-4"
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
              <span>{data ? data.likes : 0}</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span>{data ? data.comments : 0}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Memo;
