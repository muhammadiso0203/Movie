import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IWishlist {
    value: any[]
}

const initialState: IWishlist = {
    value: JSON.parse(localStorage.getItem("wishlist") || "[]") || []
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        toggleWishes: (state, action: PayloadAction<any>) => {
            const exist = state.value.some(item => item.id === action.payload.id)
            if (exist) {
                state.value = state.value.filter(item => item.id !== action.payload.id)
            } else {
                state.value.push(action.payload)
            }
            localStorage.setItem("wishlist", JSON.stringify(state.value));
        }
    }
})

export const {toggleWishes} = wishlistSlice.actions
export default wishlistSlice.reducer