import { Link } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';

export default function Home() {
  const hostRef = useRef(null);

  useEffect(() => {
    if (hostRef.current && !hostRef.current.shadowRoot) {
      const shadowRoot = hostRef.current.attachShadow({ mode: 'open' });
 
      // Create a container for the social links
      const socialLinksContainer = document.createElement('div');
      socialLinksContainer.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 0;
        right: 0;
        text-align: center;
        padding: 10px;
        background: rgba(181, 146, 160, 0.1);
        backdrop-filter: blur(5px);
        border-radius: 8px;
        margin: 0 20px;
      `;
 
      // Create GitHub link
      const githubLink = document.createElement('a');
      githubLink.href = 'https://github.com/Daniellewoessner'; 
      githubLink.target = '_blank';
      githubLink.rel = 'noopener noreferrer';
      githubLink.textContent = 'Find me on GitHub';
      githubLink.style.cssText = `
        color: #2d3748;
        text-decoration: none;
        font-weight: 500;
        padding: 8px 16px;
        border-radius: 6px;
        transition: all 0.3s ease;
      `;
 
      // Add hover effect
      githubLink.addEventListener('mouseover', () => {
        githubLink.style.backgroundColor = 'rgba(181, 146, 160, 0.2)';
      });
      githubLink.addEventListener('mouseout', () => {
        githubLink.style.backgroundColor = 'transparent';
      });
 
      socialLinksContainer.appendChild(githubLink);
      shadowRoot.appendChild(socialLinksContainer);
    }
  }, []);
// add header to top of page

  
 return (
   <div className="min-h-screen bg-gradient-to-b from-[#cad2c5] to-white">
     <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
       <section className="text-center mb-16">
         <div className="flex justify-center mb-8">
           <div className="relative">
             <div className="absolute inset-0 bg-[#b592a0] rounded-full blur-lg opacity-20"></div>
             <img
               src="/profile.jpg"
               alt="Danielle Woessner"
               className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-xl border-4 border-white mx-auto"
             />
           </div>
         </div>

         <div className="text-center max-w-2xl mx-auto">
           <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
             Danielle Woessner
           </h1>
           <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6">
             Full Stack Web Developer student
           </h2>
           <p className="text-lg text-gray-600 mb-8 leading-relaxed">
           Hello, my name is Danielle Woessner, and I'm thrilled to welcome you to my portfolio! I'm currently immersed in the exciting world of coding through a rigorous bootcamp program. During this journey, I've had the opportunity to delve into a wide range of technologies, building a strong foundation in web development fundamentals. From crafting the structure of web pages with HTML and styling them with CSS, to adding dynamic interactivity with JavaScript, I've truly enjoyed the process of bringing ideas to life. We've also explored the complexities of React, learning to build reusable and robust user interfaces, and navigated the world of APIs to connect our applications to external data. The projects you'll find here represent a collection of my work throughout this bootcamp, showcasing the skills I've acquired and the progress I've made. Thanks for stopping by and taking the time to explore my portfolio – I hope you enjoy viewing them as much as I enjoyed creating them!
           </p>
           <div className="flex justify-center gap-4">
             <Link 
               to="/portfolio" 
               className="bg-[#b592a0] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md"
             >
               
             </Link>
             <Link 
               to="/contact" 
               className="bg-[#b592a0] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md"
             >
               
             </Link>
           <div className="text-center max-w-2xl mx-auto">
           <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
           </h1>
           <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6">
           </h2>
           <p className="text-lg text-gray-600 mb-8 leading-relaxed">
           </p>
           <div className="flex justify-center gap-4">
             <Link 
               to="/portfolio" 
               className="bg-[#b592a0] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md"
             >
               
             </Link>

</div>
<body>
<ul>My Skills</ul>
<li>Html</li>
<li>Css</li>
<li>Java</li>
<li>Bootstrap</li>
<li>Typescript</li>
<li>React</li>
<li>Node Js</li>


</body>
 </div>
           </div>
         </div>
       </section>
     </main>
     {}
     <div ref={hostRef}></div>
   </div>
 );
}