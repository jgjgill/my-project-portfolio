import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import Input from '@components/input';
import useMutation from '@libs/client/useMutation';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

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
    handleSubmit: TokenSubmit,
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

  return (
    <div className="bg-slate-400 px-2 py-2 rounded-md shadow-md">
      {emailData?.ok ? (
        <>
          <p className="flex justify-center">이메일로 토큰을 전송했습니다!</p>
          <form
            onSubmit={TokenSubmit(tokenValid)}
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
            <button
              type="submit"
              className="bg-slate-300 w-full text-base font-medium text-gray-700  rounded-md shadow-md"
            >
              {tokenLoading ? 'Loading...' : 'Confirm Token'}
            </button>
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
          <button
            type="submit"
            className="bg-slate-300 w-full text-base font-medium text-gray-700  rounded-md shadow-md"
          >
            {emailLoading ? 'Loading...' : 'Get Login Link'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
