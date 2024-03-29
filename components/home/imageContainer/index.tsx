import test from '@public/test1.png'
import Image from 'next/image'

const ImageContainer = () => {
  return (
    <div className='relative'>
      <Image src={test} placeholder='blur' height={500} layout='responsive' alt='메인 이미지' priority />

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 px-2 py-2 space-y-4 rounded-md shadow-md'>
        <p className='whitespace-pre text-xs sm:text-xl md:text-2xl  font-bold md:leading-loose text-slate-50 text-center'>
          {`프론트엔드 개발자를 꿈꾸고 있습니다.\n즐기면서 개발을 배우고 있습니다.\n웹에서의 기능 구현에 관심이 많습니다.`}
        </p>
      </div>

      <dl className='absolute flex bottom-5 right-2 text-xs sm:text-right font-normal text-slate-50'>
        <dt>Last Update:</dt>
        <dd>2022.12.14 </dd>
      </dl>
    </div>
  )
}

export default ImageContainer
