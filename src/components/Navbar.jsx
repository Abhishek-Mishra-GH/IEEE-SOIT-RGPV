import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import clsx from 'clsx'
import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg";
import { motion } from 'framer-motion'

function CustomNavLink({ children, to, className="" }) {
  return (
    <NavLink to={to} className={clsx(className, window.location.pathname == to && "text-primary-foreground border-primary-foreground", "hover:cursor-pointer hover:text-primary-foreground")}> { children } </NavLink>
  )
}

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav id='nav' className="sticky top-0 h-20 bg-primary-background w-full z-30 shadow-sm flex justify-between items-center px-4">
      {/* left nav */}
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="h-12" />
          </Link>
        </div>

      {/* middle nav */}
      <div className="hidden h-full sm:flex gap-12 text-lg items-center text-white">
        <CustomNavLink to="/"> Home </CustomNavLink>
        <CustomNavLink to="/committee"> Committee </CustomNavLink>
        <CustomNavLink to="/event"> Event </CustomNavLink>
        <CustomNavLink to="/gallery"> Gallery </CustomNavLink>

        <CustomNavLink to="/contactus" className="border px-4 py-1 rounded-full hover:border-primary-foreground">Contact Us</CustomNavLink>
      </div>

      {/* right nav */}
      {/* <div className="hidden h-full sm:flex text-lg items-center text-white">
        
      </div> */}

      {/* mobile menu */}
      <div
        onClick={() => setIsMenuOpen(true)}
        className={clsx("sm:hidden hover:cursor-pointer", isMenuOpen ? "hidden" : "inline-block")}>
        
        <GiHamburgerMenu className="text-white text-3xl hover:text-primary-foreground" />
      </div>

      <div className={clsx("sm:hidden hover:cursor-pointer", isMenuOpen ? "inline-block" : "hidden")}>
        <CgClose onClick={() => setIsMenuOpen(false)} className='text-white text-3xl hover:text-primary-foreground'  />
      </div>

      <motion.div 
        initial={{ height: 0}}
        animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="sm:hidden flex gap-4 text-lg text-white absolute top-24 right-4 flex-col bg-primary-background shadow-lg rounded-lg px-6 py-6">

          <CustomNavLink to="/"> Home </CustomNavLink>
          <CustomNavLink to="/committee"> Committee </CustomNavLink>
          <CustomNavLink to="/event"> Event </CustomNavLink>
          <CustomNavLink to="/gallery"> Gallery </CustomNavLink>

          <div className='mt-6'>
          <CustomNavLink to="/contactus" className="border px-4 py-1 rounded-full hover:border-primary-foreground">Contact Us</CustomNavLink>
          </div>
      </motion.div>
      

    </nav>
  )
}

export default Navbar
