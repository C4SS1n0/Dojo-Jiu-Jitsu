import React from 'react';
import Navbar from '../components/navbar.jsx';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;