interface ProjectContainerProps {
  title: string;
  date: string;
  address: string;
  git: string;
}

const ProjectContainer = ({
  title,
  date,
  address,
  git,
}: ProjectContainerProps) => {
  return (
    <div className="bg-slate-400 space-y-4 px-4 py-2 rounded-md shadow-md">
      <div className="flex items-center px-4 py-2  justify-between text-xl font-bold text-gray-700">
        <div className="flex space-x-8">
          <span>{title}</span>
          <span>{date}</span>
        </div>
        <div className="flex space-x-8">
          <span>{address}</span>
        </div>
        <div>{git}</div>
      </div>
      <div className="bg-slate-500 h-screen rounded-md shadow-md"></div>
    </div>
  );
};

export default ProjectContainer;
