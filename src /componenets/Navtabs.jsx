import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../src /styles/Navtabs.css'; // Adjust the path as necessary

function NavTabs() {
  const currentPage = useLocation().pathname;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-tabs ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span>DW</span>
        </Link>
        
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link
            to="/"
            className={`nav-link ${
              currentPage === '/'
                ? 'active'
                : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`nav-link ${
              currentPage === '/about'
                ? 'active'
                : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/portfolio"
            className={`nav-link ${
              currentPage === '/portfolio'
                ? 'active'
                : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>

          <Link
            to="/contact"
            className={`nav-link ${
              currentPage === '/contact'
                ? 'active'
                : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            to="/resume"
            className={`nav-link ${
              currentPage === '/resume'
                ? 'active'
                : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;