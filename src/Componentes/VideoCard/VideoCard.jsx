import React from 'react';
import './VideoCard.css';
import { FaEdit, FaTrashRestoreAlt } from 'react-icons/fa';

const VideoCard = ({ title, category, image, borderColor, onDelete, onEdit }) => {
  return (
    <div className={`video-card mb-6 ${borderColor}`}>
      <div className="relative group">
        <img
          src={image || '/api/placeholder/400/200'}
          alt={title}
          className="video-thumbnail"
        />
        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
            className="bg-red-600 text-white px-4 py-1 rounded text-sm hover:bg-red-700 transition-colors duration-300"
            onClick={onDelete}
          >
            <FaTrashRestoreAlt className="inline-block mr-1" /> Borrar
          </button>
          
          <button
            className="bg-black bg-opacity-60 text-white px-4 py-1 rounded text-sm hover:bg-opacity-80 transition-colors duration-300"
            onClick={onEdit}
          >
            <FaEdit className="inline-block mr-1" /> Editar
          </button>
     
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white mt-2">{title}</h3>
      <p className="text-blue-500">{category}</p>
    </div>
  );
};

export default VideoCard;
