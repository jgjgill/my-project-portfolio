import Image from 'next/image'
import MyStackInfo from './myStackInfo'

export interface MyStackImgProps {
  src: any
  stack: string
  enterToggle: () => void
  leaveToggle: () => void
  toggle: boolean
  contents: string[]
}

const MyStackImg = ({ src, stack, enterToggle, leaveToggle, toggle, contents }: MyStackImgProps) => {
  return (
    <div className='relative'>
      <Image
        src={src}
        width={70}
        height={70}
        layout='fixed'
        alt={stack}
        onMouseEnter={enterToggle}
        onMouseLeave={leaveToggle}
      />
      {toggle && <MyStackInfo stack={stack} contents={contents} />}
    </div>
  )
}

export default MyStackImg
