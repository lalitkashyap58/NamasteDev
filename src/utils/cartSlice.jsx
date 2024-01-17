import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
       addItem:(state,action)=>{
        state.items.push(action.payload);
       },
       removeItem:(state)=>{
        state.items.pop();
       },
       clearCart:(state)=>{
        //either mutate the state or return new state
        state.items.length=0;
       }//use action if needed
    }
})
export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;