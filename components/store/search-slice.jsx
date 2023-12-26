import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { searchIsVisible: false, searchTerm: "" },
  reducers: {
    toggle(state) {
      state.searchIsVisible = !state.searchIsVisible;
    },
    setSearchTerm(state, actions) {
      state.searchTerm = actions.payload;
    
    },
  },
});

export default searchSlice;
