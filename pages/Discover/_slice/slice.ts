import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const pointSlice = createSlice({
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
const pointSelector = (state) => state.point;
export default pointSelector;
