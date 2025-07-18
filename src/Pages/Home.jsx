import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Componentes/Header/Header';
import Banner from '../Componentes/Banner/Banner';
import CategoriaSection from '../Componentes/Categoria/CategoriaSection';
import Footer from '../Componentes/Footer/Footer';
import Modal from '../Componentes/Modal/Modal';

const API_URL = `${process.env.REACT_APP_API_URL}/videos`;

const Home = () => {
  const [videos, setVideos] = useState({
    frontend: [],
    backend: [],
    'Innovación y Gestión': []
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar videos iniciales
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(API_URL);
        // Organizar videos por categoría
        const videosByCategory = {
          frontend: [],
          backend: [],
          'Innovación y Gestión': []
        };
        
        response.data.forEach(video => {
          const category = video.category === 'Innovación y Gestión' 
            ? 'Innovación y Gestión' 
            : video.category.toLowerCase();
          if (videosByCategory[category]) {
            videosByCategory[category].push(video);
          }
        });
        
        setVideos(videosByCategory);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los videos');
        setLoading(false);
        console.error('Error fetching videos:', err);
      }
    };

    fetchVideos();
  }, []);

  const handleEdit = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleSave = async (updatedVideo) => {
    try {
      // Actualizar el video en el servidor
      await axios.put(`${API_URL}/${updatedVideo.id}`, updatedVideo);

      
      // Actualizar el estado local
      setVideos(prevVideos => {
        const newVideos = { ...prevVideos };
        
        // Remover el video de su categoría anterior
        Object.keys(newVideos).forEach(category => {
          newVideos[category] = newVideos[category].filter(
            v => v.id !== updatedVideo.id
          );
        });
        
        // Añadir el video actualizado a su nueva categoría
        const category = updatedVideo.category === 'Innovación y Gestión'
          ? 'Innovación y Gestión'
          : updatedVideo.category.toLowerCase();
        
        if (!newVideos[category]) {
          newVideos[category] = [];
        }
        
        newVideos[category].push(updatedVideo);
        return newVideos;
      });
      
      setIsModalOpen(false);
    } catch (err) {
      console.error('Error updating video:', err);
    }
  };
  

  const handleDelete = async (category, videoIndex) => {
    const videoToDelete = videos[category][videoIndex];
    
    try {
      // Eliminar el video del servidor
      await axios.delete(`${API_URL}/${videoToDelete.id}`);

      
      // Actualizar el estado local
      setVideos(prevVideos => {
        const updatedCategory = [...prevVideos[category]];
        updatedCategory.splice(videoIndex, 1);
        return {
          ...prevVideos,
          [category]: updatedCategory,
        };
      });
    } catch (err) {
      console.error('Error deleting video:', err);
    }
  };
  

  if (loading) {
    return <div>Cargando videos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen bg-[#1a1e29]">
      <Header />
      <Banner />
      <div className="py-4">
        {Object.keys(videos).map((categoryKey) => (
          <CategoriaSection
            key={categoryKey}
            title={categoryKey.toUpperCase()}
            videos={videos[categoryKey]}
            borderColor={`border-${categoryKey.toLowerCase().replace(/\s+/g, '')}`}
            onEdit={handleEdit}
            onDelete={(index) => handleDelete(categoryKey, index)}
          />
        ))}
      </div>
      <Footer />
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          videoData={selectedVideo}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default Home;