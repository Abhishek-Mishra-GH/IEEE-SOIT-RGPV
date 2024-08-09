import React, { useState } from 'react'
import { images } from '../assets/img'
import Modal from "../assets/Modal";

export default function ImageGrid() {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const Img = ({image}) => {
    return (
        <div className="h-72 w-72 max-w-sm overflow-hidden border shadow-md rounded-lg">
            <img 
                src={image} 
                alt="img"
                onClick={() => handleImageClick(image)}
                className="h-72 w-full object-cover  sm:hover:scale-110 sm:hover:relative sm:hover:transform sm:transition-transform sm:duration-300 sm:ease-in-out hover:shadow-lg cursor-pointer rounded-lg" 
            />
        </div>
    )
  }

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-6 py-8">
      {
        images.map(image => {
            return <Img image={image} />
        })
      }
    </div>
    <Modal isOpen={!!selectedImage} onClose={handleCloseModal} image={selectedImage} />
    </>
  )
}
