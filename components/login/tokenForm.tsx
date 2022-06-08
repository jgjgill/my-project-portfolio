import Button from '@components/common/button'
import Input from '@components/common/input'
import useMutation from '@libs/client/useMutation'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

interface ITokenForm {
  token: string
}

interface MutationResult {
  ok: boolean
  error?: string
}

interface TokenFormProps {
  isView: boolean | undefined
}

const TokenForm = ({ isView }: TokenFormProps) => {
  const [confirmToken, { loading: tokenLoading, data: tokenData }] = useMutation<MutationResult>('/api/users/confirm')

  const { register: tokenRegister, handleSubmit: tokenSubmit, reset: tokenReset } = useForm<ITokenForm>()

  const router = useRouter()

  const tokenValid = (tokenForm: ITokenForm) => {
    confirmToken(tokenForm)
  }

  const onEmailBack = () => {
    router.reload()
  }

  useEffect(() => {
    if (!tokenData?.ok) return

    router.replace('/')
  }, [tokenData, router])

  useEffect(() => {
    if (!tokenData?.error) return

    tokenReset()
  }, [tokenData, tokenReset])

  if (!isView) return null

  return (
    <div className='space-y-4'>
      <p className='flex justify-center text-slate-400'>이메일로 토큰을 전송했습니다!</p>

      <form onSubmit={tokenSubmit(tokenValid)} className='flex flex-col space-y-2 items-center'>
        <Input
          label='Token'
          name='token'
          type='text'
          placeholder='토큰을 입력해주세요'
          register={tokenRegister('token', { required: true })}
          required
        />
        <Button text='Confirm Token' loading={tokenLoading} />
      </form>

      <button
        type='button'
        className='text-sm underline text-center text-slate-400 block cursor-pointer'
        onClick={onEmailBack}
      >
        이메일 다시 입력
      </button>
    </div>
  )
}

export default TokenForm
