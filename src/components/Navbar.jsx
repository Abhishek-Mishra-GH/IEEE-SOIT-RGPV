import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import logo.png from '../assets/logo.png'
import logo from '../assets/logo.svg'

function Navbar() {
  return (
    <nav className="sticky top-0 h-20 bg-primary-background w-full z-10 shadow-sm flex justify-between items-center px-4">
      {/* left nav */}
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="h-10" />
          </Link>
        </div>

      {/* right nav */}
      <div className="hidden sm:flex gap-4 text-lg items-center text-primary-foregrund">
        <NavLink to="/" className="mx-2">Home</NavLink>
        <NavLink to="/about" className="mx-2">About</NavLink>
        <NavLink to="/event" className="mx-2">Event</NavLink>
        <NavLink to="/gallery" className="mx-2">Gallery</NavLink>
        <NavLink to="/committee" className="mx-2">Committee</NavLink>

        <NavLink to="/contactus" className="border px-4 py-1 rounded-full hover:bg-[#0f213a]">Contact Us</NavLink>
      </div>
    </nav>
  )
}

export default Navbar