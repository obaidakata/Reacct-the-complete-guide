import useCounter from '../hooks/useCounter';
import Card from './Card';


const ForwardCounterWithCustomHooks = () => {
	let [counter] = useCounter(0, 1);
	return <Card>{counter}</Card>;
};

export default ForwardCounterWithCustomHooks;