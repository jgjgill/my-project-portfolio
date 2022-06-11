interface MyInfoTextItemProps {
  title: string
  text: string
  svg: string
}

const MyInfoTextItem = ({ title, text, svg }: MyInfoTextItemProps) => {
  return (
    <li>
      <dl className='flex flex-col md:flex-row md:space-x-4'>
        <dt className='flex space-x-1'>
          <svg
            className='w-6 h-6 fill-slate-400 stroke-slate-700'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={svg} />
          </svg>

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
