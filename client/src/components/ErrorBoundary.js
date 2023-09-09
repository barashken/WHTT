import React, { Component } from 'react';

class GlobalErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Update state with the error information
    this.setState({ hasError: true, error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error message and styling here
      return (
        <div>
          <h2>Something went wrong</h2>
          <p>{this.state.error.toString()}</p>
          <div>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        </div>
      );
    }
    // Render the children if there's no error
    return this.props.children;
  }
}

export default GlobalErrorBoundary;
