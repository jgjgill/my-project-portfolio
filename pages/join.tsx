import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import Input from '@components/input';

interface JoinForm {
  name?: string;
  password?: string;
  passwordCheck?: string;
}

const Join: NextPage = () => {
  const {
    register,
    handleSubmit: joinSubmit,
    formState: { errors },
    setError,
  } = useForm<JoinForm>({
    mode: 'onBlur',
  });

  const joinValid = (data: JoinForm) => {
    if (data.password !== data.passwordCheck) {
      setError('passwordCheck', {
        message: '비밀번호가 일치하지 않습니다!',
      });
      setError;
    }
  };

  return (
    <div className="bg-slate-400 px-2 py-2 rounded-md shadow-md">
      <form
        onSubmit={joinSubmit(joinValid)}
        className="flex flex-col space-y-2 items-center"
      >
        <Input
          label="Name"
          name="name"
          type="text"
          placeholder="2글자 이상 이름을 입력해주세요"
          register={register('name', {
            required: true,
            minLength: {
              value: 2,
              message: '2글자 이상 입력하셔야 합니다!',
            },
          })}
          required
          errors={errors.name}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="비밀번호 8자 이상 입력해주세요"
          register={register('password', {
            required: true,
            minLength: { value: 8, message: '8자 이상 입력하셔야 합니다!' },
          })}
          required
          errors={errors.password}
        />
        <Input
          label="PasswordCheck"
          name="passwordCheck"
          type="password"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          register={register('passwordCheck', {
            required: true,
            minLength: { value: 8, message: '8자 이상 입력하셔야 합니다!' },
          })}
          required
          errors={errors.passwordCheck}
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

export default Join;
