import Link from 'next/link'

interface ProjectDescriptionProps {
  descriptions: { title: string; content: string; link: boolean }[]
}

const ProjectDescription = ({ descriptions }: ProjectDescriptionProps) => {
  return (
    <div className='space-y-4 text-left px-2'>
      {descriptions.map((description, i) => (
        <div key={i} className='space-y-2'>
          {description.link ? (
            <>
              <h3 className='text-slate-400 text-2xl font-semibold'>Address</h3>
              <p>
                <Link href={`https://${description.content}`} passHref>
                  <a target='_blank' rel='noopener noreferrer' className='text-slate-50 text-lg font-semibold'>
                    {description.content}
                  </a>
                </Link>
              </p>
            </>
          ) : (
            <>
              <h3 className='text-slate-400 text-2xl font-semibold'>{description.title}</h3>
              <p className='text-slate-50 text-lg font-semibold'>{description.content}</p>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default ProjectDescription
