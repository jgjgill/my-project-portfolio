import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import Input from '@components/input';
import useMutation from '@libs/client/useMutation';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from '@components/button';
import useSWR from 'swr';
import { UserResponse } from './study/[id]';

interface LoginForm {
  email: string;
}

interface TokenForm {
  token: string;
}

interface MutationResult {
  ok: boolean;
}

const Login: NextPage = () => {
  const { data: user, mutate: nicknameMutate } =
    useSWR<UserResponse>('/api/users/me');

  const [
    confirmEmail,
    { loading: emailLoading, data: emailData, error: emailError },
  ] = useMutation<MutationResult>('/api/users/enter');

  const [
    confirmToken,
    { loading: tokenLoading, data: tokenData, error: tokenError },
  ] = useMutation<MutationResult>('/api/users/confirm');

  const {
    register: loginRegister,
    handleSubmit: loginSubmit,
    formState: { errors: loginErrors },
    reset: loginReset,
  } = useForm<LoginForm>();

  const {
    register: tokenRegister,
    handleSubmit: tokenSubmit,
    formState: { errors: tokenErrors },
    reset: tokenReset,
  } = useForm<TokenForm>();

  const loginValid = (emailForm: LoginForm) => {
    confirmEmail(emailForm);
  };

  const tokenValid = (tokenForm: TokenForm) => {
    confirmToken(tokenForm);
  };

  const router = useRouter();
  useEffect(() => {
    if (tokenData?.ok) {
      router.push('/');
    }
  }, [tokenData]);

  useEffect(() => {
    if (user && user.ok) {
      router.replace('/');
    }
  }, [user]);

  return (
    <div className="bg-slate-200 px-2 py-2 space-y-2 rounded-md shadow-md">
      <div className="text-xl font-bold text-slate-700">Login</div>

      {emailData?.ok ? (
        <>
          <p className="flex justify-center">이메일로 토큰을 전송했습니다!</p>
          <form
            onSubmit={tokenSubmit(tokenValid)}
            className="flex flex-col space-y-2 items-center"
          >
            <Input
              label="Token"
              name="token"
              type="text"
              placeholder="토큰을 입력해주세요"
              register={tokenRegister('token', { required: true })}
              required
            />
            <Button text="Confirm Token" loading={tokenLoading} />
          </form>
        </>
      ) : (
        <form
          onSubmit={loginSubmit(loginValid)}
          className="flex flex-col space-y-2 items-center"
        >
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="이메일을 입력해주세요"
            register={loginRegister('email', { required: true })}
            required
          />
          <Button text="Get Login Link" loading={emailLoading} />
        </form>
      )}
    </div>
  );
};

export default Login;
