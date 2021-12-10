import Property from './Property';
import { useEffect, useState } from 'react';
import { getIndentation } from './Object.utils';


const ObjectComponent = ({ name, object }) => {
	const [isExpandAll, setIsExpandALl] = useState(false);

	return <>
		<h1 style={{ 'display': 'inline' }} onClick={() => setIsExpandALl(true)}> Expand</h1>
		<h1 style={{ 'display': 'inline' }} onClick={() => setIsExpandALl(false)}> Collapse </h1>
		<ObjectActual key={name + 'object'} name={name} object={object} currentDepth={0}
					  shouldExpand={isExpandAll}/>
	</>;
};

const ObjectActual = ({ name, object, currentDepth, shouldExpand = false }) => {
	const isObject = typeof object === 'object';
	const isArray = Array.isArray(object);
	const brackets = isArray ? { open: '[', close: ']' } : { open: '{', close: '}' };
	const entries = Object.entries(object);
	const [isExpand, setIsExpand] = useState(false);

	useEffect(() => setIsExpand(shouldExpand), [shouldExpand]);

	const ObjectDetails = () => {
		return (
			<div style={getIndentation(currentDepth)}>
				<h1 style={{ 'display': 'inline' }} onClick={() => setIsExpand(!isExpand)}> {isExpand ? 'v' : '>'} </h1>
				<h1 style={{ 'display': 'inline' }}> {name || 'object'} {`${brackets.open}${entries.length || 0}${brackets.close}`}</h1>
			</div> );
	};

	const ObjectChildren = () => {
		return ( <>
			{isExpand && ( entries.length > 0 ? entries.map(entry => <Entry entry={entry}/>)
				: <Property value={'(empty object)'} depth={currentDepth + 1}/> )}
		</> );
	};

	const Entry = ({ entry }) => {
		const [key, value] = entry;
		return <ObjectActual name={key} object={value} currentDepth={currentDepth + 1}
							 shouldExpand={shouldExpand}/>;
	};

	return (
		<>
			{isObject ?
				<>
					<ObjectDetails/>
					<ObjectChildren/>
				</>
				: <Property name={name} value={object} depth={currentDepth + 1}/>}
		</>
	);

};

export default ObjectComponent;