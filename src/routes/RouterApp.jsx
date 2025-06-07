import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import QuienesSomos from "../pages/QuienesSomos";
import Academias from "../pages/Academias";
import Contacto from "../pages/Contacto";
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
          <Route path="academias" element={<Academias />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

// Corregir lo de seleccion de rol / login, y luego articular mejor con imágenes y etc la página de inicio