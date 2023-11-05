import { addToCart, removeFromCart } from "../global/cart-slice";
import { useCartSelector, useCartDispatch } from "../global/hooks";
import { CartItem } from "../global/cart-slice";

export default function CartItems() {
	const items = useCartSelector(state => state.cart.items);
	const totalPrice = useCartSelector(state => state.cart.totalPrice);
	const dispatch = useCartDispatch();
	const formattedPrice = totalPrice.toFixed(2);

	const handleRemoveFromCart = (item: { id: string; price: number }) => {
		dispatch(removeFromCart(item));
	};

	const handleAddToCart = (item: CartItem) => {
		dispatch(addToCart(item));
	};

	return (
		<div id='cart'>
			{items.length === 0 && <p>No items in cart!</p>}

			{items.length > 0 && (
				<ul id='cart-items'>
					{items.map(item => {
						const formattedPrice = `$${item.price.toFixed(2)}`;

						return (
							<li key={item.id}>
								<div>
									<span>{item.title}</span>
									<span> ({formattedPrice})</span>
								</div>
								<div className='cart-item-actions'>
									<button
										onClick={() =>
											handleRemoveFromCart({ id: item.id, price: item.price })
										}>
										-
									</button>
									<span>{item.quantity}</span>
									<button onClick={() => handleAddToCart(item)}>+</button>
								</div>
							</li>
						);
					})}
				</ul>
			)}

			<p id='cart-total-price'>
				Cart Total: <strong>{formattedPrice}</strong>
			</p>
		</div>
	);
}
