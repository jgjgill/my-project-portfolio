import ProjectContainer from './projectContainer';

interface ProjectProps {}

const Project = ({}: ProjectProps) => {
  return (
    <div className="bg-slate-200 w-full py-4 px-2 text-center space-y-8">
      <ProjectContainer />
      <ProjectContainer />
      <ProjectContainer />
    </div>
  );
};

export default Project;
