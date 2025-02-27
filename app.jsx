import { Outlet } from 'react-router-dom';
import NavTabs from './src /componenets/Navtabs';
import React from 'react';
import Footer from './src /componenets/footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#cad2c5]">
      <NavTabs />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}