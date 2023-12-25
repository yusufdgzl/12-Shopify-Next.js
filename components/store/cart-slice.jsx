import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, actions) {
      const newItem = actions.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalPrice = state.totalPrice + newItem.price * newItem.amount;

      if (!existingItem) {
        state.items.push({
          title: newItem.title,
          img: newItem.img,
          price: newItem.price,
          amount: newItem.amount,
          id: newItem.id,
          totalPrice: newItem.price * newItem.amount,
        });
      } else {
        existingItem.amount = existingItem.amount + newItem.amount;
        existingItem.totalPrice =
          existingItem.totalPrice + newItem.price * newItem.amount;
      }
    },

    removeItemToCart(state, actions) {
      const id = actions.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
        state.totalPrice = state.totalPrice - existingItem.totalPrice;
      }
    },

    decreaseItem(state,actions){
      const id = actions.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.amount > 1) {
        existingItem.amount--
        state.totalPrice = state.totalPrice - existingItem.price;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      } else  return ;
    },

    increaseItem(state,actions){
      const id = actions.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if(existingItem){
        state.totalPrice = state.totalPrice + existingItem.price 
        existingItem.amount++ 
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price
      }
    }
  },
});

export default cartSlice;
