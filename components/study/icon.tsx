import { cls } from '../../libs/utils';

interface IconProps {
  text: String;
  fullName?: boolean;
  [key: string]: any;
}

const Icon = ({ text, fullName, ...rest }: IconProps) => {
  return (
    <div
      className="flex items-center justify-center cursor-pointer px-2 rounded-md shadow-md bg-slate-400"
      {...rest}
    >
      <div
        className={cls(
          'text-xl font-semibold',
          text === 'Front' ? 'text-teal-300' : '',
          text === 'Back' ? 'text-sky-300' : '',
          text === 'Ux/Ui' ? 'text-orange-300' : '',
          text === 'Design' ? 'text-indigo-300' : ''
        )}
      >
        {fullName ? text : text[0]}
      </div>
    </div>
  );
};

export default Icon;
