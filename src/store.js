// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    cart: cartReducer, // Make sure this matches your CartSlice
  },
});

export default store;


