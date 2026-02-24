import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    items: [],
    itemsQuantuty:0,
    itemsPrice:0,
}
const cartSlice = createSlice({
    name : "cart",
    initialState, 
    reducers:{
        addToCart:(state,action)=> {
            const item = action.payload;

            const existingItem = state.items.find(
                (i) => i.id === item.id
            )
            if (existingItem){
                existingItem.quantity +=1;
            } else {
                state.items.push({...item,quantity:1});
            }
            state.totalQuantity +=1
            state.totalAmoount  +=item.price;
        },
        removeFromCart:(state,action)=> {
            const id= action.payload
            const item = state.items.find((i)=>i.id===id)

            if (!item) return;
            state.totalQuantity -= item.quantity
            state.totalAmount -= item.price*item.quantity

            state.items = state.items.filter((i)=>i.id !== id)
        },
    },
})
export const {addToCart,removeFromCart}= cartSlice.actions;
export default cartSlice.reducer;