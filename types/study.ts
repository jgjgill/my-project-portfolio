import { Comment, User } from '@prisma/client'

export interface CommentForm {
  comment: string
}

export interface PostResponse {
  ok: boolean
  isLiked: boolean
  comments: Comment[]
}

export interface CommentResponse {
  ok: boolean
  comment: Comment
}

export interface UserResponse {
  ok: boolean
  profile: User
  error?: string
}

export interface PostContent {
  type: string
  text: string
  annotations?: {
    bold: boolean
    code: string
    color: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
  }
}

// export interface PostBoardProps {
//   title: string
//   content: PostContent[]
// }
