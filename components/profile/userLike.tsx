import { User } from '@prisma/client'
import Link from 'next/link'
import useSWR from 'swr'

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

const UserLike = () => {
  const { data: user } = useSWR<UserResponse>('/api/profile/me', {
    suspense: true,
  })

  return (
    <ul>
      {user?.profile?.likes.map((like) => (
        <li key={like.post.id}>
          <Link href={`study/${like.post.id}`}>
            <a className='underline text-slate-50 hover:translate-y-1 transition'>{like.post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default UserLike
