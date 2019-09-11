import React from "react";
import "./sing-in-sign-out.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SingUp from "../../components/sign-up/sign-up.component";

const SignInSignOutPage = () => <div className="sing-in-sign-out">
	<SignIn />
	<SingUp />
</div>;

export default SignInSignOutPage;
