import Link from 'next/link'

import { IProjectDescription } from './myBlog'

interface ProjectDescriptionItemProps {
  description: IProjectDescription
}

const ProjectDescriptionItem = ({ description }: ProjectDescriptionItemProps) => {
  return (
    <div className='space-y-2'>
      <h3 className='text-slate-400 text-2xl font-semibold'>{description.title}</h3>
      {description.link ? (
        <Link href={`https://${description.content}`} passHref>
          <a target='_blank' rel='noopener noreferrer' className='text-slate-50 text-lg font-semibold'>
            {description.content}
          </a>
        </Link>
      ) : (
        <p className='text-slate-50 text-lg font-semibold'>{description.content}</p>
      )}
    </div>
  )
}

export default ProjectDescriptionItem
