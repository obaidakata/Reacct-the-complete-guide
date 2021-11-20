const redux = require('redux');

export const incrementAction = 'increment';
export const decrementAction = 'decrement';
export const increaseAction = 'increase';

const counterReducer = (state = { counter: 0 }, action) => {
    let toAdd = 0;
    if (action.type === incrementAction) {
        toAdd = 1;
    } else if (action.type === decrementAction) {
        toAdd = -1;
    }
    else if (action.type === increaseAction) {
        toAdd = action.amount;
    }

    return getNewStateObject(state.counter + toAdd);
};

const getNewStateObject = (newStateValue) => {
    return {
        counter: newStateValue
    };
};

const store = redux.createStore(counterReducer);

export default store;