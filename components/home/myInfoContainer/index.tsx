import MyInfoLinkList from './myInfoLinkList'
import MyInfoTextList from './myInfoTextList'

const myInfoContainer = () => {
  return (
    <div className='flex flex-col items-center gap-2 border border-slate-400 px-2 py-2 space-y-4 rounded-md shadow-md'>
      <MyInfoTextList />
      <MyInfoLinkList />
    </div>
  )
}

export default myInfoContainer
