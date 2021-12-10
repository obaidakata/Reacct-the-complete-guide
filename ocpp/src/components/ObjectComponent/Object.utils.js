export const getIndentation = amount => {
	const indentation = amount * 3;
	return {
		'text-indent': `${indentation}em`
	}
};