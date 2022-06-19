import Loading from '@components/common/loading'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const NavList = dynamic(() => import('./navList'), { ssr: false })

const Navbar = () => {
  return (
    <nav className='flex sticky top-0 z-10 justify-between bg-slate-800 px-4 py-2 rounded-md shadow-md'>
      <Link href='/'>
        <a className='flex items-center space-x- px-2'>
          <span className='text-slate-50 text-xl font-semibold'>JG</span>
        </a>
      </Link>

      <Loading>
        <NavList />
      </Loading>
    </nav>
  )
}

export default Navbar
