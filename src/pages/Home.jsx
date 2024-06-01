import React from 'react'
import HomeIntro from '../components/HomeIntro'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    // wrapper div
    <div>
      <div className='mb-[100vh]'>
        <HomeIntro/>
      </div>
      <Navbar />
      <div className="h-[200vh]"></div>
    </div>
  )
}
