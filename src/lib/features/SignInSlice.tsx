import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface IState{
    email: string
    password: string
}

const initialState: IState = {
    password: "",
    email: ""
}

export const sigInSlice = createSlice({
    name: "signin",
    initialState,
    reducers:{
        setSignInData: (state, action: PayloadAction<IState>) => {
            state.email = action.payload.email,
            state.password = action.payload.password
        },
        clearSignInData: (state) => {
            state.email = "",
            state.password = ""
        }
    }
})

export const {clearSignInData, setSignInData} = sigInSlice.actions

export default sigInSlice.reducer