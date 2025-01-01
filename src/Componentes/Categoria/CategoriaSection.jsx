import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './CategoriaSection.css';

const CategoriaSection = ({ title, videos, borderColor, onDelete, onEdit }) => {
  return (
    <div className="categoria-section">
      <div className="categoria-title" style={{ backgroundColor: borderColor }}>
        {title}
      </div>
      <div className="grid">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            {...video}
            onDelete={() => onDelete(index)}
            onEdit={() => onEdit(video)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriaSection;
