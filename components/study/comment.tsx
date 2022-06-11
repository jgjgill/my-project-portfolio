interface CommentProps {
  name: string
  content: string
}

const Comment = ({ name, content }: CommentProps) => {
  return (
    <div className='flex items-center space-x-4 py-1'>
      <span className='text-base font-medium text-gray-900'>{name}</span>

      <p className='text-sm font-normal text-gray-700'>{content}</p>
    </div>
  )
}

export default Comment
