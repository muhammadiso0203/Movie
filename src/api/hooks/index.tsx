import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from ".."

export const user = "users"

export const useUser = () => {
    const client = useQueryClient()

    const register = useMutation({
        mutationFn: (data: any) => api.post("/users/signup", data),
        onSuccess: () => {
            client.invalidateQueries({queryKey: [user]})
        }
    })
    return {register}
}