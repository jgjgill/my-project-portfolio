import { Post } from '@prisma/client'

import { cls } from '@libs/client/utils'

interface PostWithCount extends Post {
  _count: {
    comments: number
    likes: number
  }
}

export type TextGroup = PostWithCount['theme']

interface IconProps {
  text: TextGroup
  fullName?: boolean
  [key: string]: any
}

const Icon = ({ text, fullName, ...rest }: IconProps) => {
  return (
    <div
      className='flex items-center justify-center border border-slate-400 cursor-pointer min-w-[2rem] px-2 transition hover:scale-105 rounded-md shadow-md '
      {...rest}
    >
      <div
        className={cls(
          'text-xl text-center font-semibold',
          text === 'FrontEnd' ? 'text-sky-700' : '',
          text === 'BackEnd' ? 'text-indigo-700' : '',
          text === 'UX/UI' ? 'text-cyan-700' : '',
          text === 'Clean Code' ? 'text-teal-700' : ''
        )}
      >
        {fullName ? text : text[0]}
      </div>
    </div>
  )
}

export default Icon
