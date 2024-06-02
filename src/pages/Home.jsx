import React, { useEffect, useRef, useState } from 'react'
import HomeIntro from '../components/HomeIntro'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

export default function Home() {

  const [isAtTop, setIsAtTop] = useState(false);
  const [navTop, setNavTop] = useState(0)


  useEffect(() => {
   const handleScroll = () => {
    const scrollTop = window.scrollY
    const navElement = document.getElementById('animateNav')

    if(navElement) {
      const offSetTop = navElement.getBoundingClientRect().top + scrollTop
      setNavTop(offSetTop)
      if(scrollTop >= offSetTop) {
        setIsAtTop(true)
      } else {
        setIsAtTop(false)
      }
    }
   }
  
   window.addEventListener('scroll', handleScroll)

   handleScroll()

   return () => {
    window.removeEventListener('scroll', handleScroll)
   }

  }, [])

  return (
    // wrapper div
    <div>
      <div className='border-4 flex h-screen '>
        <HomeIntro/>
      </div>
      <motion.div 
        id='animateNav' 
        initial={{opacity: 0}} 
        animate={{opacity: isAtTop ? 1 : 0}}
        transition={{duration: 0.8}}
        className="sticky top-0">

        <Navbar />

      </motion.div>
      <div className="h-[200vh]"></div>


    </div>
  )
}
