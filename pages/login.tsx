import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import Input from '@components/input';
import useMutation from '@libs/client/useMutation';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from '@components/button';
import useSWR from 'swr';
import { UserResponse } from './study/[id]';
import Head from 'next/head';

interface LoginForm {
  email: string;
}

interface TokenForm {
  token: string;
}

interface MutationResult {
  ok: boolean;
  error?: string;
}

const Login: NextPage = () => {
  const router = useRouter();

  const { data: user } = useSWR<UserResponse>('/api/users/me');

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

  const onEmailBack = () => {
    router.reload();
  };

  useEffect(() => {
    if (tokenData?.error) {
      alert(tokenData.error);
      tokenReset();
    }
  }, [tokenData, tokenReset]);

  useEffect(() => {
    if ((user && user.ok) || tokenData?.ok) {
      router.replace('/');
    }
  }, [user, tokenData, router]);

  return (
    <div className="border border-slate-400 px-2 py-2 space-y-2 rounded-md shadow-md">
      <Head>
        <title>Login</title>
      </Head>

      <div className="text-xl font-bold text-slate-400">Login</div>

      {emailData?.ok ? (
        <div className="space-y-4">
          <p className="flex justify-center text-slate-400">
            이메일로 토큰을 전송했습니다!
          </p>
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
          <span
            className="text-sm underline text-center text-slate-400 block cursor-pointer"
            onClick={onEmailBack}
          >
            이메일 다시 입력
          </span>
        </div>
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
