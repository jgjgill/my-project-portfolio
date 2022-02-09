import { NextPage } from 'next';

const Join: NextPage = () => {
  return (
    <div className="bg-slate-400 px-2 py-2 rounded-md shadow-md">
      <form className="flex flex-col space-y-2 items-center">
        <label htmlFor="name" className="text-base font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder='이름을 입력해주세요'
          className="w-full px-2 py-1 text-center rounded-md shadow-md"
        />

        <label
          htmlFor="password"
          className="text-base font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder='비밀번호를 입력해주세요'
          className="w-full px-2 py-1 text-center rounded-md shadow-md "
        />

        <label
          htmlFor="passwordCheck"
          className="text-base font-medium text-gray-700"
        >
          PasswordCheck
        </label>
        <input
          type="password"
          id="passwordCheck"
          placeholder='비밀번호를 다시 한 번 입력해주세요'
          className="w-full px-2 py-1 text-center rounded-md shadow-md"
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
