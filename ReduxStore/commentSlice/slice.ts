import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const commentSlice = createSlice({
  name: "comment",
  initialState: {
   commentArr:[]
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action: any) => {
        return {
          ...state,
          ...action.payload,
        };
      })
      .addCase("SET_COMMENT", (state, action: any) => {
        state.commentArr = action.payload;
        return state;
      })
   
  },
});
// export const {  } = commentSlice.actions;
const commentSelector = (state) => state.comment;
export default commentSelector;
