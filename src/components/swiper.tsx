// Import Swiper React components
import { useState, useEffect, useContext } from "react";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Parallax,
} from "swiper/modules";

import { MoviesSrv } from "../utils/api/services";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import styles from "./Swiper.module.css";

const SwiperSlider = () => {
  const [AllMovies, setAllMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allMovies = await MoviesSrv();
        setAllMovies(allMovies);
      } catch (err) {}
    };
    fetchData();
  }, []);

  // console.log(AllMovies);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y, Parallax]}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={8}
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 1,
          },
          576: {
            width: 576,
            slidesPerView: 2,
          },
          640: {
            width: 640,
            slidesPerView: 3,
          },
          768: {
            width: 768,
            slidesPerView: 4,
          },
          1000: {
            width: 1000,
            slidesPerView: 8,
          },
          1300: {
            width: 1360,
            slidesPerView: 8,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="mySwiper"
      >
        {AllMovies.map((m: any) => (
          // <Movie movie={m} key={m.id}/>
          <SwiperSlide key={m.id} className=" pt-5 mb-10">
            <Link
              href={`/movies/movie?id=${m.id}&gid=${
                m.genres != undefined ? m.genres[0] : `drama`
              }`}
            >
              <div className="mr-2 ml-2 rounded overflow-hidden shadow-lg bg-gray-700 pb-3">
                <Image
                  className="w-full"
                  src={m.poster}
                  alt={m.title}
                  width={500}
                  height={300}
                  priority
                />
                <div className="px-4 py-2">
                  <div className="font-bold text-xs h-10 text-white">
                    {m.title}
                  </div>
                </div>
                <div className="mb-2">
                  <span className="block w-10 px-2 py-2 bg-yellow-200 rounded-full font-semibold text-red-700 m-auto align-middle">
                    {m.imdb_rating}
                  </span>
                  {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{m.genres+''}</span> */}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
