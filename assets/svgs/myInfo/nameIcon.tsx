import { SVGProps } from 'react'

const NameIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' {...props}>
    <path d='M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-7 9a7 7 0 1 1 14 0H3z' />
  </svg>
)

export default NameIcon
