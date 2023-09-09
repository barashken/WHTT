import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalErrorBoundary from './components/ErrorBoundary';

window.onerror = (message, source, lineno, colno, error) => {
  // Handle the error here (e.g., log it or display a user-friendly message)
  console.error('Uncaught error:', error);
  // Optionally, prevent the default browser error handling
  return true; // Set to true to prevent the default browser error handling
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalErrorBoundary>
      <App />
    </GlobalErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
