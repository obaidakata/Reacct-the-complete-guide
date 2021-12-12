const { useEffect, useState } = require('react');


const useCounter = (initialState = 0, toAdd = 1) => {
	const [counter, setCounter] = useState(initialState);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + toAdd);
		}, 1000);

		return () => clearInterval(interval);
	}, [toAdd]);

	return [counter, setCounter];
}


export default useCounter;