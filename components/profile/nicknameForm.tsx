import { useForm } from 'react-hook-form'
import { User } from '@prisma/client'
import { KeyedMutator } from 'swr'

import useMutation from '@libs/client/useMutation'
import Button from '@components/common/button'
import Input from '@components/common/input'

interface NicknameFormProps {
  nicknameMutate: KeyedMutator<UserResponse>
}

interface INicknameForm {
  nickname: string
}

interface UserResponse {
  ok: boolean
  profile: User
  error?: string
}

const NicknameForm = ({ nicknameMutate }: NicknameFormProps) => {
  const [nicknameChange, { loading: nicknameLoading }] = useMutation('/api/profile')

  const { register: nicknameRegister, handleSubmit: nicknameSubmit, reset: nicknameReset } = useForm<INicknameForm>()

  const nicknameValid = (nicknameForm: INicknameForm) => {
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

  return (
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
  )
}

export default NicknameForm
