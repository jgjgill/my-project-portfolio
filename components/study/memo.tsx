import Icon from './icon';

interface MemoProps {
  text: 'Front' | 'Back' | 'Ux/Ui' | 'Design';
  title: string;
  content: string;
}

const Memo = ({ text, title, content }: MemoProps) => {
  return (
    <div className="flex flex-col px-2 py-2 space-y-2 bg-slate-300 rounded-md shadow-md">
      <div className="flex relative items-center pl-2">
        <div className="absolute -top-6 -left-4">
          <Icon text={text} />
        </div>
        <span className="text-sm font-semibold text-gray-700">
          {title}
        </span>
      </div>
      <p className="text-sm font-medium text-gray-500">
        {content}
      </p>
    </div>
  );
};

export default Memo;
