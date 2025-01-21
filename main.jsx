import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app.jsx';
import Home from './src /componenets/pages/home';
import About from './src /componenets/pages/about';
import Portfolio from './src /componenets/pages/portfolio';
import Contact from './src /componenets/pages/contact';
import Response from './src /componenets/pages/response';
import Resume from './src /componenets/pages/resume';
import Error from './src /componenets/pages/error';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'response',
        element: <Response />
      },
      {
        path: 'resume',
        element: <Resume />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);