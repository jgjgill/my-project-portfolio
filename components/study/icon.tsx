import { icon } from '@libs/client/dummy';
import { cls } from '@libs/client/utils';

interface IconProps {
  text: icon;
  fullName?: boolean;
  [key: string]: any;
}

const Icon = ({ text, fullName, ...rest }: IconProps) => {
  return (
    <div
      className="flex items-center justify-center cursor-pointer min-w-[2rem] px-2 rounded-md shadow-md bg-slate-400"
      {...rest}
    >
      <div
        className={cls(
          'text-xl font-semibold',
          text === 'FrontEnd' ? 'text-teal-300' : '',
          text === 'BackEnd' ? 'text-sky-300' : '',
          text === 'UX/UI' ? 'text-orange-300' : '',
          text === 'Design' ? 'text-indigo-300' : ''
        )}
      >
        {fullName ? text : text[0]}
      </div>
    </div>
  );
};

export default Icon;
