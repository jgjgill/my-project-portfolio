import Link from 'next/link'

interface MyInfoLinkItemProps {
  href: string
  children?: React.ReactNode
  ariaLabel: string
}

const MyInfoLinkItem = ({ href, children, ariaLabel }: MyInfoLinkItemProps) => {
  return (
    <li className='flex items-center justify-center w-full h-full'>
      <Link href={href} passHref>
        <a target='_blank' rel='noopener noreferrer' aria-label={ariaLabel}>
          {children}
        </a>
      </Link>
    </li>
  )
}

export default MyInfoLinkItem
