import ProjectContainer from './projectContainer';

interface ProjectProps {}

const Project = ({}: ProjectProps) => {
  return (
    <div className="bg-slate-200 w-full py-4 px-2 text-center space-y-8">
      <ProjectContainer title='프로젝트1' date='2022-02-09' address='jgjgill' git='git' />
      <ProjectContainer title='프로젝트2' date='2022-02-10' address='jgjgill' git='git' />
      <ProjectContainer title='프로젝트3' date='2022-02-11' address='jgjgill' git='git' />
    </div>
  );
};

export default Project;
