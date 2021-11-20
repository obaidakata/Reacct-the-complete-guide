import redux from 'redux';
import {
	DECREMENT_ACTION,
	INCREASE_ACTION,
	INCREMENT_ACTION,
	TOGGLE_ACTION
} from '../components/Counter/Counter.action';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
	if (action.type === INCREMENT_ACTION) {
		return {
			...state,
			counter: state.counter + 1
		};
	} else if (action.type === DECREMENT_ACTION) {
		return {
			...state,
			counter: state.counter + 1
		};
	} else if (action.type === INCREASE_ACTION) {
		return {
			...state,
			counter: state.counter + action.amount
		};
	} else if (action.type === TOGGLE_ACTION) {
		return {
			...state,
			showCounter: !state.showCounter
		};
	}

	return state;
};

const store = redux.createStore(counterReducer);

export default store;