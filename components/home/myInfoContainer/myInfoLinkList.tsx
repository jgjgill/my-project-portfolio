import GithubIcon from 'assets/svgs/common/githubIcon'
import InstagramIcon from 'assets/svgs/myInfo/instagramIcon'
import ResumeIcon from 'assets/svgs/myInfo/resumeIcon'
import MyInfoLinkItem from './myInfoLinkItem'

const MyInfoLinkList = () => {
  return (
    <div className='space-y-2'>
      <ul className='grid grid-cols-3 h-20 sm:h-32 w-[343px] border-2 border-slate-400 px-2 py-2 rounded-md shadow-md'>
        <MyInfoLinkItem href='https://velog.io/@jgjgill'>
          <span className='text-xl font-bold text-slate-50 hover:text-[1.3rem]'>velog</span>
        </MyInfoLinkItem>

        <MyInfoLinkItem href='https://www.instagram.com/jgjgill/'>
          <InstagramIcon className='w-6 h-6 fill-slate-50 hover:scale-105 transition' />
        </MyInfoLinkItem>

        <MyInfoLinkItem href='https://github.com/jgjgill'>
          <GithubIcon className='w-6 h-6 fill-slate-50 hover:scale-105 transition' />
        </MyInfoLinkItem>

        <MyInfoLinkItem href='https://eight-kitty-e55.notion.site/jgjgill-e51b44e7e4d346269b2bea55ccc6ba9f'>
          <ResumeIcon className='w-6 h-6 fill-slate-50 hover:scale-105 transition' />
        </MyInfoLinkItem>
      </ul>
    </div>
  )
}

export default MyInfoLinkList
