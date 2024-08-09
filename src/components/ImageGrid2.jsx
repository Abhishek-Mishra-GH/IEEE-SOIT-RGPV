// src/components/ImageGrid.js
import React, { useState } from 'react';
import { images } from "../assets/img";
import Modal from '../assets/Modal';

const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative -z-10 w-full mx-auto p-4 bg-white border-4 border-gray-300 rounded-lg shadow-lg overflow-x-auto scrollbar-hide">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative z-10 rounded-lg overflow-hidden border-4 border-gray-700 shadow-custom group w-72 h-72"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image}
              alt={`Image ${index}`}
              className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg group-hover:z-10 cursor-pointer"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
          </div>
        ))}
      </div>
      <Modal isOpen={!!selectedImage} onClose={handleCloseModal} image={selectedImage} />
    </div>
  );
};

export default ImageGrid;
