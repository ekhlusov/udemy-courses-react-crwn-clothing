import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeChekoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const pKey = "pk_test_kURkBJmGDI9rMVFE66RnTTq300flk7Mpi9";

	const onToken = token => {
		axios({
			url: "payment",
			method: "post",
			data: {
				amount: priceForStripe,
				token
			}
		})
			.then(response => {
				alert("Payment successful!");
			})
			.catch(error => {
				console.log("Payment error: ", JSON.parse(error));
				alert("Issue with your payment");
			});
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
