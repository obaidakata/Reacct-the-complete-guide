import PropertyComponent from './PropertyComponent';
import { useEffect, useState } from 'react';
import { getIndentation } from './Object.utils';

const ArrayComponent = ({ arrayName, array, depth, shouldExpand }) => {
	const [isExpand, setIsExpand] = useState(false);

	useEffect(() => setIsExpand(shouldExpand), [shouldExpand]);

	return ( <div style={getIndentation(depth)}>
		<h1 style={{ 'display': 'inline' }} onClick={() => setIsExpand(!isExpand)}> {isExpand ? 'v' : '>'} </h1>
		<h1 style={{ 'display': 'inline' }}> {arrayName} [{array.length}]</h1>
		{isExpand && <div style={getIndentation(depth + 1)}>
			{array.map((innerValue, index) => <PropertyComponent key={index} name={index.toString()}
																 value={innerValue}/>)}
		</div>}
	</div> );
};

export default ArrayComponent;