import { cls } from './utils'

interface PostContent {
  type: string
  text: string
  annotations?: {
    bold: boolean
    code: string
    color: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
  }
}

export const contentType = (item: PostContent, index: number) => {
  switch (item.type) {
    case 'paragraph':
      return (
        <p
          key={index}
          className={cls(
            'text-base text-slate-400',
            item.annotations?.bold! && 'text-slate-50 font-semibold',
            item.annotations?.code! && 'text-red-400 font-semibold'
          )}
        >
          {item.text}
          <br />
        </p>
      )
    case 'heading_2':
      return (
        <h2 key={index} className='text-slate-50 font-bold'>
          {item.text}
        </h2>
      )
    case 'heading_3':
      return (
        <h3 key={index} className='text-slate-50 font-semibold'>
          {item.text}
          <br />
        </h3>
      )
    case 'text':
      return (
        <span key={index} className='text-slate-400 font-semibold text-base'>
          {item.text}
          <br />
        </span>
      )
    case 'code':
      return (
        <p
          key={index}
          className='whitespace-pre-wrap text-slate-400 overflow-x-auto inline-block p-4 border-2 rounded-md shadow-md'
        >
          {item.text}
        </p>
      )
    case 'bulleted_list_item':
      return <li className='font-medium text-base text-slate-400'>{item.text}</li>

    default:
      return null
  }
}
