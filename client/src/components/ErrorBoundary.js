import React, { Component } from 'react';
import ErrorPage from '../pages/ErrorPage';

class GlobalErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null, errorCode: null };
  }

  componentDidCatch(error, errorInfo) {
    // Detect the error code or use a default code (e.g., 500 for generic errors)
    let errorCode = 500;

    if (error instanceof Response) {
      errorCode = error.status;
    }

    // Update state with the error information and code
    this.setState({
      hasError: true,
      error,
      errorInfo,
      errorCode,
    });
  }

  render() {
    if (this.state.hasError) {
      // Pass the error code to the error component
      return <ErrorPage errorCode={this.state.errorCode} />;
    }

    // Render the children if there's no error
    return this.props.children;
  }
}

export default GlobalErrorBoundary;
