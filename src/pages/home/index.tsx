import { memo } from "react";
import Hero from "./components/hero";
import { useMovie } from "../movie/services/useMovie";
import MovieView from "../../shared/components/movie-view/MovieView";

const Movie = () => {
  const { getMovies } = useMovie();
  const { data } = getMovies();

  return (
    <div>
      <Hero />
      <div className="mt-10">
        <MovieView data={data?.results.slice(0, 4)} />
      </div>
    </div>
  );
};

export default memo(Movie);
