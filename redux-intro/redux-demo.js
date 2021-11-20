const redux = require('redux');

// Mutates Store data, will be called when calling store.dispatch
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }
    else if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    }

    return state;
};

const store = redux.createStore(counterReducer);

// Subscription  will be called when the state changes
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

// Calling increment action
store.dispatch({ type: 'increment' });
// Calling decrement action
store.dispatch({ type: 'decrement' });