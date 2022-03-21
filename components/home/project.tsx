import ProjectContainer from './projectContainer';

interface ProjectProps {}

const Project = ({}: ProjectProps) => {
  return (
    <div className="bg-slate-200 w-full py-4 px-2 text-center space-y-8 shadow-md rounded-md">
      <ProjectContainer
        title="My Blog"
        date="2022-02-08 ~ ing..."
        git="https://github.com/jgjgill/my_project_portfolio"
      />
      <ProjectContainer
        title="Calendar-Project"
        date="2022-01-05 ~ 2022-01-30"
        git="https://github.com/JS-TFT/Calendar-Project"
      />
    </div>
  );
};

export default Project;
