import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.push({ ...action.payload, quantity: 1 });
      return state;
    },
    removeCart: (state, action) => {
      return state.filter(
        (item) => item.episode_id !== action.payload.episode_id
      );
    },
    incrementCart: (state, action) => {
      return state.map((item) => {
        if (item.episode_id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decrementCart: (state, action) => {
      if (
        state.find((item) => item.episode_id === action.payload).quantity === 1
      ) {
        return state.filter((item) => item.episode_id !== action.payload);
      }
      return state.map((item) => {
        if (item.episode_id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
    clearCart: (state) => {
      return initialState;
    },
  },
});

export const { addCart, removeCart, incrementCart, decrementCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
