import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './CategoriaSection.css';

const CategoriaSection = ({ title, videos, borderColor, onDelete, onEdit }) => {
  return (
    <div className="categoria-section py-8">
      <div className="container mx-auto px-4">
        <div className={`categoria-title ${borderColor}`}>{title}</div>
        <div className="grid grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              {...video}
              borderColor={borderColor}
              onDelete={() => onDelete(index)} // Pasar índice del video para borrar
              onEdit={() => onEdit(video)} // Pasar video para editar
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriaSection;
