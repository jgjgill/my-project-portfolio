import { ReactElement } from 'react'

interface MyInfoTextItemProps {
  title: string
  text: string
  svg: ReactElement<any, any>
}

const MyInfoTextItem = ({ title, text, svg }: MyInfoTextItemProps) => {
  return (
    <li>
      <dl className='flex flex-col md:flex-row md:space-x-4'>
        <dt className='flex space-x-1'>
          {svg}

          <span className='text-lg md:min-w-[100px] font-bold break-words text-slate-400'>{title}</span>
        </dt>

        <dd className='text-sm md:text-lg text-left md:text-center whitespace-pre-wrap font-semibold text-slate-50'>
          {text}
        </dd>
      </dl>
    </li>
  )
}

export default MyInfoTextItem
