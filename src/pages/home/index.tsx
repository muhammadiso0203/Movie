import { memo, useState } from "react";
import Hero from "./components/hero";
import { useMovie } from "../movie/services/useMovie";
import MovieView from "../../shared/components/movie-view/MovieView";
import button1 from "../../shared/assets/Vector (1).svg";
import button2 from "../../shared/assets/Vector (2).svg";
import { NavLink } from "react-router-dom";

const Movie = () => {
  const { getMovies } = useMovie();
  const { data } = getMovies();

  const [currentIndex, setCurrentIndex] = useState(0);

  const movies = data?.results || [];
  const pageSize = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + pageSize < movies.length ? prev + pageSize : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - pageSize >= 0 ? prev - pageSize : movies.length - pageSize
    );
  };

  return (
    <div>
      <Hero />
      <div className="container mx-auto flex justify-between max-md:mt-5">
        <h1 className="font-medium text-[20px]">На неделе</h1>
        <NavLink
          to={"/movie"}
          className="font-medium text-[16px] flex items-center gap-2 text-[#C61F1F]"
        >
          Показать все <img src={button2} alt="" />
        </NavLink>
      </div>
      <div className="mt-5 flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-[#1D1D1D] rounded-full  flex items-center justify-center max-sm:hidden"
        >
          <img src={button1} alt="prev" />
        </button>

        <div>
          <MovieView
            data={movies.slice(currentIndex, currentIndex + pageSize)}
          />
        </div>

        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-[#1D1D1D] rounded-full  flex items-center justify-center max-sm:hidden"
        >
          <img src={button2} alt="next" />
        </button>
      </div>
    </div>
  );
};

export default memo(Movie);
