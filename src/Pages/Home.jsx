import React, { useState } from 'react';
import Header from '../Componentes/Header/Header';
import Banner from '../Componentes/Banner/Banner';
import CategoriaSection from '../Componentes/Categoria/CategoriaSection';
import Footer from '../Componentes/Footer/Footer';
import Modal from '../Componentes/Modal/Modal';

const Home = () => {
  const [videos, setVideos] = useState({
    frontend: [
      {
        title: 'Video Frontend 1',
        category: 'Frontend',
        image: "https://i.ytimg.com/vi/PztCEdIJITY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBbji3kKWxV2L4kTNj7sme6ChFt8g",
        description: 'Descripción de video Frontend 1',
        video: 'https://www.youtube.com/watch?v=PztCEdIJITY',
      },
      {
        title: 'Video Frontend 2',
        category: 'Frontend',
        image: "https://i.ytimg.com/vi/GJfOSoaXk4s/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBXZVPLM2ImD_Nt2QSlGFdXIvbMig",
        description: 'Descripción de video Frontend 2',
        video: 'https://www.youtube.com/watch?v=PztCEdIJITY',
      },
      {
        title: 'Video Frontend 3',
        category: 'Frontend',
        image: "https://i.ytimg.com/vi/rpvrLaBQwgg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBkb-PJrLWrffCvsevbaS6oMxcyhQ",
        description: 'Descripción de video Frontend 3',
        video: 'https://www.youtube.com/watch?v=PztCEdIJITY',
      }
    ],
    backend: [
      {
        title: 'Video Backend 1',
        category: 'Backend',
        image: "https://i.ytimg.com/vi/t-iqt1b2qqk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCcc4ILIJj5JKEJ8UJQZ--4bRrZqQ",
        description: 'Descripción de video Backend 1',
        video: 'https://www.youtube.com/watch?v=PztCEdIJITY',
      },
      {
        title: 'Video Backend 2',
        category: 'Backend',
        image: "https://i.ytimg.com/vi/cLLKVd5CNLc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLABXD79Lpl3_vSKAijb1doXYAHtfQ",
        description: 'Descripción de video Backend 2',
        video: 'https://www.youtube.com/watch?v=PztCEdIJITY',
      },
      {
        title: 'Video Backend 3',
        category: 'Backend',
        image: "https://i.ytimg.com/vi/EoPvlE85XAQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD80rSRC-pV7GFZ7LorycqSeDY3xA",
        description: 'Descripción de video Backend 3',
        video: 'https://www.youtube.com/watch?v=PztCEdIJITY',
      }
    ],
    innovacion: [
      {
        title: 'Video Innovación y Gestión 1',
        category: 'INNOVACIÓN Y GESTIÓN',
        image: "https://i.ytimg.com/vi/vhwspfvI52k/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCqexH9fRQBKlGPWhCiwZvXZxuU3g",
        description: 'Descripción de video Innovación y gestión 1',
        video: 'https://www.youtube.com/watch?v=PztCEdIJITY',
      },
      {
        title: 'Video Innovación y Gestión 2',
        category: 'INNOVACIÓN Y GESTIÓN',
        image: "https://i.ytimg.com/vi/YhR7Zp8NUzE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA85X__bV2DjIuEnZUEPZyoRkurpw",
        description: 'Descripción de video Innovación y gestión 2',
        video: 'https://www.youtube.com/watch?v=PztCEdIJITY',
      },
      {
        title: 'Video Innovación y Gestión 3',
        category: 'INNOVACIÓN Y GESTIÓN',
        image: "https://i.ytimg.com/vi/6N3OkLCfK-0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD15u5dbwMTsHSMc_X7uvc5eTr-9A",
        description: 'Descripción de video Innovación y gestión 3',
        video: 'https://www.youtube.com/watch?v=PztCEdIJITY',
      }
    ]
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleEdit = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };
  
  const handleSave = (updatedVideo) => {
    setVideos((prevVideos) => {
      const category = updatedVideo.category.toLowerCase(); // Asegúrate de que la categoría esté en minúsculas
      return {
        ...prevVideos,
        [category]: prevVideos[category].map((v) =>
          v.title === updatedVideo.title ? updatedVideo : v
        ),
      };
    });
    setIsModalOpen(false); // Cierra el modal después de guardar
  };

  const handleDelete = (category, videoIndex) => {
    setVideos((prevVideos) => {
      const updatedCategory = [...prevVideos[category]];
      updatedCategory.splice(videoIndex, 1);
      return {
        ...prevVideos,
        [category]: updatedCategory,
      };
    });
  };

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
            borderColor={`border-${categoryKey}`}
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
