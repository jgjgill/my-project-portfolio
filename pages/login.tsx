import { NextPage } from 'next';
import Input from '../components/input';

const Login: NextPage = () => {
  return (
    <div className="bg-slate-400 px-2 py-2 rounded-md shadow-md">
      <form className="flex flex-col space-y-2 items-center">
        <Input label="Name" name="name" type='text' placeholder="이름을 입력해주세요" />
        <Input
          label="Password"
          name="password"
          type='password'
          placeholder="비밀번호를 입력해주세요"
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
