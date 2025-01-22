// Footer.jsx
import React, { useRef, useEffect } from 'react';

export default function Footer() {
  const hostRef = useRef(null);

  useEffect(() => {
    if (hostRef.current && !hostRef.current.shadowRoot) {
      const shadowRoot = hostRef.current.attachShadow({ mode: 'open' });

      // Create footer container
      const footerContainer = document.createElement('div');
      footerContainer.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        padding: 10px;
        background: rgba(181, 146, 160, 0.1);
        backdrop-filter: blur(5px);
        margin: 0;
        display: flex;
        justify-content: center;
        gap: 20px;
      `;

      // Common link styles
      const linkStyle = `
        color: #2d3748;
        text-decoration: none;
        font-weight: 500;
        padding: 8px 16px;
        border-radius: 6px;
        transition: all 0.3s ease;
      `;

      // Create GitHub link
      const githubLink = document.createElement('a');
      githubLink.href = 'https://github.com/Daniellewoessner';
      githubLink.target = '_blank';
      githubLink.rel = 'noopener noreferrer';
      githubLink.textContent = 'GitHub';
      githubLink.style.cssText = linkStyle;



      // Go to contact sheet
      const emailLink = document.createElement('a');
      emailLink.href = 'https://daniellewoessner.netlify.app/contact';
      emailLink.target ='_blank';
      emailLink.rel = 'noopener noreferrer'
      emailLink.textContent = 'Get in Touch';
     emailLink.style.cssText = linkStyle;

      // Add hover effect to all links
      const links = [githubLink, emailLink];
      links.forEach(link => {
        link.addEventListener('mouseover', () => {
          link.style.backgroundColor = 'rgba(181, 146, 160, 0.2)';
        });
        link.addEventListener('mouseout', () => {
          link.style.backgroundColor = 'transparent';
        });
      });

      // Add copyright text
      const copyright = document.createElement('span');
      copyright.textContent = '© 2024 Danielle Woessner';
      copyright.style.cssText = `
        color: #2d3748;
        font-size: 0.875rem;
        margin-left: 20px;
      `;

      // Append all elements to footer container
      footerContainer.appendChild(githubLink);
      footerContainer.appendChild(emailLink);
      footerContainer.appendChild(copyright);

      // Add footer container to shadow root
      shadowRoot.appendChild(footerContainer);
    }
  }, []);

  return <div ref={hostRef}></div>;
}