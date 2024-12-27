import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './Modal.css';

const Modal = ({ isOpen, onClose, videoData, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    video: '',
    description: ''
  });

  // Llenar el formulario con la información del video seleccionado
  useEffect(() => {
    if (videoData) {
      setFormData({
        title: videoData.title || '',
        category: videoData.category || '',
        image: videoData.image || '',
        video: videoData.video || '',
        description: videoData.description || ''
      });
    }
  }, [videoData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData({
      title: '',
      category: '',
      image: '',
      video: '',
      description: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Editar Card</h2>
          <button onClick={onClose} className="close-button">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Título</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Categoría</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una categoría</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Innovación y Gestión">Innovación y Gestión</option>
            </select>
          </div>

          <div className="form-group">
            <label>Imagen</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="URL de la imagen"
              required
            />
          </div>

          <div className="form-group">
            <label>Video</label>
            <input
              type="text"
              name="video"
              value={formData.video}
              onChange={handleChange}
              placeholder="URL del video"
              required
            />
          </div>

          <div className="form-group">
            <label>Descripción</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <div className="button-group">
            <button
              type="button"
              onClick={handleReset}
              className="reset-button"
            >
              Limpiar
            </button>
            <button
              type="submit"
              className="save-button"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;