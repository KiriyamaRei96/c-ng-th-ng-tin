import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const commercialSlice = createSlice({
  name: "commercial",
  initialState: {
    listType: "",
    pagination: {},

    searchArr: [],
    categoryArr: [],
  },
  reducers: {
    setType: (state, action) => {
      state.listType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action: any) => {
        return {
          ...state,
          ...action.payload,
        };
      })

      .addCase("SET_SEARCH_COMMERCIAL", (state, action: any) => {
        state.searchArr = action.payload.data;
        state.pagination = action.payload.paginationVariables;
        return state;
      })
      .addCase("SET_CATEGORY", (state, action: any) => {
        state.categoryArr = action.payload.data;

        return state;
      });
  },
});
const commercialSelector = (state) => state.commercial;
export const { setType } = commercialSlice.actions;
export default commercialSelector;
