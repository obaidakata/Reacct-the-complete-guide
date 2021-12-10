import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/UISlice';

const CartButton = (props) => {
	const dispatch = useDispatch();
	const { toggle } = uiActions;

	const totalQuantity =  useSelector(state => state.cart.totalQuantity)

	const toggleCartHandler = () => dispatch(toggle());

	return (
		<button className={classes.button} onClick={toggleCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{totalQuantity}</span>
		</button>
	);
};

export default CartButton;
