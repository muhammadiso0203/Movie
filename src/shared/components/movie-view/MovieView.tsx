import { memo, type FC } from "react";
import { IMAGE_URL } from "../../const";
import { useNavigate } from "react-router-dom";
import { Bookmark } from "lucide-react";
import { toggleWishes } from "../../../pages/saved/store";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  data: any;
}

const MovieView: FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishes = useSelector((state: any) => state.wishlist.value);

  return (
    <div className="container mx-auto px-4 flex justify-center">
      <div
        className="
          grid gap-5 
          grid-cols-4  
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4 
          max-[640px]:grid-cols-2
        "
      >
        {data?.map((movie: any) => {
          const isSaved = wishes.some((item: any) => item.id === movie.id);

          return (
            <div
              key={movie.id}
              onClick={() => navigate(`/movie/${movie.id}`)}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition transform hover:-translate-y-2 hover:shadow-2xl group"
            >
              <img
                loading="lazy"
                src={`${IMAGE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-[350px] object-cover"
              />

              <button
                className={`absolute top-2 right-2 rounded-full p-1 shadow-md cursor-pointer 
      transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500
        ${isSaved ? "bg-purple-600" : "bg-gray-200"}`}
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(toggleWishes(movie));
                }}
              >
                <Bookmark
                  className={`w-7 h-7 ${
                    isSaved ? "text-white" : "text-gray-700"
                  }`}
                />
              </button>

              <div className="flex items-center flex-row-reverse justify-between">
                <span className="text-black font-semibold px-2 py-1 rounded-md text-sm">
                  ⭐ {movie.vote_average.toFixed(1)}
                </span>
                <div className="p-4">
                  <h3
                    className="font-bold text-lg line-clamp-1"
                    title={movie.title}
                  >
                    {movie.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {movie.release_date}
                  </p>
                </div>
              </div>
              <button className="mt-3 w-full bg-[#C61F1F] hover:bg-[#a81818] text-white py-3 rounded-lg transition">
                View Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(MovieView);
