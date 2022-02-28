import { cls } from '@libs/client/utils';
import { TextGroup } from 'pages/study';

interface IconProps {
  text: TextGroup;
  fullName?: boolean;
  [key: string]: any;
}

const Icon = ({text, fullName, ...rest }: IconProps) => {
  return (
    <div
      className="flex items-center justify-center cursor-pointer min-w-[2rem] px-2 rounded-md shadow-md bg-slate-400"
      {...rest}
    >
      <div
        className={cls(
          'text-xl text-center font-semibold',
          text === 'FrontEnd' ? 'text-teal-300' : '',
          text === 'BackEnd' ? 'text-sky-300' : '',
          text === 'UX/UI' ? 'text-orange-300' : '',
          text === 'Clean Code' ? 'text-indigo-300' : '',
        )}
      >
        {fullName ? text : text[0]}
      </div>
    </div>
  );
};

export default Icon;
