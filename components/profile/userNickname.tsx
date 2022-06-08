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

  return <span className='text-slate-50'>{user?.profile.name}</span>
}

export default UserNickname
