import dynamic from 'next/dynamic'

import Loading from '@components/common/loading'

const Navbar = dynamic(() => import('./navbar'), { suspense: true })

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='bg-slate-700 min-h-screen flex flex-col space-y-2 px-4 py-2 w-full'>
      <Loading>
        <Navbar />
      </Loading>

      {children}
    </div>
  )
}

export default Layout
