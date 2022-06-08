import react from '@public/react.svg'
import nextjs from '@public/nextjs.svg'
import tailwindcss from '@public/tailwindcss.svg'
import typescript from '@public/typescript.svg'
import mui from '@public/mui.svg'
import prisma from '@public/prisma.svg'
import { useState } from 'react'
import MyStackItem, { MyStackImgProps } from './myStackItem'

const MyStackContainer = () => {
  const [reactToggle, setReactToggle] = useState(false)
  const [tsToggle, setTsToggle] = useState(false)
  const [nextjsToggle, setNextjsToggle] = useState(false)
  const [tailwindcssToggle, setTailwindcssToggle] = useState(false)
  const [muiToggle, setMuiToggle] = useState(false)
  const [prismaToggle, setPrismaToggle] = useState(false)

  const STACK_GROUP: MyStackImgProps[] = [
    {
      src: react,
      stack: 'react',
      setToggle: () => setReactToggle((prev) => !prev),
      toggle: reactToggle,
      contents: ['선언적 프로그래밍', '컴포넌트', 'Virtual DOM'],
    },
    {
      src: typescript,
      stack: 'typescript',
      setToggle: () => setTsToggle((prev) => !prev),
      toggle: tsToggle,
      contents: ['자동완성'],
    },
    {
      src: nextjs,
      stack: 'nextjs',
      setToggle: () => setNextjsToggle((prev) => !prev),
      toggle: nextjsToggle,
      contents: ['페이지 설정', 'SEO', 'SSR, CSR, SSG'],
    },
    {
      src: tailwindcss,
      stack: 'tailwind',
      setToggle: () => setTailwindcssToggle((prev) => !prev),
      toggle: tailwindcssToggle,
      contents: ['CSS 코드 관리 용이'],
    },
    {
      src: mui,
      stack: 'mui',
      setToggle: () => setMuiToggle((prev) => !prev),
      toggle: muiToggle,
      contents: ['쉽고 빠른 디자인'],
    },
    {
      src: prisma,
      stack: 'prisma',
      setToggle: () => setPrismaToggle((prev) => !prev),
      toggle: prismaToggle,
      contents: ['생산성 증가'],
    },
  ]

  return (
    <div className='border border-slate-400 px-2 py-2 space-y-4 rounded-md shadow-md'>
      <p className='text-4xl text-center font-semibold text-slate-400'>My Stack</p>

      <div className='grid grid-cols-3 place-items-center gap-10 text-center border-2 border-gray-400 p-4 rounded-md shadow-md'>
        {STACK_GROUP.map((item) => (
          <MyStackItem {...item} key={item.stack} />
        ))}
      </div>
    </div>
  )
}

export default MyStackContainer
