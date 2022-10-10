import { configureStore } from "@reduxjs/toolkit";
// user cart
import cartReducer from "../features/cart/cartSlice.js";
// query
import queryReducer from "../features/query/querySlice.js";

export default configureStore({
  reducer: { cart: cartReducer, query: queryReducer },
});
