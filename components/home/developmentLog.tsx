import Button from '@components/button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface DevelopmentLogProps {
  contents: {
    title: string;
    content: string;
  }[];
}

const DevelopmentLog = ({ contents }: DevelopmentLogProps) => {
  const [showDevelopmentLog, setShowDevelopmentLog] = useState(false);

  const {
    register: developRegister,
    handleSubmit: developSubmit,
    formState: { errors: developErrors },
  } = useForm();

  const developValid = () => {
    setShowDevelopmentLog((prev) => !prev);
  };

  const onToggleDevelopmentLog = () => {
    setShowDevelopmentLog((prev) => !prev);
  };

  return (
    <div>
      <form onSubmit={developSubmit(developValid)}>
        <Button text="Development Log" loading={false} />
      </form>

      {showDevelopmentLog && (
        <div>
          <div
            onClick={onToggleDevelopmentLog}
            className="fixed -top-8 left-0 right-0 bottom-0 bg-none"
          />
          <div className="fixed overflow-y-auto top-20 left-10 right-10 bottom-10 px-2 py-8 bg-slate-800 rounded-md shadow-md">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 p-1 text-2xl font-semibold text-slate-50">개발일지</span>
            <button
              className="absolute right-0 top-0 p-1 cursor-pointer"
              onClick={onToggleDevelopmentLog}
            >
              <svg
                className="w-6 h-6 stroke-slate-50 hover:scale-105 transition"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="text-slate-50 space-y-4 py-5">
              {contents.map((content, i) => (
                <div key={i} className="grid grid-cols-6 gap-4">
                  <span className="col-span-1 flex justify-center items-center break-all">
                    {content.title}
                  </span>
                  <p className="col-span-5 flex items-center break-all justify-start">
                    {content.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DevelopmentLog;
