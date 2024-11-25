import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../feature/slice/Add_to_cart_slice.js';

const store = configureStore({
    reducer: {
      cart: cartReducer,  // Add your cart slice here
    },
  });
  
  export default store;  // Make sure to use default export