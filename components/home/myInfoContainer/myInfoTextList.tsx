import DateIcon from 'assets/svgs/myInfo/dateIcon'
import EmailIcon from 'assets/svgs/myInfo/emailIcon'
import NameIcon from 'assets/svgs/myInfo/nameIcon'
import SchoolIcon from 'assets/svgs/myInfo/schoolIcon'
import MyInfoTextItem from './myInfoTextItem'

const TEXT_GROUP = [
  {
    id: 1,
    title: '이름',
    text: '이종길',
    svg: <NameIcon className='w-6 h-6 fill-slate-400 stroke-slate-700' />,
  },
  {
    id: 2,
    title: '생년월일',
    text: '1997.03.13',
    svg: <DateIcon className='w-6 h-6 fill-slate-400 stroke-slate-700' />,
  },
  {
    id: 3,
    title: '학력',
    text: '세종대학교',
    svg: <SchoolIcon className='w-6 h-6 fill-slate-400 stroke-slate-700' />,
  },
  {
    id: 4,
    title: '이메일 주소',
    text: 'dbdltm22@naver.com',
    svg: <EmailIcon className='w-6 h-6 fill-slate-400 stroke-slate-700' />,
  },
]

const MyInfoTextList = () => {
  return (
    <div className='space-y-2'>
      <h1 className='text-4xl text-center font-semibold text-slate-400'>My Info</h1>

      <div className='border-slate-400 border-2 px-4 py-2 rounded-md shadow-md'>
        <ul className='grid grid-cols-2 gap-4 text-center sm:text-left break-words'>
          {TEXT_GROUP.map(({ id, title, text, svg }) => (
            <MyInfoTextItem key={id} title={title} text={text} svg={svg} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MyInfoTextList
