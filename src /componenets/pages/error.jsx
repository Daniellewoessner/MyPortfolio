import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Error.css'; // Adjust the path as necessary

function Error() {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="back-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Error;