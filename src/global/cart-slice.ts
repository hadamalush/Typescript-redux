import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

//defining types for cart item
export type CartItem = {
	id: string;
	title: string;
	price: number;
	quantity: number;
};

//defining types for initial state
type CartState = {
	items: CartItem[];
	totalPrice: number;
};

//defining initial state values with types
const initialState: CartState = {
	items: [],
	totalPrice: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(
			state,
			action: PayloadAction<{
				id: string;
				title: string;
				price: number;
			}>
		) {
			const itemIndex = state.items.findIndex(
				item => item.id === action.payload.id
			);

			if (itemIndex >= 0) {
				state.items[itemIndex].quantity++;
			} else {
				state.items.push({ ...action.payload, quantity: 1 });
			}

			state.totalPrice += action.payload.price;
		},

		//set string in payload because we need just id
		removeFromCart(
			state,
			action: PayloadAction<{ id: string; price: number }>
		) {
			const itemIndex = state.items.findIndex(
				item => item.id === action.payload.id
			);
			console.log(itemIndex);
			// console.log(state.items[itemIndex]);

			if (state.items[itemIndex].quantity === 1) {
				state.items.splice(itemIndex, 1);
			} else {
				state.items[itemIndex].quantity--;
			}

			state.totalPrice -= action.payload.price;
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
