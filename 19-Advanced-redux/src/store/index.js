import { configureStore } from '@reduxjs/toolkit';
import cartSliceReducer from './cartSlice';
import uiSliceReducer from './UISlice';


const store = configureStore({
	reducer: {
		cart: cartSliceReducer,
		ui: uiSliceReducer,
	},
});

export default store;