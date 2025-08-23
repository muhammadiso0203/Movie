import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from ".."

export const user = "user"

export const useUser = () => {
    const client = useQueryClient()

    const register = useMutation({
        mutationFn: (data: any) => api.post("auth/register", data),
        onSuccess: () => {
            client.invalidateQueries({queryKey: [user]})
        }
    })
    return {register}
}