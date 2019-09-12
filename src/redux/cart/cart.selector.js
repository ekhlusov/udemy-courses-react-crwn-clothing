import { createSelector } from "reselect";
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce(
			// always rerender - selector - caching this value - memoization needed
			(accumulatedQuantity, cartItem) =>
				accumulatedQuantity + cartItem.quantity,
			0
		)
);
