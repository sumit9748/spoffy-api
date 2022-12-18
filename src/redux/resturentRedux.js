import { createSlice } from "@reduxjs/toolkit";

const resturentSlice = createSlice({
  name: "resturent",
  initialState: {
    name: "",
    desc: "",
    img: "",
    products: [{
      cat: "",
      price: 0,
      details: "",
      type: "",
      img: "",
    }],
    type: [],
    available: [],
    rating: 0,
    position: {
      lat: "",
      lng: "",
    }

  },
  reducers: {
    resturent: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { resturent } = resturentSlice.actions;
export default resturentSlice.reducer;