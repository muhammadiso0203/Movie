import { useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"

export const genreKey = "genreKey"

export const useGenre = ()=>{
    const getGenre = () => useQuery({
        queryKey: [genreKey],
        queryFn: () => api.get("genre/movie/list").then(res => res.data)
    })


    return { getGenre}
}