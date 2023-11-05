import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";

export const store = configureStore({
	reducer: { cart: cartSlice.reducer },
});

//export type dispatch for hooks
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

//for example:

// let name = "Poncosh";
// type N = typeof name;
