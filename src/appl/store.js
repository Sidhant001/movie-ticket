import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
import moviesReducer from "../features/movieSlice"
import cartReducer from "../features/cartSlice"
import { loadCartFromStorage,saveCartToStorage,loadAuthFromStorage, saveAuthToStorage,} from "../utils/localStorage";
const persistedCart = loadCartFromStorage();
const preloadedState = {
  cart: loadCartFromStorage() || undefined,
  auth: loadAuthFromStorage() || undefined,
};
export const store = configureStore({
  reducer: {
    auth:authReducer,
    movie:moviesReducer,
    cart: cartReducer,
  }, 
  preloadedState,
});
store.subscribe(() => {
  saveCartToStorage(store.getState().cart);
  saveAuthToStorage(store.getState().auth);
});