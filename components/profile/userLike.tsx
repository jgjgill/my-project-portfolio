import { User } from '@prisma/client'
import Link from 'next/link'
import useSWR from 'swr'

interface UserLikeProps {}

interface LikeAndCommentWithUser extends User {
  likes: {
    post: {
      id: number
      title: string
    }
  }[]
  comments: {
    id: number
    content: string
    post: {
      id: number
      title: string
    }
  }[]
}

interface UserResponse {
  ok: boolean
  profile: LikeAndCommentWithUser
  error?: string
}

const UserLike = ({}: UserLikeProps) => {
  const { data: user, mutate } = useSWR<UserResponse>('/api/profile/me', { suspense: true })

  return (
    <>
      {user?.profile.likes.map((like) => (
        <Link key={like.post.id} href={`study/${like.post.id}`}>
          <a className='underline text-slate-50 hover:translate-y-1 transition'>{like.post.title}</a>
        </Link>
      ))}
    </>
  )
}

export default UserLike
