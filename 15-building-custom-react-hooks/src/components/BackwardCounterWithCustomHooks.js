import Card from './Card';
import useCounter from '../hooks/useCounter';

const BackwardCounterWithCustomHooks = () => {
	let [counter] = useCounter(0, -1);

	return <Card>{counter}</Card>;
};


export default BackwardCounterWithCustomHooks;