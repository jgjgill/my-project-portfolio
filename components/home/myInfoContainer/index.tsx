import MyInfoLinkList from './myInfoLinkList'
import MyInfoTextList from './myInfoTextList'

const myInfoContainer = () => {
  return (
    <div className='border border-slate-400 px-2 py-2 space-y-4 rounded-md shadow-md'>
      <div className='flex justify-between'>
        <div className='w-20 h-20 sm:w-32 sm:h-32 bg-slate-400' />

        <MyInfoLinkList />
      </div>

      <MyInfoTextList />
    </div>
  )
}

export default myInfoContainer
