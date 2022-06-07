import { Post } from '@prisma/client'
import Memo from './memo'

interface PostWithCount extends Post {
  _count: {
    comments: number
    likes: number
  }
}

interface MemoListProps {
  posts: PostWithCount[]
}

const MemoList = ({ posts }: MemoListProps) => {
  return (
    <div className='px-5 py-5 border border-slate-400 rounded-md shadow-md'>
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
        {posts.map((post) => (
          <Memo
            key={post.id}
            id={post.id}
            text={post.theme}
            title={post.theme}
            content={post.title}
            createdAt={post.createdAt}
          />
        ))}
      </div>
    </div>
  )
}

export default MemoList
