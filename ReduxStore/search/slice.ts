import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    pagination: {},
  
    searchArr: [],
   

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
     
      .addCase("SET_SEARCH", (state, action: any) => {
        state.pagination = action.payload.paginationVariables;
        state.searchArr = action.payload.data;

        return state;
      });
  },
});
const searchSelector = (state) => state.search;
export default searchSelector;
