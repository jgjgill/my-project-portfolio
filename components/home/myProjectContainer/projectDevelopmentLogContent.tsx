import Link from 'next/link'

import { IProjectDevelopmentLogContent } from './myBlog'

interface ProjectDevelopmentLogContentProps {
  content: IProjectDevelopmentLogContent
}

const ProjectDevelopmentLogContent = ({ content }: ProjectDevelopmentLogContentProps) => {
  return (
    <div className='flex flex-col items-start space-y-2'>
      <span className='text-lg font-semibold'>{content.title}</span>
      <p className='text-left'>{content.text}</p>

      {content.link && (
        <Link href='study/36'>
          <a target='_blank' rel='noopener noreferrer'>
            <span className='transition underline hover:font-bold'>관련 게시글</span>
          </a>
        </Link>
      )}
    </div>
  )
}

export default ProjectDevelopmentLogContent
