import { configureStore } from "@reduxjs/toolkit";
import like from "../pages/saved/store"

export const store = configureStore({
  reducer: {
    fake: () => "laylo",
    wishlist: like
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;