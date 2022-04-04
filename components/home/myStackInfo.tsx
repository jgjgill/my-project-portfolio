interface MyStackInfoProps {
  stack: string;
  contents: string[];
}

const MyStackInfo = ({ stack, contents }: MyStackInfoProps) => {
  return (
    <div className="absolute whitespace-pre z-10 bg-slate-300 rounded-md shadow-md">
      <span className="text-slate-700 text-lg font-semibold ">
        내가 생각하는 {stack}
      </span>
      <ul>
        {contents.map((content, i) => (
          <li key={i} className="text-slate-500 text-base font-medium">
            {content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyStackInfo;
