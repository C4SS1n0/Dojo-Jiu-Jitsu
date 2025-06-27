import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import QuienesSomos from "../pages/QuienesSomos";
import MainLayout from "../layout/MainLayout";
import Perfil from "../pages/Perfil";
import AuthPage from "../pages/AuthPage";

export default function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}