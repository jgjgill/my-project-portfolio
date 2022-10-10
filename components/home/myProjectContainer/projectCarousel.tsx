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
    <div className='flex flex-col items-center w-full'>
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
            <h2 className='text-2xl font-semibold mb-4 text-slate-400'>{imgInfo.title}</h2>
            <Image src={imgInfo.src} height={500} layout='responsive' alt={imgInfo.alt} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ProjectCarousel
