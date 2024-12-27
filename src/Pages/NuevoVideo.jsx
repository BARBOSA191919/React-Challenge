import React, { useState } from 'react';
import Header from '../Componentes/Header/Header';
import Footer from '../Componentes/Footer/Footer';
import './NuevoVideo.css';

const NuevoVideo = () => {
  const [form, setForm] = useState({
    titulo: '',
    categoria: '',
    imagen: '',
    video: '',
    descripcion: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.titulo.trim()) newErrors.titulo = 'El título es obligatorio.';
    if (!form.categoria.trim()) newErrors.categoria = 'La categoría es obligatoria.';
    if (!form.imagen.trim()) newErrors.imagen = 'El enlace de la imagen es obligatorio.';
    if (!form.video.trim()) newErrors.video = 'El enlace del video es obligatorio.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert('Formulario enviado con éxito.');
      setForm({ titulo: '', categoria: '', imagen: '', video: '', descripcion: '' });
      setErrors({});
    }
  };

  const handleReset = () => {
    setForm({ titulo: '', categoria: '', imagen: '', video: '', descripcion: '' });
    setErrors({});
  };

  return (
    <div className="nuevo-video-container">
      <Header />
      <main className="nuevo-video-main">
        <div className="form-container">
          <div className="form-header">
            <h1 className="form-title">NUEVO VIDEO</h1>
            <p className="form-subtitle">
              COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO
            </p>
          </div>
          
          <form onSubmit={handleSubmit}>
  <div className="form-grid">
    <div className="form-group">
      <label className="form-label">Título</label>
      <input
        type="text"
        name="titulo"
        value={form.titulo}
        onChange={handleChange}
        className="form-input"
      />
      {errors.titulo && <p className="error-message">{errors.titulo}</p>}
    </div>

    <div className="form-group">
      <label className="form-label">Categoría</label>
      <select
        name="categoria"
        value={form.categoria}
        onChange={handleChange}
        className="form-select"
      >
        <option value="">Seleccione una categoría</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Innovación y Gestión">Innovación y Gestión</option>
      </select>
      {errors.categoria && <p className="error-message">{errors.categoria}</p>}
    </div>

    <div className="form-group">
      <label className="form-label">Imagen</label>
      <input
        type="text"
        name="imagen"
        value={form.imagen}
        onChange={handleChange}
        className="form-input"
        placeholder="Ingrese el enlace de la imagen"
      />
      {errors.imagen && <p className="error-message">{errors.imagen}</p>}
    </div>

    <div className="form-group">
      <label className="form-label">Video</label>
      <input
        type="text"
        name="video"
        value={form.video}
        onChange={handleChange}
        className="form-input"
        placeholder="Ingrese el enlace del video"
      />
      {errors.video && <p className="error-message">{errors.video}</p>}
    </div>

    <div className="form-group form-group-full">
      <label className="form-label">Descripción</label>
      <textarea
        name="descripcion"
        value={form.descripcion}
        onChange={handleChange}
        className="form-textarea"
        placeholder="¿Qué es lo que trata este video?"
      />
    </div>

    <div className="button-container">
      <button
        type="button"
        onClick={handleReset}
        className="button button-clear"
      >
        LIMPIAR
      </button>
      <button
        type="submit"
        className="button button-save"
      >
        GUARDAR
      </button>
    </div>
  </div>
</form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NuevoVideo;