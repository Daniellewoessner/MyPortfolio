import React from 'react';
import { Link } from 'react-router-dom';
import SkillsSection from '../../componenets/Skillssection';
import '../../styles/home.css'; // Adjust the path as necessary

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="profile-image-container">
            <div className="profile-glow"></div>
            <img
              src="/about2.jpeg"
              alt="Danielle Woessner"
              className="profile-image"
            />
          </div>
          
          <div className="hero-text">
            <h1>Danielle Woessner</h1>
            <h2>Full Stack Web Developer</h2>
            <p>
            Hello, my name is Danielle Woessner, and I'm thrilled to welcome you to my portfolio! I've recently graduated from a rigorous coding bootcamp, where I developed a strong foundation in full-stack web development. The projects you'll find here showcase the skills I've gained and the passion I bring to building creative, user-friendly applications.
            </p>
            <div className="hero-buttons">
              <Link to="/portfolio" className="btn primary-btn">
                View My Work
              </Link>
              <Link to="/contact" className="btn secondary-btn">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <SkillsSection />
      
      <section className="cta-section">
        <div className="cta-content">
          <h2>Interested in working together?</h2>
          <p>Let's build something amazing!</p>
          <Link to="/contact" className="btn primary-btn">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;