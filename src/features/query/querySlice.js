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

export const querySlice = createSlice({
  name: "query",
  initialState: {
    string: "?search=&price=0&tags=[]",
    response: [],
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
    modify: (state, action) => {
      // extrF  act values
      const type = action.payload[0] + "=";
      const value = action.payload[1];
      var newString = "";
      const arrQuery = [];

      // find the type in the query.string
      if (state.string.indexOf(type) !== -1) {
        // arrQuery = state.string.split(
        const tempType = state.string.substring(
          state.string.indexOf(type),
          type.length + 1
        );
        const tempType2 = state.string.split(tempType);

        arrQuery[0] = tempType2[0];
        arrQuery[1] = tempType2[1].slice(tempType2[1].indexOf("&"));

        //
        newString = arrQuery[0] + type + value + arrQuery[1];
      }
      console.log(newString);
    },

    //
    //
    clear: (state, action) => {},
    //
  },
});

// Action creators are generated for each case reducer function
export const { modify, clear } = querySlice.actions;

export default querySlice.reducer;
