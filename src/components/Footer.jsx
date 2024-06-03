import React from 'react';
import logo from '../assets/logo.svg';
import { MdContacts } from "react-icons/md"
import { FaHome } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom';



function Footer() {


  return (
    <footer>
      <div className="bg-blue-950 text-white gap-4 py-4 md:py-8 px-32 flex flex-col items-center md:flex-row md:justify-between md:items-start md:gap-16">

        {/*first section*/}

        <div className="text-md flex flex-col md:items-start gap-6 max-w-fit md:mt-5">
          <Link to="/"> 
          <img class=" text-center text-white flex justify-center" src={logo} alt="ieee img" />
          </Link>

          <div>
            <p className="text-nowrap"> IEEE is the world's largest technical </p>
            <p className="text-nowrap"> professional organization dedicate </p>
            <p className="text-nowrap">to advancing technology for the </p>
            <p> benefit of humanity</p>
          </div>

          <a href=" ieeesoit@gmail.com">
            <p class="flex gap-1 items-center  justify-center"> <IoMdMail /> ieeesoit@gmail.com</p>
          </a>

        </div>



        {/*second section*/}
        <div class="max-w-fit text-white relative top-2 p-2 flex flex-col items-center md:items-start">
          <h2 class="p-1 flex justify-center font-bold underline">INFORMATION</h2>
          <div className="flex flex-col items-start max-w-fit">
          <Link to="/home" class="p-1 flex justify-center gap-1 items-center hover:text-primary-foreground"> < FaHome /> Home </Link>
          <a class="p-1 flex justify-center gap-1 items-center hover:cursor-pointer hover:text-primary-foreground"> < HiMiniQuestionMarkCircle /> About us</a>
          <Link to="/event" class="p-1 flex justify-center gap-1 items-center hover:text-primary-foreground"> < SlCalender /> Event</Link>
          <Link to="/gallery" class="p-1 flex justify-center gap-1 items-center hover:text-primary-foreground"> < GrGallery /> Gallery</Link>
          </div>
        </div>


        {/*third section*/}
        <div class=" text-white relative top-2  p-2 ">
          <h2 class="flex justify-center font-bold underline md:truncate">OTHER LINKS</h2>
          <Link to="/contactus" class="p-1 flex justify-center gap-0.5 items-center md:truncate hover:text-primary-foreground"> < MdContacts /> Contact Us</Link>
        </div>


        {/*FOURTH SECTION */}
        <div class="   text-white p-2 relative top-2 ">
          <h2 class=" flex justify-center font-bold underline">FOLLOW US</h2>
          <p class="flex justify-center gap-2 items-center p-3">
            <a href="https://www.linkedin.com/in/ieee-student-chapter-rgpv-335448307/">
              < FaLinkedin className="text-2xl hover:text-primary-foreground"/>
            </a>
            <a href="https://x.com/IEEERGPVSoIT?t=aDTDxhq4OouwTLfkE-Mumw&s=35">
              < FaTwitterSquare className="text-2xl hover:text-primary-foreground"/>
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

      {/* Fifth Section */}
      <div class="w-full h-1 bg-white"> </div>
      <div class=" py-2 bg-blue-950 text-white  text-center md:flex gap-36 justify-center">
        <p>CopyRight © 2024</p>
        <p>All Rights are Reserved</p>
        <a className="hover:cursor-pointer hover:text-primary-foreground">Terms & Conditions</a>
        <a className="hover:cursor-pointer hover:text-primary-foreground">Privacy Policy</a>
      </div>
    </footer>
  )
}

export default Footer
