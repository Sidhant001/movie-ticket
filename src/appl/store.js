import { configureStore } from "@reduxjs/toolkit";
import {authReducer} from "../features/authSlice"
import {movieReducer} from "../features/movieSlice"
import {cartReducer} from "../features/cartSlice"

export const store = configureStore({
  reducer: {
    auth:authReducer,
    movie:movieReducer,
    cart: cartReducer,
  },
});