import { SVGProps } from 'react'

const EmptyHeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' fill='none' {...props}>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z'
    />
  </svg>
)

export default EmptyHeartIcon
