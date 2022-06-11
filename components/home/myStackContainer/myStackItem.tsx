import Image from 'next/image'

import MyStackModal from './myStackModal'

export interface MyStackImgProps {
  src: any
  stack: string
  setToggle: () => void
  toggle: boolean
  contents: string[]
}

const MyStackItem = ({ src, stack, setToggle, toggle, contents }: MyStackImgProps) => {
  return (
    <li className='relative'>
      <Image
        src={src}
        width={70}
        height={70}
        layout='fixed'
        alt={stack}
        onMouseEnter={setToggle}
        onMouseLeave={setToggle}
      />

      {toggle && <MyStackModal stack={stack} contents={contents} />}
    </li>
  )
}

export default MyStackItem
