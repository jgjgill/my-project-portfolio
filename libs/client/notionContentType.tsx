import { cls } from "./utils";

export const contentType = (item: any, index: number) => {
  switch (item.type) {
    case 'paragraph':
      return (
        <p
          key={index}
          className={cls(
            'font-medium text-base text-gray-500',
            item.annotations?.bold && 'text-gray-900',
            item.annotations?.code && 'text-red-400'
          )}
        >
          {item.text}
          <br />
        </p>
      );
    case 'heading_2':
      return (
        <h2 key={index} className="text-gray-700 font-semibold text-xl">
          {item.text}
        </h2>
      );
    case 'heading_3':
      return (
        <h3 key={index} className="text-gray-600 font-semibold text-lg">
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
          className="whitespace-pre-wrap inline-block p-4 border-2 rounded-md shadow-md"
        >
          {item.text}
        </p>
      );
  }
};