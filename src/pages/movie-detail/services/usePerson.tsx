import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";

export const personKey = "personDetail";

export const usePerson = () => {
  const getPersonById = (id: string) =>
    useQuery({
      queryKey: [personKey, id],
      queryFn: () => api.get(`person/${id}`).then((res) => res.data),
    });

  return { getPersonById };
};
