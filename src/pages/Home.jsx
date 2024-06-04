import React, { useEffect, useState } from 'react'
import HomeIntro from '../components/HomeIntro'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import IEEE from "../components/IEEE";
import IEEEH from '../components/IEEEH';
export default function Home() {

  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
   const handleScroll = () => {
    const scrollTop = window.scrollY
    const navElement = document.getElementById('animateNav')

    if(navElement) {
      const offSetTop = navElement.getBoundingClientRect().top + scrollTop
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
        transition={{duration: 0.6, ease: 'easeInOut'}}
        className="sticky top-0">

        <Navbar />

      </motion.div>

      <IEEE />
      <IEEEH/>

      <div className="h-[40vh]"></div>

    </div>
  )
}
