import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import clsx from 'clsx'

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

      {/* right nav */}
      <div className="hidden h-full sm:flex gap-4 text-lg items-center text-white">
        <CustomNavLink to="/"> Home </CustomNavLink>
        <CustomNavLink to="/committee"> Committee </CustomNavLink>
        <CustomNavLink to="/event"> Event </CustomNavLink>
        <CustomNavLink to="/gallery"> Gallery </CustomNavLink>

        <CustomNavLink to="/contactus" className="border px-4 py-1 rounded-full hover:border-primary-foreground">Contact Us</CustomNavLink>
      </div>
    </nav>
  )
}

export default Navbar