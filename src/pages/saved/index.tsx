import { memo } from "react";
import { useSelector } from "react-redux";
import MovieView from "../../shared/components/movie-view/MovieView";
import type { RootState } from "../../app/store";

const Saved = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.value);

  return (
    <div className="container mx-auto py-10">
      {wishlist.length > 0 ? (
        <MovieView data={wishlist}/>
      ) : (
        <p className="text-gray-500 text-center flex justify-center items-center h-[40vh]">Movies have not been saved yet</p>
      )}
    </div>
  );
};

export default memo(Saved);