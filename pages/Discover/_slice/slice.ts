import { createSlice } from "@reduxjs/toolkit";
export const pointSlice = createSlice({
  name: "point",
  initialState: {
    pointArr: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("SET_POINT", (state, action: any) => {
      state.pointArr = action.payload;
      return state;
    });
  },
});
const pointSelector = (state) => state.point;
export default pointSelector;
