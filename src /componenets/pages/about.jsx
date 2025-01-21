import React from 'react';

export default function About() {
  return (

    <div className="min-h-screen bg-gradient-to-b from-[#cad2c5] to-white">
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section with Centered Image */}
      <section className="text-center mb-16">
        {/* Profile Image - Centered */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-[#b592a0] rounded-full blur-lg opacity-20"></div>
            <img
              src="/aboutme.jpeg"
              alt="Danielle Woessner"
              className="relative w-20 h-20 md:w-5 md:h-5 rounded-full object-cover shadow-xl border-4 border-white mx-auto"
              
              />
              <c>
              <img
               src={ "/Add a heading.png"}
              alt="Danielle Woessner"
              className="relative w-20 h-20 md:w-5 md:h-5 rounded-full object-cover shadow-xl border-4 border-white mx-auto"
              
              />
              </c>
             

              </div>
    
            </div>
    
          </section>
    
          </main>
          <body></body>
          
     <div className="min-h-screen bg-[#cad2c5]">
          <main className="max-w-4xl mx-auto px-6 py-12">
              <h1 className="text-4xl font-bold mb-6"></h1>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-lg mb-4">
                  Hello everyone! I'm Danielle Woessner, and I'm excited to be sharing a bit about myself. My professional journey began in the field of Psychology, where I specialized in working with children on the autism spectrum. While that work was incredibly rewarding, I felt a pull towards a new challenge and recently decided to dive into the world of technology. I'm currently enrolled in a coding bootcamp, fully immersing myself in learning the essentials of programming. Outside of my studies, I call the vibrant city of Orlando, Florida home. My free time is often filled with fun adventures, whether it's hopping between theme parks, relaxing on the beach, or enjoying live music at concerts. Family time is also incredibly important to me. I'm finding the coding bootcamp to be an engaging and challenging experience, and I'm eagerly looking forward to a future career in this field. I hope to bring a unique perspective that combines my background in psychology with my new skills in coding, and contribute meaningfully to the tech community.
                  My current technical arsenal includes a solid foundation in HTML, Java, CSS, React, TypeScript, Bootstrap, and npm, allowing me to build robust and engaging web applications. I'm constantly striving to enhance these core skills and explore new technologies to stay at the forefront of the ever-evolving coding landscape. This commitment to lifelong learning is driven by both the desire to be a valuable asset for potential employers and by a personal passion for growth and mastery in the coding world. I find immense joy in the creative process, whether it involves crafting elegant user interfaces or implementing complex logic, and I approach each new challenge with diligence and a thirst for knowledge. Recently, I've been focused on expanding my backend development experience, culminating in the creation of an API-generated weather database – a project that has allowed me to deepen my understanding of data handling and API integration.
                  I've been working extensively with PostgreSQL (psql) to build and manage the database, utilizing seeding techniques to populate the initial data and crafting complex SQL queries to retrieve and manipulate the information. This practical application has significantly deepened my understanding of relational databases. Looking ahead, I'm excited to continue pushing my boundaries, refining my existing skills, and acquiring new ones within the realm of backend development, building upon this foundation I've established.

                  </p>

                  
              </div>
          </main>
      </div>
      </div>
   

  );
}