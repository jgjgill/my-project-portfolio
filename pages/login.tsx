import { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import EmailForm from '@components/login/emailForm'
import TokenForm from '@components/login/tokenForm'

const Login: NextPage = () => {
  const [isView, setIsView] = useState(false)

  return (
    <div className='border border-slate-400 px-2 py-2 space-y-2 rounded-md shadow-md'>
      <Head>
        <title>Login</title>
      </Head>

      <h1 className='text-xl font-bold text-slate-400'>Login</h1>

      <EmailForm isView={!isView} setIsView={setIsView} />
      <TokenForm isView={isView} />

      <div className='text-slate-50 flex flex-col space-y-2 items-center'>
        <span>이메일로 로그인 토큰을 보내드립니다.</span>
        <span>브라우저를 닫으면 자동으로 쿠키를 삭제해 로그아웃 처리됩니다.</span>
      </div>
    </div>
  )
}

export default Login
