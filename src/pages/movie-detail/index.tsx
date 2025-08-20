import { memo } from "react";
import { useParams } from "react-router-dom";
import { useMovieDetail } from "./services/useMovieDetail";
import { IMAGE_URL } from "../../shared/const";
import MovieView from "../../shared/components/movie-view/MovieView";

const MovieDetail = () => {
  const { id } = useParams();
  const { getMovieById, getMovieItems } = useMovieDetail();
  const { data, isLoading } = getMovieById(id || "");
  const { data: similarData } = getMovieItems(id || "", "similar");
  const { data: creditsData } = getMovieItems(id || "", "credits");

  console.log(creditsData);

  if (isLoading) {
    return (
      <div className="container mx-auto ">
        <div className="w-full h-[500px] bg-gray-300 animate-pulse"></div>
        <div className="my-3 w-[60%] h-10 bg-gray-300 animate-pulse"></div>
        <div className="my-3 w-[30%] h-10 bg-gray-300 animate-pulse"></div>
      </div>
    );
  }
  return (
    <div className="container mx-auto">
      <div>
        <img
          src={`${IMAGE_URL}${data?.backdrop_path}`}
          alt=""
          className="rounded-2xl h-[680px] w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-between p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-black">
          {data?.title}
        </h1>

        <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 font-semibold shadow-sm">
          {data?.budget?.toLocaleString()} USD
        </span>
      </div>

      <div className="container mx-auto py-6 ">
        <div className="w-[380px] bg-white text-black flex flex-col mx-auto">
          <h1 className="font-bold text-[20px] text-black">Details</h1>
          <ul className="font-medium">
            <li className="mt-[24px] flex justify-between">
              <span>Popularity</span>
              <span>{data?.popularity}</span>
            </li>
            <li className="mt-[16px] flex justify-between">
              <span>Original title</span>
              <span>{data?.original_title}</span>
            </li>
            <li className="mt-[16px] flex justify-between">
              <span>Vote count</span>
              <span>{data?.vote_count}</span>
            </li>
          </ul>
          <div className="mt-[32px] bg-[#2D2D2D] h-[1px]"></div>

          <div className="mt-[32px] text-black font-bold">Roles</div>
          {creditsData?.cast?.slice(0, 5).map((user: any) => {
            return (
              <div key={user.id}>
                <h3 className="mt-[16px] font-medium">{user.name}</h3>
              </div>
            );
          })}
          <div className="mt-[32px] bg-[#2D2D2D] h-[1px]"></div>

          <div className="mt-[16px]">
            <h1 className="text-black font-bold">Overview</h1>

            <h1 className="mt-[24px] font-medium">{data?.overview}</h1>
          </div>
          <button className="w-full h-[52px] rounded-[12px] bg-[#C61F1F] text-white mt-12 font-bold cursor-pointer">Watch</button>
        </div>
      </div>

      <div className="mt-[240px]">
        <MovieView data={similarData?.results.slice(0, 4)} />
      </div>
    </div>
  );
};

export default memo(MovieDetail);
