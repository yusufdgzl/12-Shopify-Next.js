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
        existingItem.totalPrice = existingItem.totalPrice + newItem.price * newItem.amount;
       
      }
    },
  },
});

export default cartSlice;
