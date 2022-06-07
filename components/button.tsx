interface ButtonProps {
  text: string
  loading: boolean
}

const Button = ({ text, loading }: ButtonProps) => {
  return (
    <button
      type='submit'
      className='border border-slate-400 w-full text-slate-50 text-base font-medium hover:border-slate-200 rounded-md shadow-md'
    >
      {loading ? 'Loading...' : text}
    </button>
  )
}

export default Button
