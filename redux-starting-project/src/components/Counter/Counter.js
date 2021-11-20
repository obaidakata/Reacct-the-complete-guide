import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../../store/counterSlice';


const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter.counter);
	const showCounter = useSelector(state => state.counter.showCounter);
	const {toggle, increment, decrement, increase} = counterActions;

	const toggleCounterHandler = () => dispatch(toggle());

	const incrementHandler = () => dispatch(increment());

	const decrementHandler = () => dispatch(decrement());

	const increaseHandler = () => dispatch(increase(5));

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
