import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { useReducer } from "react";
const appStore=configureStore({
    //big reducer containing small reducers
    reducer:{
        cart:cartReducer,
    }
})

export default appStore;