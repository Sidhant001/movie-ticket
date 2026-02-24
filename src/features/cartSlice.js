import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (i) => i.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...item,
          quantity: 1,
        });
      }

      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;

      const existingItem = state.items.find(
        (i) => i.id === id
      );

      if (!existingItem) return;

      state.totalQuantity -= 1;
      state.totalAmount -= existingItem.price;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (i) => i.id !== id
        );
      } else {
        existingItem.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;