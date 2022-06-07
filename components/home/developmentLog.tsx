import Button from '@components/button'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface DevelopmentLogContents {
  paragraph: string
  contents: {
    contentTitle: string
    contentText: string
    contentLink?: string
  }[]
}

interface DevelopmentLogProps {
  logContents: DevelopmentLogContents[]
}

const DevelopmentLog = ({ logContents }: DevelopmentLogProps) => {
  const [showDevelopmentLog, setShowDevelopmentLog] = useState(false)

  const { handleSubmit: developSubmit } = useForm()

  const developValid = () => {
    setShowDevelopmentLog((prev) => !prev)
  }

  const onToggleDevelopmentLog = () => {
    setShowDevelopmentLog((prev) => !prev)
  }

  return (
    <div>
      <form onSubmit={developSubmit(developValid)}>
        <Button text='Development Log' loading={false} />
      </form>

      {showDevelopmentLog && (
        <div>
          <div className='fixed overflow-y-auto top-20 left-10 right-10 bottom-10 px-2 py-8 bg-slate-800 rounded-md shadow-md'>
            <span className='absolute top-0 left-1/2 -translate-x-1/2 p-1 text-2xl font-semibold text-slate-50'>
              개발일지
            </span>
            <button
              type='button'
              className='absolute right-0 top-0 p-1 cursor-pointer'
              onClick={onToggleDevelopmentLog}
            >
              <svg
                className='w-6 h-6 stroke-slate-50 hover:scale-105 transition'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            <div className='text-slate-50 space-y-4 py-5 divide-y-4'>
              {logContents.map((logContent, i) => (
                <div key={i} className='grid grid-cols-9 gap-4'>
                  <span className='col-span-2 flex justify-center items-center break-all text-2xl font-bold'>
                    {logContent.paragraph}
                  </span>

                  <div className='col-span-7 break-all space-y-5 divide-y-2'>
                    {logContent.contents.map((content, index) => (
                      <div key={index} className='flex flex-col items-start space-y-2'>
                        <span className='text-lg font-semibold'>{content.contentTitle}</span>
                        <p className='text-left'>{content.contentText}</p>

                        {content.contentLink && (
                          <Link href='study/36'>
                            <a target='_blank' rel='noopener noreferrer'>
                              <span className='transition underline hover:font-bold'>관련 게시글</span>
                            </a>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DevelopmentLog
