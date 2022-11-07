import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const commercialSlice = createSlice({
  name: "commercial",
  initialState: {
    listType: "",
    pagination: {},
    filter:{},
    searchArr: [],
   
    restaurantCategory:[],
    restaurantType:[],
    hotelType:[],
    tourType:[],
    destinationsType:[]
  },
  reducers: {
    setType: (state, action) => {
      state.listType = action.payload;
    },
    setFilter: (state, action) => {
     
      state.filter = {...state.filter,...action.payload}
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
      .addCase('SET_TYPES', (state, action: any) => {
       
        Object.keys(action.payload).forEach(item=>
          state[item]=action.payload[item].data)
        return state;
      })
    
  },
});
const commercialSelector = (state) => state.commercial;
export const { setType ,setFilter} = commercialSlice.actions;
export default commercialSelector;
