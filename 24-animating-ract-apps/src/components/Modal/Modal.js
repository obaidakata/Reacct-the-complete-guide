import React from 'react';

import './Modal.css';
import Transition from 'react-transition-group/Transition';


const animationTiming = {
	entre: 300,
	exit: 1000
};

const modal = ({ show, closed }) => (
	<Transition in={show} timeout={animationTiming}>
		{state => {
			const cssClasses = ['Modal', state === 'entering' ? 'ModalOpen' : ( state === 'exited' ? 'ModalClosed' : null )];
			return (
				<div className={cssClasses.join(' ')}>
					<h1>A Modal</h1>
					<button className="Button" onClick={closed}>Dismiss</button>
				</div>
			);

		}}

	</Transition>
);

export default modal;