import { configureStore } from "@reduxjs/toolkit"; 
// user cart
import cartReducer from "../features/cart/cartSlice.js";

export default configureStore({
  reducer: { cart: cartReducer },
});
