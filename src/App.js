import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";

// Pages
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignOut from "./pages/sing-in-sign-out/sing-in-sign-out.component.jsx";
import CheckoutPage from "./pages/checkout/checkout.component";

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { checkUserSession } = this.props;
		checkUserSession();
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />

				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? <Redirect to="/" /> : <SignInSignOut />
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
