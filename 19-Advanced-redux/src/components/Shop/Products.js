import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
	{
		id: 'p1',
		price: 6,
		title: 'My First Book',
		description: 'My First Book',
	},
	{
		id: 'p2',
		price: 7,
		title: 'My Second Book',
		description: 'My Second Book',
	}
];


const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map(product => <ProductItem key={product.id} {...product}/>)}
			</ul>
		</section>
	);
};

export default Products;
