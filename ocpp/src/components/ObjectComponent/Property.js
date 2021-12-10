import { getIndentation } from './Object.utils';

const Property = ({ name, value, depth }) => {

	const isBoolean = typeof value === 'boolean';

	return <div style={getIndentation(depth)}>
		{name && <h1 key={name} style={{ 'display': 'inline' }}>{name}:</h1>}
		{value &&
		<h1 key={name} style={{ 'display': 'inline', 'color': 'green' }}> {isBoolean ? value.toString() : value}</h1>}
	</div>;
};


export default Property;
