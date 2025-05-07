import React from 'react';
import Navbar from 'src/components/navbar.jsx';
import { Outlet } from 'react-router-dom';
import 'src/styles/shared.css'; // 👈 importante

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