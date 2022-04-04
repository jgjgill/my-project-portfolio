import react from '../../public/react.svg';
import nextjs from '../../public/nextjs.svg';
import tailwindcss from '../../public/tailwindcss.svg';
import typescript from '../../public/typescript.svg';
import mui from '../../public/mui.svg';
import prisma from '../../public/prisma.svg';
import { useState } from 'react';
import MyStackImg, { MyStackImgProps } from './myStackImg';
interface MyStackProps {}

const MyStack = ({}: MyStackProps) => {
  const [reactToggle, setReactToggle] = useState(false);
  const [tsToggle, setTsToggle] = useState(false);
  const [nextjsToggle, setNextjsToggle] = useState(false);
  const [tailwindcssToggle, setTailwindcssToggle] = useState(false);
  const [muiToggle, setMuiToggle] = useState(false);
  const [prismaToggle, setPrismaToggle] = useState(false);

  const myStacks: MyStackImgProps[] = [
    {
      src: react,
      stack: 'react',
      enterToggle: () => setReactToggle(true),
      leaveToggle: () => setReactToggle(false),
      toggle: reactToggle,
      contents: ['선언적 프로그래밍', '컴포넌트', 'Virtual DOM'],
    },
    {
      src: typescript,
      stack: 'typescript',
      enterToggle: () => setTsToggle(true),
      leaveToggle: () => setTsToggle(false),
      toggle: tsToggle,
      contents: ['자동완성'],
    },
    {
      src: nextjs,
      stack: 'nextjs',
      enterToggle: () => setNextjsToggle(true),
      leaveToggle: () => setNextjsToggle(false),
      toggle: nextjsToggle,
      contents: ['페이지 설정', 'SEO', 'SSR, CSR, SSG'],
    },
    {
      src: tailwindcss,
      stack: 'tailwind',
      enterToggle: () => setTailwindcssToggle(true),
      leaveToggle: () => setTailwindcssToggle(false),
      toggle: tailwindcssToggle,
      contents: ['CSS 코드 관리 용이'],
    },
    {
      src: mui,
      stack: 'mui',
      enterToggle: () => setMuiToggle(true),
      leaveToggle: () => setMuiToggle(false),
      toggle: muiToggle,
      contents: ['쉽고 빠른 디자인'],
    },
    {
      src: prisma,
      stack: 'prisma',
      enterToggle: () => setPrismaToggle(true),
      leaveToggle: () => setPrismaToggle(false),
      toggle: prismaToggle,
      contents: ['생산성 증가'],
    },
  ];

  return (
    <div className="bg-slate-200 px-2 py-2 space-y-4 rounded-md shadow-md">
      <p className="text-4xl text-center font-semibold text-gray-700">
        My Stack
      </p>
      <div className="grid grid-cols-3 place-items-center gap-10 text-center border-2 border-gray-400 p-4 rounded-md shadow-md">
        {myStacks.map((myStack) => (
          <MyStackImg {...myStack} key={myStack.stack} />
        ))}
      </div>
    </div>
  );
};

export default MyStack;
