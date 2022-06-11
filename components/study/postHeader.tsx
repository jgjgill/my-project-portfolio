import { useRouter } from 'next/router'

import { PostResponse, UserResponse } from 'types/study'
import { KeyedMutator } from 'swr'

import EmptyHeartIcon from 'assets/svgs/study/emptyHeartIcon'
import FillHeartIcon from 'assets/svgs/study/fillHeartIcon'
import useMutation from '@libs/client/useMutation'
import BackIcon from 'assets/svgs/study/backIcon'

interface PostHeaderProps {
  title: string
  user?: UserResponse
  isLiked?: boolean
  likeMutate: KeyedMutator<PostResponse>
}

const PostHeader = ({ title, user, isLiked, likeMutate }: PostHeaderProps) => {
  const router = useRouter()

  const [toggleLike, { loading }] = useMutation(`/api/posts/${router.query.id}/like`)

  const onToggleLike = () => {
    if (loading || !user?.ok) return

    toggleLike({})
    likeMutate((prev) => prev && { ...prev, isLiked: !prev.isLiked }, false)
  }

  const onClickBack = () => {
    router.back()
  }

  return (
    <div className='relative flex'>
      <BackIcon
        onClick={onClickBack}
        className='absolute top-0 -left-1 w-8 h-8 cursor-pointer fill-slate-400 stroke-slate-700 stroke-2'
      />

      <h1 className='px-8 py-2 w-full text-center text-xl font-semibold text-slate-400 '>{title}</h1>

      <button type='button' className='text-slate-400' onClick={onToggleLike}>
        {user?.ok && isLiked ? (
          <FillHeartIcon className='w-8 h-8 fill-slate-400' />
        ) : (
          <EmptyHeartIcon className='h-8 w-8 stroke-2' />
        )}
      </button>
    </div>
  )
}

export default PostHeader
