import { Post } from '@prisma/client'
import ListItem from './listItem'

interface PostWithCount extends Post {
  _count: {
    comments: number
    likes: number
  }
}

interface FilteredListProps {
  filteredList: PostWithCount[]
}

const FilteredList = ({ filteredList }: FilteredListProps) => {
  return (
    <div className='border border-slate-400 py-2 px-2 min-h-[12rem] rounded-md shadow-md'>
      <div className='space-y-3'>
        {filteredList.map((filteredItem) => (
          <ListItem key={filteredItem.id} id={filteredItem.id} text={filteredItem.theme} title={filteredItem.title} />
        ))}
      </div>
    </div>
  )
}

export default FilteredList
