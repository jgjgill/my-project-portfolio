import IntroText from './introText'

interface MyInfoProps {}

const MyInfo = ({}: MyInfoProps) => {
  return (
    <>
      <p className='text-4xl text-center font-semibold text-slate-400'>My Info</p>
      <div className='border-slate-400 border-2 px-4 py-2 rounded-md shadow-md'>
        <div className='grid grid-cols-2 gap-4 text-center sm:text-left break-words'>
          <IntroText
            title='이름'
            text='이종길'
            svg='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
          <IntroText
            title='생년월일'
            text='1997.03.13'
            svg='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
          />
          <IntroText
            title='학력'
            text='세종대학교'
            svg='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
          />
          <IntroText
            title='이메일 주소'
            text='dbdltm22@naver.com'
            svg='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          />
        </div>
      </div>
    </>
  )
}

export default MyInfo
