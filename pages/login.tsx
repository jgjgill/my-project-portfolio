import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import Input from '@components/input';

interface LoginForm {
  name?: string;
  password?: string;
}

const Login: NextPage = () => {
  const {
    register,
    handleSubmit: loginSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const loginValid = (data: LoginForm) => {
    console.log(data)
  }

  return (
    <div className="bg-slate-400 px-2 py-2 rounded-md shadow-md">
      <form
        onSubmit={loginSubmit(loginValid)}
        className="flex flex-col space-y-2 items-center"
      >
        <Input
          label="Name"
          name="name"
          type="text"
          placeholder="이름을 입력해주세요"
          register={register('name', { required: true })}
          required
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          register={register('password', { required: true })}
          required
        />

        <button
          type="submit"
          className="bg-slate-300 w-full text-base font-medium text-gray-700  rounded-md shadow-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
