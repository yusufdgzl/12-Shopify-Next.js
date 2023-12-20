import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search-slice";
import menuSlice from "./menu-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { search: searchSlice.reducer , menu: menuSlice.reducer , cart:cartSlice.reducer },
});

export default store;
