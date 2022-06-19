import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Slider from 'react-slick'
import Image from 'next/image'

import { IProjectCarousel } from './myBlog'

interface ProjectCarouselProps {
  imgsInfo: IProjectCarousel[]
}

const ProjectCarousel = ({ imgsInfo }: ProjectCarouselProps) => {
  return (
    <div className='flex flex-col items-center px-8 w-full border border-slate-400 rounded-md shadow-md'>
      <Slider
        dots
        speed={500}
        infinite
        slidesToShow={1}
        slidesToScroll={1}
        autoplay
        autoplaySpeed={5000}
        className='w-[300px] sm:w-[450px] lg:w-[800px] flex p-4'
      >
        {imgsInfo.map((imgInfo) => (
          <div key={imgInfo.title} className='flex flex-col text-center'>
            <h3 className='text-2xl font-semibold mb-4 text-slate-400'>{imgInfo.title}</h3>
            <Image src={imgInfo.src} height={500} priority />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ProjectCarousel
