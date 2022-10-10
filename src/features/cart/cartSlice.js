// REACT REDUX
import { createSlice } from "@reduxjs/toolkit";

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cnt: 0,
    // maintainance
    updateCnt: 0,
  },
  reducers: {
    //
    //
    //
    //
    //
    //
    //
    //
    addItem: (state, action) => {
      // checks if the item already exists
      var boolExists = false;
      // if the cart is not empty
      if (state.items.length > 0) {
        state.items.forEach((item) => {
          if (action.payload.id === item.id) {
            boolExists = true;
          }
        });
        // check if the item was found
        if (!boolExists) {
          state.items.push(action.payload);
          state.cnt++;
        }
      } else {
        state.items.push(action.payload);
        state.cnt++;
      }

      // maintainance
      state.updateCnt++;
    },
    //
    //
    removeItem: (state, action) => {
      const tempCart = [];

      // search and removeItem
      state.items.forEach((item) => {
        if (action.payload !== item.id) {
          tempCart.push(item);
        } else {
          state.cnt--;
        }
      });

      state.items = tempCart;

      // maintainance
      state.updateCnt++;
    },
    //
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
