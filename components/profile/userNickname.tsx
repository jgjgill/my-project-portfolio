import { User } from '@prisma/client'
import useSWR from 'swr'

interface UserResponse {
  ok: boolean
  profile: User
  error?: string
}

const UserNickname = () => {
  const { data: user } = useSWR<UserResponse>('/api/profile/me', {
    // suspense: true,
  })

  return (
    <div className='h-8'>
      <span className='text-slate-50 h-20'>{user?.profile?.name}</span>
    </div>
  )
}

export default UserNickname
