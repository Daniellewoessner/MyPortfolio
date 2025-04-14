// File: src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavTabs from './src /componenets/Navtabs';
import Footer from './src /componenets/footer';
import Home from './src /componenets/pages/home';
import About from './src /componenets/pages/about';
import Portfolio from './src /componenets/pages/portfolio';
import Contact from './src /componenets/pages/contact';
import Resume from './src /componenets/pages/resume';
import Error from './src /componenets/pages/error';
import Response from './src /componenets/pages/response';
import ScrollToTop from './src /componenets/ScrollToTop';
import './src /styles/app.css'; // Adjust the path as necessary

function App() {
  return (
    <div className="app">
      <NavTabs />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/response" element={<Response />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;