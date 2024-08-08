import React from 'react';
import logo from '../assets/logo.svg';
import { MdContacts } from "react-icons/md"
import { FaHome } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";


function Footer() {


  return (
    <footer>
      <div className="bg-primary-background text-white gap-4 py-4 md:py-8 px-32 flex flex-col items-center md:flex-row md:justify-between md:items-start md:gap-16">

        {/*first section*/}

        <div className="text-md flex flex-col md:items-start gap-6 max-w-fit md:mt-5">
          <Link to="/" className='mx-auto'> 
          <img src={logo} alt="ieee img" />
          </Link>

          <div>
            <p className="text-nowrap"> IEEE is the world's largest technical </p>
            <p className="text-nowrap"> professional organization dedicate </p>
            <p className="text-nowrap">to advancing technology for the </p>
            <p> benefit of humanity</p>
          </div>

          <a href="mailto:ieeesoit@gmail.com">
            <p className="flex gap-1 items-center  justify-center"> <IoMdMail /> ieeesoit@gmail.com</p>
          </a>

        </div>



        {/*second section*/}
        <div className="max-w-fit text-white relative top-2 p-2 flex flex-col items-center md:items-start">
          <h2 className="p-1 flex justify-center font-bold underline">INFORMATION</h2>
          <div className="flex flex-col items-start max-w-fit">
          <Link to="/" className="p-1 flex justify-center gap-1 items-center hover:text-primary-foreground"> < FaHome /> Home </Link>
          <a className="p-1 flex justify-center gap-1 items-center hover:cursor-pointer hover:text-primary-foreground"> < HiMiniQuestionMarkCircle /> About us</a>
          <Link to="/events" className="p-1 flex justify-center gap-1 items-center hover:text-primary-foreground"> < SlCalender /> Events</Link>
          <Link to="/gallery" className="p-1 flex justify-center gap-1 items-center hover:text-primary-foreground"> < GrGallery /> Gallery</Link>
          </div>
        </div>


        {/*third section*/}
        <div className=" text-white relative top-2  p-2 flex flex-col items-center md:items-start">
          <h2 className="flex justify-center font-bold underline md:truncate">OTHER LINKS</h2>
          <Link to="/contactus" className="p-1 flex justify-center gap-0.5 items-center md:truncate hover:text-primary-foreground"> < MdContacts /> Contact Us</Link>
          <a href="https://maps.app.goo.gl/fDCu3Efb7Gb9FmCx8" className="p-1 flex justify-center gap-1 items-center md:truncate hover:text-primary-foreground">
              < FaMapMarkerAlt /> Our Location
          </a>
        </div>


        {/*FOURTH SECTION */}
        <div className="   text-white p-2 relative top-2 ">
          <h2 className=" flex justify-center font-bold underline">FOLLOW US</h2>
          <p className="flex justify-center gap-2 items-center p-3">
            <a href="https://www.linkedin.com/in/ieee-student-chapter-rgpv-335448307/">
              < FaLinkedin className="text-2xl hover:text-primary-foreground"/>
            </a>
            <a href="https://x.com/IEEERGPVSoIT?t=aDTDxhq4OouwTLfkE-Mumw&s=35">
              <BsTwitterX className="text-2xl hover:text-primary-foreground"/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61560810020758">
            < FaFacebook className="text-2xl hover:text-primary-foreground" />
            </a>
            <a href="https://www.instagram.com/ieeesoitrgpv?utm_source=qr&igsh=a2hyaW1iM2d2ZGZo">
              < FaInstagramSquare className="text-2xl hover:text-primary-foreground" />
            </a>
          </p>
        </div>
      </div>

      <div className="w-full h-0.5 bg-gray-300"> </div>

      {/* Fifth Section */}
      <div className='bg-blue-950 flex flex-col items-center md:flex-row md:justify-between p-4 md:py-2 md:px-6 text-white'>
        <div className="text-xs md:text-base my-2 md:my-0">
          <p> © Copyright 2024 IEEE RGPV - All rights reserved.</p>
        </div>
        <div className="flex flex-col items-center gap-2 md:flex-row"> 
          <a href="https://www.ieee.org/about/help/site-terms-conditions.html" className="mx-4 hover:cursor-pointer hover:text-primary-foreground">Terms & Conditions</a>
          <a href="https://www.ieee.org/security-privacy.html" className="mx-4 hover:cursor-pointer hover:text-primary-foreground">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
