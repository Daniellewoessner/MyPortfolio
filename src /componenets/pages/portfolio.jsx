import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: "Weather Dashboard",
      image: "public/Weatherdashboardpic.png",
      link: "https://daniellewoessner.github.io/Weatherdashboard2",
      alt: "Weather Dashboard"
    },
    {
      title: "README Generator",
      image: "public/Read me generator.png",
      link: "https://github.com/Daniellewoessner/READMEGENERATOR",
      alt: "Read Me Generator"
    },
    {
      title: "Weather AI",
      image: "public/WEATHERAI (2).png",
      link: "https://weatherai-ucpm.onrender.com/",
      alt: "Weather AI generator"
    },
    {
      title: "Vehicle Builder",
      image: "public/vehiclebuilder.png",
      link: "https://github.com/Daniellewoessner/Vehicle-Builder",
      alt: "Vehicle Builder application"
    },
    {
      title: "Employee Tracker",
      image: "public/employee database.png",
      link: "https://github.com/Daniellewoessner/Employee-Tracker",
      alt: "Employee Database Tracker"
    }
  ];

  return (
    <div className="min-h-screen bg-[#cad2c5] py-16">
      <main className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center">My Portfolio</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-#f5f1ed rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}