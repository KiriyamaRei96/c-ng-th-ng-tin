import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    language: "vi",
    languageArr: [],
    districtArr: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload,
      };
    });
  },
});
const globalSelector = (state) => state.point;
export default globalSelector;
