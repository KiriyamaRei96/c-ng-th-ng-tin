import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
    type: "",
    pagination: {},
    filters: [],
    searchArr: [],
    types: {},
  },
  reducers: {
    searchText: (state, action) => {
      state.search = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
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

      .addCase("SET_SEARCH", (state, action: any) => {
        state.pagination = action.payload.paginationVariables;
        state.searchArr = action.payload.data;
        state.filters = action.payload.filters;
        state.types = action.payload.types;

        return state;
      });
  },
});
const searchSelector = (state) => state.search;
export const { searchText, setType } = searchSlice.actions;
export default searchSelector;
