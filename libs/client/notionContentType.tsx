import { PostContent } from 'pages/study/[id]';
import { cls } from './utils';

export const contentType = (item: PostContent, index: number) => {
  switch (item.type) {
    case 'paragraph':
      return (
        <p
          key={index}
          className={cls(
            'text-base text-gray-500',
            item.annotations?.bold! && 'text-gray-900 font-semibold',
            item.annotations?.code! && 'text-red-400 font-semibold'
          )}
        >
          {item.text}
          <br />
        </p>
      );
    case 'heading_2':
      return (
        <h2 key={index} className="text-gray-700 font-bold">
          {item.text}
        </h2>
      );
    case 'heading_3':
      return (
        <h3 key={index} className="text-gray-700 font-semibold">
          {item.text}
          <br />
        </h3>
      );
    case 'text':
      return (
        <p key={index} className="text-teal-300 font-semibold text-base">
          {item.text}
          <br />
        </p>
      );
    case 'code':
      return (
        <p
          key={index}
          className="whitespace-pre-wrap overflow-x-auto inline-block p-4 border-2 rounded-md shadow-md"
        >
          {item.text}
        </p>
      );
    case 'bulleted_list_item':
      return (
        <li className="font-medium text-base text-gray-500">{item.text}</li>
      );
  }
};
