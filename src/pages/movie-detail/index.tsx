import { memo } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useMovieDetail } from "./services/useMovieDetail";
import { IMAGE_URL } from "../../shared/const";
import MovieView from "../../shared/components/movie-view/MovieView";
import { Button } from "antd";

const MovieDetail = () => {
  const { id } = useParams();
  const { getMovieById, getMovieItems } = useMovieDetail();
  const { data, isLoading } = getMovieById(id || "");
  const { data: similarData } = getMovieItems(id || "", "similar");

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
        <img src={`${IMAGE_URL}${data?.backdrop_path}`} alt="" />
      </div>
      <div>
        <h1 className="text-3xl font-bold">{data?.title}</h1>
        <strong>{data?.budget?.toLocaleString()} USD</strong>
      </div>
      <div className="container flex gap-10 my-4 justify-center">
        <NavLink to="">
          <Button type="primary" style={{ width: 130, height: 40 }}>
            Text
          </Button>
        </NavLink>

        <NavLink to="imageDetail">
          <Button type="primary" style={{ width: 130, height: 40 }}>
            Image
          </Button>
        </NavLink>
      </div>

      <Outlet />
      <div className="mt-10">
        <MovieView data={similarData?.results?.slice(0, 4)} />
      </div>
    </div>
  );
};

export default memo(MovieDetail);
