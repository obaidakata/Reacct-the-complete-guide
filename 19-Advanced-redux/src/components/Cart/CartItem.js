import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';

const CartItem = (props) => {
	const dispatch = useDispatch();
	const { item } = props;
	const { id, title, quantity, totalPrice, price } = item;
	const { addItemToCart, removeItemFromCart } = cartActions;


	const handleOnAddItem = () => dispatch(addItemToCart(item));
	const handleOnRemoveItem = () => dispatch(removeItemFromCart(id));

	return (
		<li className={classes.item}>
			<header>
				<h3>{title}</h3>
				<div className={classes.price}>
					${totalPrice.toFixed(2)}{' '}
					<span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={handleOnRemoveItem}>-</button>
					<button onClick={handleOnAddItem}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
