import Link from 'next/link'
import useSWR from 'swr'

import { UserResponse } from 'types/study'

const NAV = [
  { name: 'Home', href: '/' },
  { name: 'Study', href: '/study' },
  { name: 'Login', href: '/login' },
  { name: 'Profile', href: '/profile' },
]

const NavList = () => {
  const { data: user } = useSWR<UserResponse>('/api/users/me', {
    suspense: true,
  })

  const filteredNav = NAV.filter((item) => (user?.ok ? item.name !== 'Login' : item.name !== 'Profile'))

  return (
    <ul className='flex items-center space-x-4 justify-between text-xl font-semibold text-slate-50'>
      {user &&
        filteredNav.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default NavList
