import { memo, type ChangeEvent } from "react";
import { useDebounce } from "../../shared/hooks/useDebounse";
import { useParamsHook } from "../../shared/hooks/useParams";
import { useSearch } from "./services/useSearch";
import { Input } from "antd";
import MovieView from "../../shared/components/movie-view/MovieView";

const Search = () => {
  const { getParam, setParam, removeParam } = useParamsHook();
  const value = getParam("search") || "";
  const { getMoviesSearch } = useSearch();
  const debouncedValue = useDebounce(value, 1000);

  const { data } = getMoviesSearch({ query: debouncedValue });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    if (v) {
      setParam("search", v);
    } else {
      removeParam("search");
    }
  };
  return (
    <div className="container mx-auto py-10">
      <Input value={value} onChange={handleChange} placeholder="search..." style={{padding:10}} />
      <div className="mt-6">
        <MovieView data={data?.results} />
      </div>
    </div>
  );
};

export default memo(Search)
