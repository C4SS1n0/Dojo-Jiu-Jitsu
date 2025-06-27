import React, { useState } from "react";
import "./Register.css";

const Register = ({ selectedRole, onVolverRol, onVolverLogin }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
    afiliado: "",
    academia: "",
    titulo: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "titulo") {
      setFormData({ ...formData, titulo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido";
    if (!formData.email.includes("@")) newErrors.email = "Email inválido";
    if (formData.password.length < 6)
      newErrors.password = "Mínimo 6 caracteres";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Las contraseñas no coinciden";

    if (selectedRole === "maestro") {
      if (!formData.afiliado) newErrors.afiliado = "Este campo es obligatorio";
      if (!formData.titulo) newErrors.titulo = "Debés adjuntar tu título";
      if (formData.afiliado === "si" && !formData.academia.trim())
        newErrors.academia = "Debe ingresar el nombre de la academia";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    try {
      const formPayLoad = new FormData();
      formPayLoad.append("nombre", formData.nombre);
      formPayLoad.append("email", formData.email);
      formPayLoad.append("contraseña", formData.password);
      formPayLoad.append("rol", selectedRole);

      if (selectedRole === "maestro") {
        formPayLoad.append("afiliado", formData.afiliado);
        formPayLoad.append("academia", formData.academia);
        formPayLoad.append("titulo", formData.titulo);
      }
      const response = await fetch(
        "http://localhost:8000/routes/registrarMaestro",
        {
          method: "POST",
          body: formPayLoad,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error:", errorData.detail);
        return;
      }

      const data = await response.json();
      console.log("Registro exitoso: ", data);
      alert("Registro exitoso: ", data);
    } catch (error) {
      console.log("Error al registrar: ", error);
    } finally {
      setLoading(false);
    }
    
  };
  const mostrarRol = selectedRole === "maestro" ? "Maestro" : "Estudiante";
  const roleIcon =
    selectedRole === "maestro" ? (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <path
          d="M23 21v-2a4 4 0 0 0-3-3.87"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 3.13a4 4 0 0 1 0 7.75"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 14l9-5-9-5-9 5 9 5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

  return (
    <div className="register-container-side">
      <div className="register-wrapper">
        <div className="register-header">
          <div className="role-icon">{roleIcon}</div>
          <h2>Crear cuenta como {mostrarRol}</h2>
          <p className="register-subtitle">Completa tus datos para comenzar</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-wrapper">
              <div className="input-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                className={errors.nombre ? "input-error" : ""}
              />
            </div>
            {errors.nombre && (
              <span className="error-text">{errors.nombre}</span>
            )}
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <div className="input-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />
            </div>
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <div className="input-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="16"
                    r="1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M7 11V7a5 5 0 0 1 10 0v4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "input-error" : ""}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <div className="input-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="16"
                    r="1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M7 11V7a5 5 0 0 1 10 0v4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirmar contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? "input-error" : ""}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="error-text">{errors.confirmPassword}</span>
            )}
          </div>

          {selectedRole === "maestro" && (
            <>
              <div className="form-group">
                <label className="form-label">
                  ¿Estás afiliado a una academia?
                </label>
                <div className="select-wrapper">
                  <select
                    name="afiliado"
                    value={formData.afiliado}
                    onChange={handleChange}
                    className={errors.afiliado ? "input-error" : ""}
                  >
                    <option value="">Seleccionar...</option>
                    <option value="si">Sí</option>
                    <option value="independiente">
                      Independiente / Retirado
                    </option>
                  </select>
                  <div className="select-arrow">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline
                        points="6,9 12,15 18,9"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                {errors.afiliado && (
                  <span className="error-text">{errors.afiliado}</span>
                )}
              </div>

              {formData.afiliado === "si" && (
                <div className="form-group">
                  <label className="form-label">¿A cuál?</label>
                  <div className="input-wrapper">
                    <div className="input-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <polyline
                          points="9,22 9,12 15,12 15,22"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="academia"
                      placeholder="Nombre de la academia"
                      value={formData.academia}
                      onChange={handleChange}
                      className={errors.academia ? "input-error" : ""}
                    />
                  </div>
                  {errors.academia && (
                    <span className="error-text">{errors.academia}</span>
                  )}
                </div>
              )}

              <div className="form-group">
                <label className="form-label">
                  Adjuntar título (PDF o imagen)
                </label>
                <div className="file-upload-wrapper">
                  <input
                    type="file"
                    name="titulo"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleChange}
                    className="file-input"
                    id="titulo-upload"
                  />
                  <label htmlFor="titulo-upload" className="file-upload-label">
                    <div className="file-upload-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <polyline
                          points="7,10 12,15 17,10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <line
                          x1="12"
                          y1="15"
                          x2="12"
                          y2="3"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <span>
                      {formData.titulo
                        ? formData.titulo.name
                        : "Seleccionar archivo"}
                    </span>
                  </label>
                </div>
                {errors.titulo && (
                  <span className="error-text">{errors.titulo}</span>
                )}
              </div>
            </>
          )}

          <button type="submit" disabled={loading} className="submit-button">
            {loading && <div className="loading-spinner"></div>}
            {loading ? "Creando cuenta..." : "Registrarse"}
          </button>

          <div className="form-footer">
            <button type="button" onClick={onVolverRol} className="back-button">
              ← Cambiar rol
            </button>
            <button
              type="button"
              onClick={onVolverLogin}
              className="login-link"
            >
              ¿Ya tienes cuenta? Inicia sesión
            </button>
          </div>
        </form>
      </div>

      <div className="background-overlay"></div>
    </div>
  );
};

export default Register;
