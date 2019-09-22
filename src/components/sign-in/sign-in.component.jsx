import React from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
	googleSingInStart,
	emailSingInStart
} from "../../redux/user/user.actions";
import { connect } from "react-redux";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}

	handleSubmit = async e => {
		e.preventDefault();
		const { emailSingInStart } = this.props;
		const { email, password } = this.state;
		emailSingInStart(email, password);
	};

	handleChange = e => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		const { googleSingInStart } = this.props;
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="email"
						required
					/>
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
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
	}
}

const mapDispatchToProps = dispatch => ({
	googleSingInStart: () => dispatch(googleSingInStart()),
	emailSingInStart: (email, password) =>
		dispatch(emailSingInStart({ email, password }))
});

export default connect(
	null,
	mapDispatchToProps
)(SignIn);
