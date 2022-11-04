import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const pointSlice = createSlice({
  name: "point",
  initialState: {
    pointArr: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action: any) => {
        return {
          ...state,
          ...action.payload,
        };
      })
      .addCase("SET_POINT", (state, action: any) => {
        state.pointArr = action.payload;
        return state;
      });
  },
});
export default pointSlice;
export const pointSelector = (state) => state.point;
