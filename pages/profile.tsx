import Button from '@components/common/button'
import Input from '@components/common/input'
import Loading from '@components/common/loading'
import NicknameForm from '@components/profile/nicknameForm'
import UserHistroy from '@components/profile/userHistory'
import useMutation from '@libs/client/useMutation'
import { User } from '@prisma/client'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'

const UserNickname = dynamic(() => import('@components/profile/userNickname'), { suspense: true })
const UserLike = dynamic(() => import('@components/profile/userLike'), { suspense: true })
const UserComment = dynamic(() => import('@components/profile/userComment'), { suspense: true })

interface UserResponse {
  ok: boolean
  profile: User
  error?: string
}

const Profile: NextPage = () => {
  const { data: user, mutate: nicknameMutate } = useSWR<UserResponse>('/api/profile/me')

  const router = useRouter()

  const [logout, { loading: logoutLoading }] = useMutation('/api/profile/logout')

  const { handleSubmit: logoutSubmit } = useForm()

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
    <>
      <Head>
        <title>Profile</title>
      </Head>

      <div className='border border-slate-400 px-2 py-2 space-y-2 rounded-md shadow-md'>
        <div className='text-xl font-bold text-slate-400'>Profile</div>
        <Loading>
          <UserNickname />
        </Loading>

        <NicknameForm nicknameMutate={nicknameMutate} />

        <UserHistroy title='좋아요 페이지 내역' component={<UserLike />} />
        <UserHistroy title='댓글 페이지 내역' component={<UserComment />} />

        <form onSubmit={logoutSubmit(logoutValid)} className=''>
          <Button text='Logout' loading={logoutLoading} />
        </form>
      </div>
    </>
  )
}

export default Profile
