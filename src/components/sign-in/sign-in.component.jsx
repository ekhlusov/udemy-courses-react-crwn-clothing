import React, { useState } from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
	googleSingInStart,
	emailSingInStart
} from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignIn = ({ emailSingInStart, googleSingInStart }) => {
	const [userCredentials, setCredentials] = useState({
		email: "",
		password: ""
	});

	const { email, password } = userCredentials;

	const handleSubmit = async e => {
		e.preventDefault();
		emailSingInStart(email, password);
	};

	const handleChange = e => {
		const { value, name } = e.target;

		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={email}
					handleChange={handleChange}
					label="email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					handleChange={handleChange}
					label="password"
					required
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton
						type="button"
						onClick={googleSingInStart}
						isGoogleSignIn
					>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	googleSingInStart: () => dispatch(googleSingInStart()),
	emailSingInStart: (email, password) =>
		dispatch(emailSingInStart({ email, password }))
});

export default connect(
	null,
	mapDispatchToProps
)(SignIn);
