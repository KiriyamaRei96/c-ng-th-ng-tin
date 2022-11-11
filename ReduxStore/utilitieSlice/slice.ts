import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const utilitiesSlice = createSlice({
  name: "utilities",
  initialState: {
    searchArr: undefined,
    utilitiesType: [],
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

      .addCase("SET_UTILITIES_TYPE", (state, action: any) => {
        state.utilitiesType = action.payload;
        return state;
      })
      .addCase("SET_SEARCH_UTILITIES", (state, action: any) => {
        state.searchArr = action.payload.data;

        return state;
      });
  },
});
const utilitiesSelector = (state) => state.utilities;
export default utilitiesSelector;
