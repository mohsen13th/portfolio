// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
  } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const SwiperTest = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={50}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
          <Image
            src={'https://moviesapi.ir/images/tt0111161_poster.jpg'}
            alt={'test'}
            width={1500}
            height={500}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'https://moviesapi.ir/images/tt0068646_poster.jpg'}
            alt={'test'}
            width={1500}
            height={500}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'https://moviesapi.ir/images/tt0071562_poster.jpg'}
            alt={'test'}
            width={1500}
            height={500}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'https://moviesapi.ir/images/tt0468569_poster.jpg'}
            alt={'test'}
            width={1500}
            height={500}
            priority
          />
        </SwiperSlide>
    </Swiper>
  );
};

export default SwiperTest;