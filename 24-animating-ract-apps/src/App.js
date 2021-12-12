import React, { Component } from 'react';

import Transition from 'react-transition-group/Transition';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
	state = {
		modelIsOpen: false,
		showBlock: false
	};

	showModel = () => {
		this.setState({ modelIsOpen: true });
	};

	closeModel = () => {
		this.setState({ modelIsOpen: false });
	};

	render () {
		return (
			<div className="App">
				<h1>React Animations</h1>
				<button className="Button" onClick={() => this.setState(prevState => ( {
					...prevState,
					showBlock: !prevState.showBlock
				} ))}>Toggle
				</button>
				<Transition in={this.state.showBlock} timeout={1000} mountOnEnter unmountOnExit>
					{state => (
						<div
							style={{
								backgroundColor: 'red',
								width: 100,
								height: 100,
								margin: 'auto',
								translation: 'opacity 1s ease-out',
								opacity: state === 'exiting' ? 0 : 1,
							}}>
						</div>
					)}
				</Transition>
				<br/>
				{this.state.modelIsOpen ? <Modal closed={this.closeModel}/> : <Backdrop/>}
				<button className="Button" onClick={this.showModel}>Open Modal</button>
				<h3>Animating Lists</h3>
				<List/>
			</div>
		);
	}
}

export default App;
