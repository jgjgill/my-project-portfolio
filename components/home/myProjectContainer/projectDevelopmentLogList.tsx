import ProjectDevelopmentLogContent from './projectDevelopmentLogContent'
import { IProjectDevelopmentLogParagraph } from './myBlog'

interface ProjectDevelopmentLogListProps {
  logList: IProjectDevelopmentLogParagraph[]
}

const ProjectDevelopmentLogList = ({ logList }: ProjectDevelopmentLogListProps) => {
  return (
    <div className='text-slate-50 space-y-4 py-5 divide-y-4'>
      {logList.map((logItem) => (
        <div key={logItem.title} className='grid grid-cols-9 gap-4'>
          <span className='col-span-2 flex justify-center items-center break-all text-2xl font-bold'>
            {logItem.title}
          </span>

          <div className='col-span-7 break-all space-y-5 divide-y-2'>
            {logItem.contents.map((content) => (
              <ProjectDevelopmentLogContent key={content.title} content={content} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectDevelopmentLogList
