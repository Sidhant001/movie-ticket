import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
import moviesReducer from "../features/movieSlice"
import cartReducer from "../features/cartSlice"
import { saveCartToStorage } from "../utils/localStorage";
import { loadCartFromStorage } from "../utils/localStorage";
const persistedCart = loadCartFromStorage();
export const store = configureStore({
  reducer: {
    auth:authReducer,
    movie:moviesReducer,
    cart: cartReducer,
  }, 
  preloadedState: {
    cart: persistedCart,
  },
});
store.subscribe(() => {
  saveCartToStorage(store.getState().cart);
});