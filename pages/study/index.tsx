import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Icon from '../../components/study/icon';
import ListItem from '../../components/study/listItem';
import Memo from '../../components/study/memo';
import { dummyPost, icon, post } from '../../libs/dummy';

const iconList: icon[] = ['Front', 'Ux/Ui', 'Design', 'Back'];

const Study: NextPage = () => {
  const [dummyData, setDummyData] = useState<post[]>([]);
  const [filteredIcon, setfilteredIcon] = useState<icon[]>([]);
  const [filteredList, setFilteredList] = useState<post[]>([]);

  useEffect(() => {
    setDummyData(dummyPost);
  }, []);

  const onToggle = (item: icon) => () => {
    filteredIcon.includes(item)
      ? setfilteredIcon(filteredIcon.filter((icon) => icon !== item))
      : setfilteredIcon(filteredIcon.concat(item));

    setDummyData(
      dummyData.map((data) =>
        data.text === item
          ? {
              ...data,
              toggle: !data.toggle,
            }
          : data
      )
    );
  };

  useEffect(() => {
    setFilteredList(dummyData.filter((data) => data.toggle === true));
  }, [dummyData]);

  return (
    <>
      <div className="flex flex-col px-2 py-2 space-y-8 bg-slate-300 rounded-md shadow-md">
        <div className="flex justify-between px-4 space-x-2">
          <div className="flex items-center space-x-2 bg-slate-500 px-2 py-2 rounded-md shadow-md">
            {filteredIcon.length === 0 ? (
              <span className="text-xl font-bold text-gray-400">
                Study Theme
              </span>
            ) : (
              filteredIcon.map((iconText, i) => (
                <Icon key={i} text={iconText} />
              ))
            )}
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {iconList.map((iconText, i) => (
              <Icon
                key={i}
                text={iconText}
                fullName
                onClick={onToggle(iconText)}
              />
            ))}
          </div>
        </div>
        <div className="bg-slate-500 py-2 px-2 min-h-[12rem] rounded-md shadow-md">
          <div className="space-y-3">
            {filteredList.map((filteredItem) => (
              <ListItem
                id={filteredItem.id}
                key={filteredItem.id}
                text={filteredItem.text}
                title={filteredItem.title}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 py-5 bg-slate-500 rounded-md shadow-md">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {dummyData.map((memoItem) => (
            <Memo
              key={memoItem.id}
              id={memoItem.id}
              text={memoItem.text}
              title={memoItem.title}
              content={memoItem.content}
              commentCount={memoItem.commentCount}
              likeCount={memoItem.likeCount}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Study;
