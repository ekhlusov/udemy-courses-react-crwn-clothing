import React from "react";
import {
	CartItemContainer,
	CartItemDetailsContainer,
	Name,
	Price
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<CartItemContainer>
		<img src={imageUrl} alt="item" />
		<CartItemDetailsContainer>
			<Name>{name}</Name>
			<Price>
				{quantity} x ${price}
			</Price>
		</CartItemDetailsContainer>
	</CartItemContainer>
);
export default CartItem;
