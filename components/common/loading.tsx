import SpinIcon from 'assets/svgs/common/spinIcon'
import { Suspense } from 'react'

interface LoaadingProps {
  children: React.ReactNode
}

const Loading = ({ children }: LoaadingProps) => {
  return <Suspense fallback={<SpinIcon className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' />}>{children}</Suspense>
}

export default Loading
