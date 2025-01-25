import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addTOCart: ( state, action) => {
            state.cart.push(action.payload)
        },
        removeFromCart: ( state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  } 
});

export const { addTOCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer