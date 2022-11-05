import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const pointSlice = createSlice({
  name: "point",
  initialState: {
    pagination: {},
    pointArr: [],
    searchArr: [],
    pointType: [],

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
      })
      .addCase("SET_POINT_TYPE", (state, action: any) => {
        state.pointType = action.payload;
        return state;
      })
      .addCase("SET_SEARCH_POINT", (state, action: any) => {
        state.pagination = action.payload.paginationVariables;
        state.searchArr = action.payload.data;

        return state;
      });
  },
});
const pointSelector = (state) => state.point;
export default pointSelector;
