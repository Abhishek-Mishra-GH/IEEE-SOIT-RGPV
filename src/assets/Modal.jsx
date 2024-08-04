// src/components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg p-4 max-w-3xl mx-auto">
        <button onClick={onClose} className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2 h-12 w-12">✕</button>
        <img src={image} alt="Modal Content" className="w-full h-[35rem] object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default Modal;
