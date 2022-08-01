import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    cartItem: []
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem(state, action) {
            state.cartItem.push(action.payload)
        },
        removeCartItem(state, action) {
            state.cartItem.filter((elem) => elem.id != action.payload)
        }
    }
})

export const { addCartItem, removeCartItem } = CartSlice.actions
export default CartSlice.reducer