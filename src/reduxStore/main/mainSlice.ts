// Others
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  myFavEvents: {},
};

// Main Slice
export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updateFavourites: (state,action) => {
      { 
        state.myFavEvents =action.payload
      }
    },
    resetMain: state => {
      {
        state.myFavEvents ={}
      }
    },
  },
});

export const {resetMain,updateFavourites} = mainSlice.actions;
export default mainSlice.reducer;