import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectCartItems,
	selectCartTotal
} from "../../redux/cart/cart.selector";
import "./checkout.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeChekoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, total }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Qty</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>

		{cartItems.map(cartItem => (
			<CheckoutItem cartItem={cartItem} key={cartItem.id} />
		))}

		<div className="total">
			<span>TOTAL: ${total}</span>
		</div>

		<div className="test-warning">
			*Please use the following test credit cart for payments*
			<br />
			4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
		</div>
		<StripeChekoutButton price={total} />
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
