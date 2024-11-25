// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // Check if the item is already in the cart
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        state.items.push(action.payload);  // If not, add it to the cart
      } else {
        state.items[itemIndex].quantity += 1;  // If yes, increase the quantity
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export the actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;
