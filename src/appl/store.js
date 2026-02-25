import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
import moviesReducer from "../features/movieSlice"
import cartReducer from "../features/cartSlice"

export const store = configureStore({
  reducer: {
    auth:authReducer,
    movie:moviesReducer,
    cart: cartReducer,
  },
});