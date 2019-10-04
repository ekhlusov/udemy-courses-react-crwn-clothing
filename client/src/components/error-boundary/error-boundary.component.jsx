import React from "react";

/**
 * Ловит любые ошибки и рендерит страницу ошибки
 * обернуть другие компоненты
 */
class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasErrored: false
		};
	}

	static getDerivedStateFromError(error) {
		// lifecycle method
		// process the error
		return { hasErrored: true };
	}

	componentDidCatch(error, errorInfo) {
		console.log(error);
	}

	render() {
		if (this.state.hasErrored) {
			return <div>Something went wrong...</div>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
