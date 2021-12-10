import PropertyComponent from './PropertyComponent';
import ArrayComponent from './ArrayComponent';
import { useEffect, useState } from 'react';
import { getIndentation } from './Object.utils';


const ObjectComponent = ({ name, object }) => {
	const [isExpandAll, setIsExpandALl] = useState(false);

	return <>
		<h1 style={{ 'display': 'inline' }} onClick={() => setIsExpandALl(true)}> Expand</h1>
		<h1 style={{ 'display': 'inline' }} onClick={() => setIsExpandALl(false)}> Collapse </h1>
		<ObjectComponentActual key={name + 'object'} name={name} object={object} currentDepth={0}
							   shouldExpand={isExpandAll}/>
	</>;
};

const ObjectComponentActual = ({ name, object, currentDepth, shouldExpand = false }) => {
	const isObject = typeof object === 'object';
	const entries = Object.entries(object);

	const [isExpand, setIsExpand] = useState(false);

	useEffect(() => setIsExpand(shouldExpand), [shouldExpand]);

	const EntryComponent = ({ entry }) => {
		const [key, value] = entry;
		return ( Array.isArray(value) ?
			<ArrayComponent key={key + 'Array'} arrayName={key} array={value} depth={currentDepth + 1} shouldExpand={shouldExpand}/> :
			<ObjectComponentActual name={key} object={value} currentDepth={currentDepth + 1}
								   shouldExpand={shouldExpand}/> );
	};

	const ObjectRow = () => {
		return (
			<div style={getIndentation(currentDepth)}>
				<h1 style={{ 'display': 'inline' }} onClick={() => setIsExpand(!isExpand)}> {isExpand ? 'v' : '>'} </h1>
				<h1 style={{ 'display': 'inline' }}> {name || 'object'} {`{${entries.length || 0}}`}</h1>
			</div> );
	};

	const ObjectChildren = () => {
		return ( <>
				{isExpand && ( entries.length > 0 ? entries.map(entry => <EntryComponent entry={entry}/>)
					: <PropertyComponent value={'(empty object)'} depth={currentDepth + 1}/> )}
			</> );
	};

	return (
		<div>
			{isObject ?
				<>
					<ObjectRow/>
					<ObjectChildren/>
				</>
				: <PropertyComponent name={name} value={object} depth={currentDepth + 1}/>}
		</div>
	);

};

export default ObjectComponent;