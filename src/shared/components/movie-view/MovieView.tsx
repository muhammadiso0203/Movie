import { memo, type FC } from "react";
import { IMAGE_URL } from "../../const";
import { useNavigate } from "react-router-dom";

interface Props {
  data: any;
}

const MovieView: FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {data?.map((movie: any) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden cursor-pointer transition transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="">
              <img
                loading="lazy"
                src={`${IMAGE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="flex items-center flex-row-reverse justify-between">
                <span className="flex justify-end  text-black font-semibold px-2 py-1 rounded-md text-sm ">
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
              <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(MovieView);
