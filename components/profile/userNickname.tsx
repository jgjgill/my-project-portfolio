import { User } from '@prisma/client'
import useSWR from 'swr'

interface UserNicknameProps {}

interface UserResponse {
  ok: boolean
  profile: User
  error?: string
}

const UserNickname = ({}: UserNicknameProps) => {
  const { data: user, mutate } = useSWR<UserResponse>('/api/profile/me', {
    suspense: true,
  })

  return <span className='text-slate-50'>{user?.profile.name}</span>
}

export default UserNickname
