const { createSlice } = require("@reduxjs/toolkit");


const menuSlice = createSlice({
    name:"menu",
    initialState : {menuIsVisible:false},
    reducers: {
        toggle(state){
            state.menuIsVisible = !state.menuIsVisible
        }
    }
})

export default menuSlice