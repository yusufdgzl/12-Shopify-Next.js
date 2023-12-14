import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {searchIsVisible : false },
    reducers : {
        toggle(state){
            state.searchIsVisible = !state.searchIsVisible;
        }
    }
})

export default searchSlice