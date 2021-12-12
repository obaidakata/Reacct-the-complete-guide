import { getIndentation } from './Object.utils';

const Property = ({ name, value, depth }) => {

	const isBoolean = typeof value === 'boolean';

	return <div style={getIndentation(depth)}>
		{name && <h1 key={name + 'key'} className='object-label'>{name}:</h1>}
		{value &&
		<h1 key={name + 'value'} className='object-label object-value'> {isBoolean ? value.toString() : value}</h1>}
	</div>;
};


export default Property;
