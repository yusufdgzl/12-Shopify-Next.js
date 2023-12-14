import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search-slice";
import menuSlice from "./menu-slice";

const store = configureStore({
  reducer: { search: searchSlice.reducer , menu: menuSlice.reducer },
});

export default store;
