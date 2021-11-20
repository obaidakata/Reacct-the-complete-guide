import Counter from './components/Counter/Counter';
// import Counter from './components/CounterClassBased';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

function App () {
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

	return (
		<Fragment>
			<Header/>
			{!isAuthenticated && <Auth/>}
			{isAuthenticated && <UserProfile/>}
			<Counter/>
		</Fragment>
	);
}

export default App;
