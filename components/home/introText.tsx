interface IntroTextProps {
  title: string;
  text: string;
  svg: string;
}

const IntroText = ({ title, text, svg }: IntroTextProps) => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4">
      <div className="flex space-x-1">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={svg}
          />
        </svg>
        <span className="text-lg md:min-w-[100px] font-bold break-words text-gray-500">{title}</span>
      </div>
      <p className="text-sm md:text-lg text-left md:text-center whitespace-pre-wrap font-semibold text-gray-700">
        {text}
      </p>
    </div>
  );
};

export default IntroText;
