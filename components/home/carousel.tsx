import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface CarouselProps {
  imgsInfo: {
    title: string;
    src: StaticImageData;
  }[];
}

const Carousel = ({ imgsInfo }: CarouselProps) => {
  return (
    <div className="flex flex-col px-8 w-full">
      <Slider
        dots={true}
        speed={500}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        className="w-full"
      >
        {imgsInfo.map((imgInfo, i) => (
          <div key={i}>
            <div className="flex flex-col text-center">
              <span className="text-2xl font-semibold text-slate-700">
                {imgInfo.title}
              </span>
              <Image src={imgInfo.src} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
