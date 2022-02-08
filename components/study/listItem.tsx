import Icon from './icon';

interface ListItemProps {
  text: 'Front' | 'Back' | 'Ux/Ui' | 'Design';
  title: string;
}

const ListItem = ({ text, title }: ListItemProps) => {
  return (
    <div className="flex space-x-2 items-center">
      <Icon text={text} />
      <div className="bg-slate-400 w-full text-center rounded-md shadow-md">
        <span className="text-sm font-semibold text-gray-700">{title}</span>
      </div>
    </div>
  );
};

export default ListItem;
