import Link from 'next/link';
import { icon } from '../../libs/dummy';
import Icon from './icon';

interface ListItemProps {
  id: number;
  text: icon;
  title: string;
}

const ListItem = ({ id, text, title }: ListItemProps) => {
  return (
    <Link href={`study/${id}`}>
      <div className="flex space-x-2 items-center cursor-pointer">
        <Icon text={text} />
        <div className="bg-slate-400 w-full text-center rounded-md shadow-md">
          <span className="text-sm font-semibold text-gray-700">{title}</span>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
