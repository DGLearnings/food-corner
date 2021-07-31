//bring all the reduers at one place

import { combineReducers } from "redux";

import cartReducer from "./cart/cart.reducer";


export default combineReducers({
    cart: cartReducer,
})