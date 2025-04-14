import React from 'react';
import ProjectCard from '../../componenets/projectCards';
import '../../styles/Portfolio.css'; // Adjust the path as necessary

function Portfolio() {
  const projects = [

    {
      title: "Sprout-Space",
      image: "/sprout-space.jpeg",
      link: "https://rendertest-v95r.onrender.com",
      alt: "Sprout-Space",
      description: "A Garden planning application that allows users to plan and manage their garden space.",
      github:"https://github.com/Daniellewoessner/Sprout-Space",
    },
    {
      title: "Weather Dashboard",
      image: "/Weatherdashboardpic.png",
      link: "https://daniellewoessner.github.io/Weatherdashboard2",
      alt: "Weather Dashboard",
      description: "A weather application that shows current and forecasted weather for multiple cities.",
      github: "https://github.com/Daniellewoessner/Weatherdashboard2"
    },
    {
      title: "README Generator",
      image: "/Read me generator.png",
      link: "https://github.com/Daniellewoessner/READMEGENERATOR",
      alt: "Read Me Generator",
      description: "A command-line application that dynamically generates a professional README.md file.",
      github: "https://github.com/Daniellewoessner/READMEGENERATOR"
    },
    {
      title: "Weather AI",
      image: "/WEATHERAI (2).png",
      link: "https://weatherai-ucpm.onrender.com/",
      alt: "Weather AI generator",
      description: "An AI-powered weather application providing intelligent weather forecasts and insights.",
      github: "https://github.com/Daniellewoessner/weatherai"
    },
    {
      title: "Vehicle Builder",
      image: "/vehiclebuilder.png",
      link: "https://github.com/Daniellewoessner/Vehicle-Builder",
      alt: "Vehicle Builder application",
      description: "An application that allows users to customize and build their own virtual vehicles.",
      github: "https://github.com/Daniellewoessner/Vehicle-Builder"
    },
    {
      title: "Employee Tracker",
      image: "/employee database.png",
      link: "https://github.com/Daniellewoessner/Employee-Tracker",
      alt: "Employee Database Tracker",
      description: "A content management system interface for managing employee databases.",
      github: "https://github.com/Daniellewoessner/Employee-Tracker"
    },
    {
      title: "Candidate Search",
      image: "/placeholder-project.jpg", // Placeholder image
      link: "https://github.com/Daniellewoessner/Canidate",
      alt: "Candidate Search",
      description: "A platform to search and manage job candidates and their applications.",
      github: "https://github.com/Daniellewoessner/Canidate"
    }
  ];

  return (
    <div className="portfolio-page">
      <section className="portfolio-header">
        <h1>My Projects</h1>
        <p>Here are some of the projects I've worked on recently.</p>
      </section>
      
      <section className="portfolio-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            link={project.link}
            alt={project.alt}
            description={project.description}
            github={project.github}
          />
        ))}
      </section>
    </div>
  );
}

export default Portfolio;