import React, { useEffect, lazy, Suspense } from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";

// Pages
import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import * as serviceWorker from './serviceWorker';

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInSignOut = lazy(() =>
	import("./pages/sing-in-sign-out/sing-in-sign-out.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));


const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]); // checkUserSession - при изменении 1 раз из mapStateToProps

	return (
		<div>
			<Header />

			<Switch>
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
						<Route exact path="/" component={HomePage} />

						<Route path="/shop" component={ShopPage} />
						<Route exact path="/checkout" component={CheckoutPage} />
						<Route
							exact
							path="/signin"
							render={() =>
								currentUser ? <Redirect to="/" /> : <SignInSignOut />
							}
						/>
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</div>
	);
};

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

serviceWorker.register();
