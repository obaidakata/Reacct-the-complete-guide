import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
		addItemToCart (state, action) {
			const newItem = action.payload;
			const exitingItem = state.items.find(item => item.id === newItem.id);
			if (!exitingItem) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					title: newItem.title,
				});
			} else {
				exitingItem.quantity++;
				exitingItem.totalPrice += newItem.price;
			}
			state.totalQuantity++;
		},
		removeItemFromCart (state, action) {
			const id = action.payload;
			const exitingItem = state.items.find(item => item.id === id);
			if (exitingItem) {
				if (exitingItem.quantity === 1) {
					state.items.filter(item => item.id !== id);
				} else {
					exitingItem.quantity--;
					exitingItem.totalPrice -= exitingItem.price;
				}

				state.totalQuantity--;
			}
		}
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;