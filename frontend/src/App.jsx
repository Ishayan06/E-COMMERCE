import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SeachBar from './components/SeachBar';
import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (

    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer/>
      <Navbar/>
      <SeachBar/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
