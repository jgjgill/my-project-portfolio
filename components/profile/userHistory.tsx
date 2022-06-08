import Loading from '@components/common/loading'
import { ReactElement } from 'react'

interface UserHistroyProps {
  title: string
  component: ReactElement<any, any>
}

const UserHistroy = ({ title, component }: UserHistroyProps) => {
  return (
    <div className='space-y-2 '>
      <h3 className='text-slate-400'>{title}</h3>

      <div className='flex flex-col space-y-2'>
        <Loading>{component}</Loading>
      </div>
    </div>
  )
}

export default UserHistroy
