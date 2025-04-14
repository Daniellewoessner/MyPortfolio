import React from 'react';
import '../styles/footer.css'; // Adjust the path as necessary

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a 
            href="https://github.com/Daniellewoessner" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="contact-btn">
          <a href="/contact">Get in Touch</a>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Danielle Woessner
        </div>
      </div>
    </footer>
  );
}

export default Footer;