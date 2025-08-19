import { memo, type FC } from "react";
import line from "../../../shared/assets/Vector (2).svg";
import { NavLink, useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../../../shared/const";
import chiziq2 from "../../../shared/assets/Vector (2).svg";
import chiziq from "../../../shared/assets/Vector (1).svg";

interface Props {
  data: any;
}

const Main: FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <main className="container mx-auto">
      <div className="flex justify-between mt-[50px]">
        <h1 className="ml-[90px] text-[20px] font-medium">На неделе</h1>
        <NavLink
          to={"/movie"}
          className="flex gap-1.5 text-[#C61F1F] cursor-pointer mb-5"
        >
          <div className="flex mr-[90px] items-center gap-[6px]">
            <h1 className="font-medium">Показать все</h1>
            <img src={line} alt="" className="max-w-4 max-h-4" />
          </div>
        </NavLink>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <button className="w-12 h-12 bg-[#1D1D1D] rounded-[50%] cursor-pointer ">
          <img src={chiziq} alt="" className="mx-auto" />
        </button>
        {data?.slice(0, 4).map((movie: any) => (
          <div
            key={movie.id}
            className="bg-gray-50 w-[300px] rounded-xl shadow-2xl text-center"
          >
            <div
              onClick={() => navigate(`/movie/${movie.id}`)}
              className="w-full bg-[#1D1D1D] rounded-xl overflow-hidden"
            >
              <img
                loading="lazy"
                src={`${IMAGE_URL}${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="p-2">
              <h3
                className="font-bold text-xl line-clamp-1"
                title={movie.title}
              >
                {movie.title}
              </h3>
              <p>Date: {movie.release_date}</p>
            </div>
          </div>
        ))}
        <button className="w-12 h-12 bg-[#1D1D1D] rounded-[50%] cursor-pointer">
          <img src={chiziq2} alt="" className="mx-auto" />
        </button>
      </div>
    </main>
  );
};

export default memo(Main);
