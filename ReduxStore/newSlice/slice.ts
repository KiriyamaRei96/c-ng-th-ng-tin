import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const newsEventsSlice = createSlice({
  name: "news&events",
  initialState: {
    pagination: {},
    eventPagination: {},
    newsArr: [],
    eventsArr: [],
    searchArr: [],
    categoryArr: [],
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
      .addCase("SET_NEWS", (state, action: any) => {
        state.newsArr = action.payload.data;

        return state;
      })
      .addCase("SET_SEARCH_NEWS", (state, action: any) => {
        state.searchArr = action.payload.data;
        state.pagination = action.payload.paginationVariables;
        return state;
      })
      .addCase("SET_CATEGORY", (state, action: any) => {
        state.categoryArr = action.payload.data;

        return state;
      })

      .addCase("SET_EVENTS", (state, action: any) => {
        state.eventsArr = action.payload;
        return state;
      });
  },
});
const newsEventsSelector = (state) => state.newsEvents;
export default newsEventsSelector;
