import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'search',
  initialState: {
    active: false,
  },
  reducers: {
    toggleOverlay: (state) => {
      return {
        ...state,
        active: !state.active,
      }
    },
  }
})

export const { toggleOverlay } = slice.actions;

export const searchOverlay = (state) => state.search.active;

export default slice.reducer;



