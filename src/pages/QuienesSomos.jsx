import React from 'react';
import './Shared.css';

const QuienesSomos = () => {
  return (
    <div className="quienes-somos-container">
      <div className="background-overlay"></div>
      
      <div className="content-wrapper">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="hero-title">¿Quiénes Somos?</h1>
          <p className="hero-subtitle">Conectando la comunidad del Jiu-Jitsu en Latinoamérica</p>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* About Section */}
          <div className="about-card">
            <div className="card-header">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2>Nuestra Comunidad</h2>
            </div>
            <div className="card-content">
              <p>
                Somos una comunidad de apasionados por el Jiu-Jitsu que busca unificar academias, 
                estudiantes y maestros de toda Latinoamérica en una sola plataforma.
              </p>
              <p>
                Nuestra misión es modernizar la gestión, la enseñanza y el acceso al conocimiento 
                en el mundo del Jiu-Jitsu, promoviendo la excelencia y el crecimiento de todos los involucrados.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-header">
                <div className="card-icon mission-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11l3 3 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.31 0 2.55.28 3.68.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Nuestra Misión</h3>
              </div>
              <p>Democratizar el acceso al conocimiento del Jiu-Jitsu y crear una red que conecte a toda la comunidad latinoamericana.</p>
            </div>

            <div className="vision-card">
              <div className="card-header">
                <div className="card-icon vision-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Nuestra Visión</h3>
              </div>
              <p>Ser la plataforma líder en educación de Jiu-Jitsu, transformando la manera en que se aprende y enseña este arte marcial.</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="contact-section">
            <div className="contact-header">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h2>Ponte en Contacto</h2>
              <p>¿Tenés dudas o querés comunicarte con nosotros?</p>
            </div>

            <div className="contact-cards">
              <div className="contact-card email-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="contact-card-content">
                  <h4>Email</h4>
                  <a href="mailto:contacto@tudominio.com" className="contact-link">
                    contacto@tudominio.com
                  </a>
                </div>
                <div className="contact-card-arrow">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17l10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7h10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className="contact-card instagram-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="contact-card-content">
                  <h4>Instagram</h4>
                  <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" className="contact-link">
                    @tuusuario
                  </a>
                </div>
                <div className="contact-card-arrow">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17l10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7h10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;