import { useForm } from 'react-hook-form'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import { CommentForm, CommentResponse, PostResponse, UserResponse } from 'types/study'
import { KeyedMutator } from 'swr'

import CommentItem from '@components/study/commentItem'
import useMutation from '@libs/client/useMutation'
import Button from '@components/common/button'
import Input from '@components/common/input'
import { Comment } from '@prisma/client'

interface CommentListProps {
  user?: UserResponse
  comments?: Comment[]
  commentMutate: KeyedMutator<PostResponse>
}

const CommentList = ({ user, comments, commentMutate }: CommentListProps) => {
  const router = useRouter()

  const { register, reset, handleSubmit: commentSubmit } = useForm<CommentForm>()

  const [comment, { loading: commentLoading, data: commentResultData }] = useMutation<CommentResponse>(
    `/api/posts/${router.query.id}/comment`
  )

  const commentVaild = (commentValidData: CommentForm) => {
    if (commentLoading || !user?.ok) return

    comment(commentValidData)
    reset()
  }

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current && commentResultData?.ok) {
      commentMutate()
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }, [commentResultData, commentMutate])

  return (
    <>
      <div className='px-2 py-2 border border-slate-400 space-y-2 rounded-md shadow-md'>
        <form className='flex flex-col space-y-2' onSubmit={commentSubmit(commentVaild)}>
          <Input
            label='Comment'
            name='comment'
            type='text'
            placeholder='댓글을 입력해주세요'
            register={register('comment', {
              required: true,
            })}
            required
          />
          <Button text='Submit' loading={commentLoading} />
        </form>

        {comments?.length !== 0 && (
          <div className='space-y-2 px-2 py-2 bg-slate-400 rounded-md shadow-md divide-y-2 divide-slate-400'>
            {comments?.map((commentItem: any) => (
              <CommentItem key={commentItem.id} name={commentItem.userName} content={commentItem.content} />
            ))}
          </div>
        )}
      </div>

      <div ref={scrollRef} className='pt-20' />
    </>
  )
}

export default CommentList
