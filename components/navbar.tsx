import Link from 'next/link'
import { UserResponse } from 'pages/study/[id]'
import useSWR from 'swr'

const NAV = [
  { name: 'Home', href: '/' },
  { name: 'Study', href: '/study' },
  { name: 'Login', href: '/login' },
  { name: 'Profile', href: '/profile' },
]

const Navbar = () => {
  const { data: user } = useSWR<UserResponse>('/api/users/me')

  const filteredNav = NAV.filter((item) => (user?.ok ? item.name !== 'Login' : item.name !== 'Profile'))

  return (
    <nav className='flex sticky top-0 z-10 justify-between bg-slate-800 px-4 py-2 rounded-md shadow-md'>
      <Link href='/'>
        <a className='flex items-center space-x- px-2'>
          <span className='text-slate-50 text-xl font-semibold'>JG</span>
        </a>
      </Link>
      <ul className='flex items-center space-x-4 justify-between text-xl font-semibold text-slate-50'>
        {filteredNav.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
