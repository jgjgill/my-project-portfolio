import Button from '@components/button'
import Input from '@components/input'
import Loading from '@components/loading'
import UserComment from '@components/profile/userComment'
import UserLike from '@components/profile/userLike'
import UserNickname from '@components/profile/userNickname'
import useMutation from '@libs/client/useMutation'
import { User } from '@prisma/client'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'

interface NicknameForm {
  nickname: string
}

interface UserResponse {
  ok: boolean
  profile: User
  error?: string
}

const Profile: NextPage = () => {
  const { data: user, mutate: nicknameMutate } = useSWR<UserResponse>('/api/profile/me')

  const router = useRouter()

  const [nicknameChange, { loading: nicknameLoading }] = useMutation('/api/profile')

  const [logout, { loading: logoutLoading }] = useMutation('/api/profile/logout')

  const {
    register: nicknameRegister,
    handleSubmit: nicknameSubmit,
    formState: { errors: nicknameErrors },
    reset: nicknameReset,
  } = useForm<NicknameForm>()

  const {
    register: logoutRegister,
    handleSubmit: logoutSubmit,
    formState: { errors: logoutErrors },
  } = useForm()

  const nicknameValid = (nicknameForm: NicknameForm) => {
    nicknameChange(nicknameForm)
    nicknameMutate(
      (prev) =>
        prev && {
          ...prev,
          profile: {
            ...prev.profile,
            name: nicknameForm.nickname,
          },
        },
      false
    )
    nicknameReset()
  }

  const logoutValid = () => {
    logout({})
    router.replace('/')
  }

  useEffect(() => {
    if (user && !user?.ok) {
      router.replace('/')
    }
  }, [user, router])

  return (
    <div className='border border-slate-400 px-2 py-2 space-y-2 rounded-md shadow-md'>
      <Head>
        <title>Profile</title>
      </Head>

      <div className='text-xl font-bold text-slate-400'>Profile</div>
      <Loading>
        <UserNickname />
      </Loading>
      <form onSubmit={nicknameSubmit(nicknameValid)} className='flex flex-col space-y-2 items-center'>
        <Input
          label='Nickname'
          name='nickname'
          type='text'
          placeholder='Nickname Change'
          register={nicknameRegister('nickname', { required: true })}
          required
        />
        <Button text='Enter' loading={nicknameLoading} />
      </form>

      <div className='space-y-2 '>
        <h3 className='text-slate-400'>좋아요 페이지 내역</h3>

        <div className='flex flex-col space-y-2'>
          <Loading>
            <UserLike />
          </Loading>
        </div>
      </div>

      <div className='space-y-2'>
        <h3 className='text-slate-400'>댓글 작성 내역</h3>
        <div className='flex flex-col space-y-2'>
          <Loading>
            <UserComment />
          </Loading>
        </div>
      </div>

      <form onSubmit={logoutSubmit(logoutValid)} className=''>
        <Button text='Logout' loading={logoutLoading} />
      </form>
    </div>
  )
}

export default Profile
