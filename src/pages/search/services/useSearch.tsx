import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";

interface IParams{
    query: string;
}

const search = ["search-key"]

export const useSearch = () => {
    const getMoviesSearch = (params: IParams) => useQuery({
        queryKey:[search, params],
        queryFn: () => api.get(`search/movie`, {params}).then(res => res.data)
    })

    return {getMoviesSearch}
}