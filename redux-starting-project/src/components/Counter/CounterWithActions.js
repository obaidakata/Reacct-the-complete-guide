import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { INCREASE_ACTION, INCREMENT_ACTION, DECREMENT_ACTION, TOGGLE_ACTION } from './Counter.action';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter);
	const showCounter = useSelector(state => state.showCounter);

	const toggleCounterHandler = () => dispatch({ type: TOGGLE_ACTION });

	const incrementHandler = () => dispatch({ type: INCREMENT_ACTION });

	const decrementHandler = () => dispatch({ type: DECREMENT_ACTION });

	const increaseHandler = () => dispatch({ type: INCREASE_ACTION, amount: 5 });

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increase by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
