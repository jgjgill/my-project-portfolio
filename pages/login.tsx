import { NextPage } from 'next';

const Login: NextPage = () => {
  return (
    <div className="bg-slate-400 px-2 py-2 rounded-md shadow-md">
      <form className="flex flex-col space-y-2 items-center">
        <label htmlFor="name" className="text-base font-medium text-gray-700">
          name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-2 py-1 rounded-md shadow-md"
        />

        <label
          htmlFor="password"
          className="text-base font-medium text-gray-700"
        >
          password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-2 py-1 rounded-md shadow-md"
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
