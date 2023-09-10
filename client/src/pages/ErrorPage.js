import React from 'react';
import { useParams } from 'react-router-dom';

const ErrorPage = () => {
  var { errorCode } = useParams();

  let errorMessage = '';
  let errorDescription = '';

  switch (errorCode) {
    case '400':
      errorMessage = 'Bad Request';
      errorDescription = 'The request was malformed or invalid.';
      break;
    case '401':
      errorMessage = 'Unauthorized';
      errorDescription = 'You are not authorized to access this page. Please log in.';
      break;
    case '403':
      errorMessage = 'Forbidden';
      errorDescription = 'Access to this resource is forbidden.';
      break;
    case '404':
      errorMessage = 'Not Found';
      errorDescription = 'The requested page does not exist.';
      break;
    case '500':
      errorMessage = 'Internal Server Error';
      errorDescription = 'An unexpected error occurred on the server.';
      break;
    default:
      errorCode = '404';
      errorMessage = 'Not Found';
      errorDescription = 'The requested page does not exist.';
      break;
  }

  return (
    <div>
      <h2>Error {errorCode}</h2>
      <p>{errorMessage}</p>
      <p>{errorDescription}</p>
      <div>
        {errorCode === '401' && (
          <a href="/signin">Log in</a>
        )}
        {errorCode !== '401' && (
          <a href="/">Go to Home Page</a>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
