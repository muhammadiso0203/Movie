import { memo} from "react";
import { useMovie } from "./services/useMovie";
import MovieView from "../../shared/components/movie-view/MovieView";
import { Pagination, Select, Skeleton, type PaginationProps } from "antd";
import { useGenre } from "./services/useGenre";
import { useParamsHook } from "../../shared/hooks/useParams";
import { RELEASE_DATE } from "../../shared/static";

const Movie = () => {
  const { getParam, setParam, removeParam } = useParamsHook();
  const page = getParam("page") || "1 ";
  const with_genres = getParam("genre") || "";
  const release = getParam("release") || "";


  const release_date = RELEASE_DATE.find(
    (i: any) => i.value === Number(release)
  );

  const { getMovies } = useMovie();
  const { getGenre } = useGenre();
  const { data, isLoading } = getMovies({
    page,
    with_genres,
    "release_date.gte": release_date?.gte,
    "release_date.lte": release_date?.lte,
  });
  const { data: genreData } = getGenre();
  const option = genreData?.genres.map((release: any) => ({
    value: release.id,
    label: release.name,
  }));

  const handleChange = (value: string) => {
    setParam("genre", value);
  };

  const handleChangeRelease = (value: string) => {
    setParam("release", value);
  };

  const onChange: PaginationProps["onChange"] = (page) => {
    if (page === 1) {
      removeParam("page");
    } else {
      setParam("page", page);
    }
  };

  return (
    <div className="Index">
      <div className="container mx-auto flex gap-5">
        <Select
          onChange={handleChange}
          placeholder="Select genre"
          style={{ width: 150 }}
          options={option}
        />
        <Select
        className="mr-20"
          onChange={handleChangeRelease}
          style={{ width: 150 }}
          placeholder="Select time"
          options={RELEASE_DATE}
        />
      </div>
      <br />
      {isLoading && (
        <div className="container mx-auto grid grid-cols-4 gap-3">
          <Skeleton.Input
            active
            style={{
              width: 331,
              height: 564,
              padding: 20,
            }}
          />
          <Skeleton.Input
            active
            style={{
              width: 331,
              height: 564,
              padding: 20,
            }}
          />
          <Skeleton.Input
            active
            style={{
              width: 331,
              height: 564,
              padding: 20,
            }}
          />
          <Skeleton.Input
            active
            style={{
              width: 331,
              height: 564,
              padding: 20,
            }}
          />
          <Skeleton.Input
            active
            style={{
              width: 331,
              height: 564,
              padding: 20,
            }}
          />
          <Skeleton.Input
            active
            style={{
              width: 331,
              height: 564,
              padding: 20,
            }}
          />
          <Skeleton.Input
            active
            style={{
              width: 331,
              height: 564,
              padding: 20,
            }}
          />
          <Skeleton.Input
            active
            style={{
              width: 331,
              height: 564,
              padding: 20,
            }}
          />
        </div>
      )}
      <MovieView data={data?.results} />
      <div className="flex justify-center mt-10">
        <Pagination
          current={Number(page)}
          onChange={onChange}
          showSizeChanger={false}
          total={data?.total_results}
        />
      </div>
    </div>
  );
};

export default memo(Movie);
