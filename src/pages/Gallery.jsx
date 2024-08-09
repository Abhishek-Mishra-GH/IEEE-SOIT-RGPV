import React from 'react'
import Navbar from '../components/Navbar'
import Particle from '../components/particle';
import Carousel from '../components/Carousel';
import ImageGrid from '../components/ImageGrid';

export default function Gallery() {
  return (
    <div>
      <Navbar />
      <h1 className="text-5xl text-center my-8 font-semibold">
        GALLERY
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-44 border-b-4 border-black -z-0"></div>
      </h1>
      <div>
        <br></br>

        <div className="w-3/4 h-1/2 mx-auto">
          <Carousel />
        </div>
        <br></br>
        <ImageGrid />
      </div>
      <br></br>
    </div>
  )
}
