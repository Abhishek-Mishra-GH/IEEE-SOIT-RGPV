import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import clsx from 'clsx'
import { GiHamburgerMenu } from "react-icons/gi";

function CustomNavLink({ children, to, className="" }) {
  return (
    <NavLink to={to} className={clsx(className, window.location.pathname == to && "text-primary-foreground border-primary-foreground", "hover:cursor-pointer hover:text-primary-foreground")}> { children } </NavLink>
  )
}

function Navbar() {
  return (
    <nav id='nav' className="sticky top-0 h-20 bg-primary-background w-full z-30 shadow-sm flex justify-between items-center px-4">
      {/* left nav */}
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="h-12" />
          </Link>
        </div>

      {/* middle nav */}
      <div className="hidden h-full sm:flex gap-8 text-lg items-center text-white">
        <CustomNavLink to="/"> Home </CustomNavLink>
        <CustomNavLink to="/committee"> Committee </CustomNavLink>
        <CustomNavLink to="/event"> Event </CustomNavLink>
        <CustomNavLink to="/gallery"> Gallery </CustomNavLink>
      </div>

      {/* right nav */}
      <div className="hidden h-full sm:flex text-lg items-center text-white">
        <CustomNavLink to="/contactus" className="border px-4 py-1 rounded-full hover:border-primary-foreground">Contact Us</CustomNavLink>
      </div>

      {/* mobile menu */}
      <div className="sm:hidden">
        <GiHamburgerMenu className="text-white text-3xl " />
      </div>

    </nav>
  )
}

export default Navbar