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

const UserComment = () => {
  const { data: user } = useSWR<UserResponse>('/api/profile/me', {
    // suspense: true,
  })

  return (
    <ul>
      {user?.profile?.comments.map((comment) => (
        <li key={comment.id}>
          <Link href={`study/${comment.post.id}`}>
            <a className='underline text-slate-50 hover:translate-y-1 transition'>{comment.content}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default UserComment
