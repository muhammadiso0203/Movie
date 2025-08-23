import { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import smotri from "../../../shared/assets/Vector (4).svg";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/free-mode";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/thumbs";

import "./style.css";
import { useMovie } from "../../movie/services/useMovie";
import { IMAGE_URL } from "../../../shared/const";

const Home = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const { getMovies } = useMovie();
  const { data } = getMovies();

  return (
    <div className="container mx-auto mt-5">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 rounded-xl"
      >
        <div>
          {data?.results.map((movie: any) => (
            <SwiperSlide key={movie.id}>
              <div>
                <img src={IMAGE_URL + movie.backdrop_path} />
              </div>
              <div className="absolute bottom-7 max-lg:hidden w-[380px]">
                <div className="flex items-center justify-center gap-4 mb-7">
                  <span className="bottom-20 text-white line-clamp-1">
                    {movie.release_date}
                  </span>
                  <div className="w-1 h-1 rounded-[50%] bg-white"></div>
                  <p
                    className="text-white line-clamp-1"
                    title={movie.title}
                  >
                    {movie.title}
                  </p>
                  <div className="w-1 h-1 rounded-[50%] bg-white"></div>
                  <span className="bottom-20 text-white">
                    {movie.adult ? "+18" : "+16"}
                  </span>
                </div>
                <div className="flex items-center justify-center bg-white text-white w-96 h-[52px] rounded-xl cursor-pointer">
                  <button className="flex items-center justify-center gap-2 text-[#C61F1F]">
                    <img src={smotri} alt="" />
                    <p>Смотреть</p>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <Swiper 
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper hero-thumbs"
        style={{ width: "37.6%" }}
      >
        {data?.results.map((movie: any) => (
          <SwiperSlide className="rounded-xl overflow-hidden"  key={movie.id}>
            <img src={IMAGE_URL + movie.backdrop_path} className="py-3" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(Home);
