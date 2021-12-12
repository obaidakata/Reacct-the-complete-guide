import React from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';
import ForwardCounterWithCustomHooks from './components/ForwardCounterWithCustomHooks';
import BackwardCounterWithCustomHooks from './components/BackwardCounterWithCustomHooks';





function App () {

	const Counters = () => (
		<React.Fragment>
			<ForwardCounter/>
			<BackwardCounter/>
		</React.Fragment>
	);

	const CountersWithCustomHooks = () => (
		<React.Fragment>
			<ForwardCounterWithCustomHooks/>
			<BackwardCounterWithCustomHooks/>
		</React.Fragment>
	);


	return (
		<CountersWithCustomHooks/>
	);
}

export default App;
