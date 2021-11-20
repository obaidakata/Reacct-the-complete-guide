import {configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './counterSlice';
import authSliceReducer from './authSlice';

const store = configureStore({
	reducer: {
		counter: counterSliceReducer,
		auth: authSliceReducer,
	},
});

export default store;