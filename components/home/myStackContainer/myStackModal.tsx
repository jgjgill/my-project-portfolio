interface MyStackModalProps {
  stack: string
  contents: string[]
}

const MyStackModal = ({ stack, contents }: MyStackModalProps) => {
  return (
    <div className='absolute z-10 w-20 sm:w-40 p-0.5 border border-slate-400 rounded-md shadow-md space-y-1'>
      <span className='text-slate-50 text-xs sm:text-lg font-semibold'>{stack}</span>
      <ul>
        {contents.map((content, i) => (
          <li key={i} className='text-slate-50 text-xs sm:text-base font-medium'>
            {content}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MyStackModal
