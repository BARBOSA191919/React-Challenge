import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Componentes/Header/Header';
import Footer from '../Componentes/Footer/Footer';
import './NuevoVideo.css';

const NuevoVideo = () => {
  const [form, setForm] = useState({
    title: '',
    category: '',
    image: '',
    video: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = 'El título es obligatorio.';
    if (!form.category.trim()) newErrors.category = 'La categoría es obligatoria.';
    if (!form.image.trim()) newErrors.image = 'El enlace de la imagen es obligatorio.';
    if (!form.video.trim()) newErrors.video = 'El enlace del video es obligatorio.';
    return newErrors;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const newErrors = validate();
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
  } else {
    setLoading(true);
    try {
      await axios.post('https://backend-react-challenge.onrender.com/', form);
      alert('¡Nuevo video creado con éxito!');
      setForm({ title: '', category: '', image: '', video: '', description: '' });
      setErrors({});
    } catch (error) {
      console.error('Error al crear el video:', error);
      alert('Hubo un error al crear el video. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  }
};

  const handleReset = () => {
    setForm({ title: '', category: '', image: '', video: '', description: '' });
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
          <div className="form-tarjeta">
            <h1 className="form-title">Crear Tarjeta</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className={`form-group ${errors.title ? 'error' : ''}`}>
                <label className="form-label">Título</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Ingrese el título del video"
                />
                {errors.title && <p className="error-message">{errors.title}</p>}
              </div>

              <div className={`form-group ${errors.category ? 'error' : ''}`}>
                <label className="form-label">Categoría</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Seleccione una categoría</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Innovación y Gestión">Innovación y Gestión</option>
                </select>
                {errors.category && <p className="error-message">{errors.category}</p>}
              </div>

              <div className={`form-group ${errors.image ? 'error' : ''}`}>
                <label className="form-label">Imagen</label>
                <input
                  type="text"
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Ingrese el enlace de la imagen"
                />
                {errors.image && <p className="error-message">{errors.image}</p>}
              </div>

              <div className={`form-group ${errors.video ? 'error' : ''}`}>
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
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="¿De qué trata este video?"
                />
              </div>

              <div className="button-container">
                <button
                  type="submit"
                  className="button button-save"
                  disabled={loading}
                >
                  {loading ? 'Guardando...' : 'GUARDAR'}
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="button button-clear"
                >
                  LIMPIAR
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
