import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { decrementAction, increaseAction, incrementAction } from '../store/index';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter);
	const toggleCounterHandler = () => {
	};

	const incrementHandler = () => dispatch({ type: incrementAction });

	const decrementHandler = () => dispatch({ type: decrementAction });

	const increaseHandler = () => dispatch({ type: increaseAction, amount: 5 });

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
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
