import React from 'react';
import logo from '../assets/logo.svg';
import { MdContacts } from "react-icons/md"
import { FaHome } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";



function Footer() {
  

  return (
    <>
    <div class=" bg-blue-950 text-white md:flex gap-16">
    
   {/*first section*/}
    <div class = " text-center text-white relative top-2 p-2 flex flex-col items-center">
    <img class= " text-center text-white flex justify-center" src={ logo } alt = "ieee img" />
    <p class = " text-white p-4 flex justify-center md:text-center "> IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity</p>
<a href = " ieeesoit@gmail.com">
    <p class = "flex gap-0.5 items-center  justify-center">
     < IoMdMail />ieeesoit@gmail.com
    
    </p>
    </a>
    </div>
    
    
    {/*second section*/}
    <div class = " text-white relative top-2 p-2 ">
    <h2 class = "p-1 flex justify-center font-bold underline">INFORMATION</h2>
   <p class = "p-1 flex justify-center gap-0.5 items-center"> < FaHome /> Home </p>
   <p class = "p-1 flex justify-center gap-0.5 items-center"> < HiMiniQuestionMarkCircle /> About us</p>
   <p class = "p-1 flex justify-center gap-0.5 items-center"> < SlCalender/> Events</p>
   <p class = "p-1 flex justify-center gap-0.5 items-center"> < GrGallery /> Gallery</p>
    </div>
    
    
    {/*third section*/}
    <div class = " text-white relative top-2  p-2 ">
<h2 class = "flex justify-center font-bold underline md:truncate">OTHER LINKS</h2>
<p class = "p-1 flex justify-center gap-0.5 items-center md:truncate"> < MdContacts /> Contact Us</p>
    </div>
    
    
    {/*FOURTH SECTION */}
<div class = "   text-white p-2 relative top-2 ">
<h2 class = " flex justify-center font-bold underline">FOLLOW US</h2>
<p class = "flex justify-center gap-2 items-center p-3">
<a href ="https://www.linkedin.com/in/ieee-student-chapter-rgpv-335448307/">
< FaLinkedin />
</a>
<a href = "https://x.com/IEEERGPVSoIT?t=aDTDxhq4OouwTLfkE-Mumw&s=35">
< FaTwitterSquare />
 </a>
< FaFacebook /> 
<a href = "https://www.instagram.com/ieeesoitrgpv?utm_source=qr&igsh=a2hyaW1iM2d2ZGZo">
< FaInstagramSquare />
</a>
</p>
    </div>
    </div>
    
    {/* Fifth Section */}
    <div class ="w-full h-1 bg-white"> </div>
  <div class =" py-1 bg-blue-950 text-white text-xs text-center md:flex gap-36 justify-center">
  <p>CopyRight©2023</p>
  <p>All Rights are Reserved</p>
  <p>Terms & Conditions</p>
  <p>Privacy Policy</p>
    </div>
   </>
  )
}

export default Footer
