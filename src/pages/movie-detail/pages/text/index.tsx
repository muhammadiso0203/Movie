import { memo,  } from "react";
import { useMovieDetail } from "../../services/useMovieDetail";
import { useParams } from "react-router-dom";

const TextDetail = () => {
  const { id } = useParams();
  const { getMovieById, getMovieItems } = useMovieDetail();

  const { data } = getMovieById(id || "");
  const { data: creditsData } = getMovieItems(id || "", "credits");



  return (
    <div className="container mx-auto">

      <div className="container mx-auto py-6 ">
        <div className="w-[380px] bg-white text-black flex flex-col mx-auto p-4 rounded-lg shadow-md">
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
          {creditsData?.cast?.slice(0, 5).map((user: any) => (
            <div key={user.id}>
              <h3 className="mt-[16px] font-medium">{user.name}</h3>
            </div>
          ))}
          <div className="mt-[32px] bg-[#2D2D2D] h-[1px]"></div>

          <div className="mt-[16px]">
            <h1 className="text-black font-bold">Overview</h1>
            <h1 className="mt-[24px] font-medium">{data?.overview}</h1>
          </div>

          <button className="w-full h-[52px] rounded-[12px] bg-[#C61F1F] text-white mt-12 font-bold cursor-pointer">
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(TextDetail);
