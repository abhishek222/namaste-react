import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        groceryList: [],
        totalPrice: 0
    },
    reducers: {
        addToCart: (state, action) => {
            // mutating the state here
            state.groceryList.push(action.payload);
            state.totalPrice += action.payload.price;
        },
        removeFromCart: (state, action) => {
            state.groceryList = state.groceryList.filter(item => item.id!== action.payload);
            state.totalPrice -= action.payload.price;
        },
        clearCart: (state) => {
            console.log(current(state));
            state.groceryList = [];
            state.totalPrice = 0;
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;