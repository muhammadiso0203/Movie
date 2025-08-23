import { configureStore } from "@reduxjs/toolkit";
import { sigInSlice } from "./features/SignInSlice";
import { authSlice } from "./features/auth";

export const store = configureStore({
    reducer: {
        sigInSlice: sigInSlice.reducer,
        authSlice: authSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
