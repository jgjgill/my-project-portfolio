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
    <div className="flex flex-col px-8 w-full border border-slate-400 rounded-md shadow-md">
      <Slider
        dots={true}
        speed={500}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={5000}
        className="w-full p-4"
      >
        {imgsInfo.map((imgInfo, i) => (
          <div key={i}>
            <div className="flex flex-col text-center">
              <span className="text-2xl font-semibold mb-4 text-slate-400">
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
