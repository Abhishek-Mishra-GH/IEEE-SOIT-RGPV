import React from 'react'
import HomeIntro from '../components/HomeIntro'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    // wrapper div
    <div>
      <div className='md:mb-[100vh] mb-[calc(100vh-5rem)]'>
        <HomeIntro/>
      </div>
      <Navbar />
      <div className="h-[200vh]"></div>
    </div>
  )
}
