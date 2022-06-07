import Link from 'next/link'

interface MyInfoLinkItemProps {
  href: string
  children?: React.ReactNode
}

const MyInfoLinkItem = ({ href, children }: MyInfoLinkItemProps) => {
  return (
    <div className='flex items-center justify-center w-16 h-10'>
      <Link href={href} passHref>
        <a target='_blank' rel='noopener noreferrer'>
          {children}
        </a>
      </Link>
    </div>
  )
}

export default MyInfoLinkItem
