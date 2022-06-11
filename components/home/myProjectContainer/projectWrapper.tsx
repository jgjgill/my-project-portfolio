import GithubIcon from 'assets/svgs/common/githubIcon'
import Link from 'next/link'

import { IProjectInfo } from './myBlog'

interface ProjectWrapperProps {
  projectInfo: IProjectInfo
  children: React.ReactNode
}

const ProjectWrapper = ({ projectInfo, children }: ProjectWrapperProps) => {
  return (
    <div className='border border-slate-400 w-full py-4 px-2 text-center space-y-8 shadow-md rounded-md'>
      <div className='space-y-4 px-4 py-2 h-full border border-slate-400 rounded-md shadow-md'>
        <div className='flex items-center px-4 py-2 justify-between text-sm md:text-xl font-bold text-gray-700'>
          <div className='flex text-slate-400 space-x-8'>
            <span>{projectInfo.title}</span>
            <span>{projectInfo.date}</span>
          </div>

          <Link href={projectInfo.git} passHref>
            <a target='_blank' rel='noopener noreferrer'>
              <GithubIcon className='w-6 h-6 fill-slate-400 hover:scale-105 transition' />
            </a>
          </Link>
        </div>

        <div className='h-full flex flex-col space-y-8 p-4'>{children}</div>
      </div>
    </div>
  )
}

export default ProjectWrapper
