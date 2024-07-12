import React from 'react';
import {Link} from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
    <div className="error-page">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Go Back Home</Link>
    </div>
    </>
  );
};

export default ErrorPage;