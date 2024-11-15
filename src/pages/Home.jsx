import React, { useEffect, useState } from 'react'
import HomeIntro from '../components/HomeIntro'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import IEEE from "../components/IEEE";
import IEEEH from '../components/IEEEH';
import ContactForm from "../components/ContactForm";
import IEEEBenifit from '../components/IEEEBenifit';
import GetInTouch from "../components/GetInTouch";
import Popup from "../components/Popup";

export default function Home() {

  const [isAtTop, setIsAtTop] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const navElement = document.getElementById('animateNav')

      if (navElement) {
        const offSetTop = navElement.getBoundingClientRect().top + scrollTop
        if (scrollTop >= offSetTop) {
          setIsAtTop(true)
          setIsPopupOpen(true);
        } else {
          setIsAtTop(false)
          setIsPopupOpen(false);
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
        <HomeIntro />
      </div>
      <motion.div
        id='animateNav'
        initial={{ opacity: 0 }}
        animate={{ opacity: isAtTop ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="sticky top-0 z-[9999] bg-primary-background">

        <Navbar />

      </motion.div>

      {/* <Popup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} /> */}
      <IEEE />
      <IEEEH />
      <IEEEBenifit />
      <GetInTouch />

    </div>
  )
}
