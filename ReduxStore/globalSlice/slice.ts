import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    language: "vi",
    languageArr:[],
    districtArr:[],
  },
  reducers: {changeLang:(state,action)=>{
   
    state.language=action.payload
  }},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload,
      };
    }).addCase("SET_LANG",(state, action: any) => {
      state.languageArr= action.payload
      return state;
    }).addCase("SET_DISTRICT",(state, action: any) => {
      state.districtArr= action.payload
      return state;
    });

  },
});
export const {changeLang}=globalSlice.actions
const globalSelector = (state) => state.global;
export default globalSelector;
