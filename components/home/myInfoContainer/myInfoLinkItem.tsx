import Link from 'next/link'

interface MyInfoLinkItemProps {
  href: string
  children?: React.ReactNode
}

const MyInfoLinkItem = ({ href, children }: MyInfoLinkItemProps) => {
  return (
    <li className='flex items-center justify-center w-full h-full'>
      <Link href={href} passHref>
        <a target='_blank' rel='noopener noreferrer'>
          {children}
        </a>
      </Link>
    </li>
  )
}

export default MyInfoLinkItem
