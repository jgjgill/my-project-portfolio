import type { NextPage } from 'next';
import Icon from '../components/study/icon';
import ListItem from '../components/study/listItem';
import Memo from '../components/study/memo';

const Study: NextPage = () => {
  return (
    <>
      <div className="flex flex-col px-2 py-2 space-y-8 bg-slate-300 rounded-md shadow-md">
        <div className="flex justify-around space-x-2">
          <div className="flex items-center space-x-2 bg-slate-500 px-2 py-2 rounded-md shadow-md">
            <Icon text="Front" />
            <Icon text="Back" />
            <Icon text="Ux/Ui" />
            <Icon text="Design" />
          </div>
          <div className="flex justify-between items-center space-x-4">
            <Icon text="Front" fullName />
            <Icon text="Back" fullName />
            <Icon text="Ux/Ui" fullName />
            <Icon text="Design" fullName />
          </div>
        </div>
        <div className="bg-slate-500 py-2 px-2 rounded-md shadow-md">
          <div className="space-y-3">
            <ListItem text="Back" title="토스ㅣSLASH 21 - JavaScript Bundle Diet" />
            <ListItem text="Design" title="토스ㅣSLASH 21 - 실무에서 바로 쓰는 Frontend Clean Code" />
            <ListItem text="Front" title="토스ㅣSLASH 21 - Micro-frontend React, 점진적으로 도입하기" />
            <ListItem text="Ux/Ui" title="토스ㅣSLASH 21 - 토스팀을 위한 슬랙봇 설계" />
          </div>
        </div>
      </div>

      <div className="px-5 py-5 bg-slate-500 rounded-md shadow-md">
        <div className="grid grid-cols-3 gap-3">
          <Memo
            text="Front"
            title="토스ㅣSLASH 21 - 실무에서 바로 쓰는 Frontend Clean Code"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ex quae debitis earum, corrupti ad voluptatem dolore ullam quam itaque ducimus laboriosam illo autem necessitatibus possimus eos? Est, possimus ipsam."
          />
          <Memo
            text="Front"
            title="토스ㅣSLASH 21 - JavaScript Bundle Diet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ex quae debitis earum, corrupti ad voluptatem dolore ullam quam itaque ducimus laboriosam illo autem necessitatibus possimus eos? Est, possimus ipsam."
          />
          <Memo
            text="Design"
            title="토스ㅣSLASH 21 - Micro-frontend React, 점진적으로 도입하기"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ex quae debitis earum, corrupti ad voluptatem dolore ullam quam itaque ducimus laboriosam illo autem necessitatibus possimus eos? Est, possimus ipsam."
          />
          <Memo
            text="Back"
            title="토스ㅣSLASH 21 - 토스팀을 위한 슬랙봇 설계"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ex quae debitis earum, corrupti ad voluptatem dolore ullam quam itaque ducimus laboriosam illo autem necessitatibus possimus eos? Est, possimus ipsam."
          />
          <Memo
            text="Front"
            title="토스ㅣSLASH 21 - JavaScript Bundle Diet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ex quae debitis earum, corrupti ad voluptatem dolore ullam quam itaque ducimus laboriosam illo autem necessitatibus possimus eos? Est, possimus ipsam."
          />
          <Memo
            text="Ux/Ui"
            title="title"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ex quae debitis earum, corrupti ad voluptatem dolore ullam quam itaque ducimus laboriosam illo autem necessitatibus possimus eos? Est, possimus ipsam."
          />
        </div>
      </div>
    </>
  );
};

export default Study;
