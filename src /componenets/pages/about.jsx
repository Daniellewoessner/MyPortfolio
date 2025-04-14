import React from 'react';
import '../../styles/about.css'; // Adjust the path as necessary

function About() {
  return (
    <div className="about-page">
      <section className="about-header">
        <div className="about-profile">
          <div className="profile-glow"></div>
          <img
            src="/homepage2.jpeg" // Adjust the path as necessary
            alt="Danielle Woessner"
            className="about-image"
          />
        </div>
        <h1>About Me</h1>
      </section>
      
      <section className="about-content">
        <div className="about-card">
          <div className="about-text">
          <p>
  Hello everyone! I'm Danielle Woessner, and I'm excited to be sharing a bit about myself. 
  My professional journey began in the field of Psychology, where I specialized in 
  working with children on the autism spectrum. While that work was incredibly rewarding, 
  I felt a pull toward a new challenge and recently made the leap into the world of technology.
</p>

<p>
  I’ve proudly graduated from an intensive full-stack coding bootcamp, where I immersed myself 
  in programming fundamentals and real-world development practices. I now call the vibrant city 
  of Orlando, Florida home. Outside of coding, you’ll often find me exploring theme parks, 
  relaxing at the beach, soaking in live music, or spending quality time with family.
</p>

<p>
  My current technical arsenal includes a solid foundation in HTML, JavaScript, CSS, React, 
  TypeScript, Bootstrap, npm, and GraphQL, allowing me to build dynamic, user-friendly web applications. 
  I’m continually learning and staying updated with new technologies to grow as a full-stack developer.
</p>

<p>
  I find immense joy in the creative process—whether that’s designing clean, engaging interfaces 
  or building out powerful backend logic. One of my favorite recent projects involved building an 
  API-generated weather database to sharpen my skills in data handling, PostgreSQL, and API integration.
</p>

<p>
  I’ve also been diving deep into GraphQL, leveraging it to create efficient data queries and improve 
  performance in full-stack applications. I’m currently collaborating on an exciting project called 
  <strong>SproutSpace</strong>—a garden plot planning app that helps users design, visualize, and manage their gardens 
  while accessing plant databases and local weather data. Working with a team on this project has strengthened 
  my collaboration and version control skills, and it’s been a rewarding experience bringing a shared vision to life.
</p>

<p>
  Looking ahead, I’m excited to continue pushing my boundaries, contributing to meaningful projects, 
  and growing within a passionate and innovative development team.
</p>

          </div>
        </div>
      </section>
    </div>
  );
}

export default About;