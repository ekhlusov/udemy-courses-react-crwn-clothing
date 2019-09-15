import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeChekoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const pKey = "pk_test_kURkBJmGDI9rMVFE66RnTTq300flk7Mpi9";

	const onToken = token => {
		console.log(token);
		alert("Payment successful");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN CLOTHING"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/Cuz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={pKey}
		/>
	);
};

export default StripeChekoutButton;
