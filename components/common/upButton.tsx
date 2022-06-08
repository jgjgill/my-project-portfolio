const UpButton = () => {
  const onClickTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <svg
      onClick={onClickTop}
      className='w-16 h-16 hover:scale-105 transition fixed bottom-5 right-5 stroke-slate-50 hover:cursor-pointer'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z'
      />
    </svg>
  )
}

export default UpButton
