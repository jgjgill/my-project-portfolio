import ProjectDescriptionItem from './projectDescriptionItem'
import { IProjectDescription } from './myBlog'

interface ProjectDescriptionProps {
  descriptions: IProjectDescription[]
}

const ProjectDescription = ({ descriptions }: ProjectDescriptionProps) => {
  return (
    <div className='space-y-4 text-left px-2'>
      {descriptions.map((description) => (
        <ProjectDescriptionItem key={description.title} description={description} />
      ))}
    </div>
  )
}

export default ProjectDescription
