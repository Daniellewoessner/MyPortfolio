import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/response.css'; // Adjust the path as necessary

function Response() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');  
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="response-page">
      <div className="response-content">
        <div className="success-icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <h1>Thank You!</h1>
        <p>
          Your message has been sent successfully. Danielle will respond to your message as soon as possible.
        </p>
        <p className="redirect-message">
          You will be redirected to the home page in a few seconds...
        </p>
      </div>
    </div>
  );
}

export default Response;
