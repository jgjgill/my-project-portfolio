interface CommentProps {
  id: number
  name: string
  content: string
}

const Comment = ({ id, name, content }: CommentProps) => {
  return (
    <div key={id} className='flex items-center space-x-4 py-1'>
      <span className='text-base font-medium text-gray-900'>{name}</span>
      <p className='text-sm font-normal text-gray-700'>{content}</p>
    </div>
  )
}

export default Comment
