import React from 'react'
import Navbar from "../components/Navbar"
import Pramanya from '../assets/ieee_team/Pramanya Rajput.jpg';
import Oorja from '../assets/ieee_team/Oorja Jain.jpg';
import Anchal from '../assets/ieee_team/Anchal Thakur.jpg';
import Sumit from '../assets/ieee_team/Sumit Singh Raghuvanshi.jpg';


const members = [
  { name: 'Pramanya Rajput', linkedin: 'https://www.linkedin.com/in/pramanya-rajput', imgPath: Pramanya },
  { name: 'Oorja Jain', linkedin: 'https://www.linkedin.com/in/oorja-jain-680693274', imgPath: Oorja},
  { name: 'Anchal Thakur', linkedin: 'https://www.linkedin.com/in/anchal-thakur-a69102249', imgPath: Anchal},
  { name: 'Sumit Singh Raghuvanshi', linkedin: 'https://www.linkedin.com/in/oorja-jain-680693274', imgPath: Sumit},
];

export default function Blog() {
  return (
    <>
    <Navbar />
   <div className="container mx-auto p-4">
      <h1 className="flex items-center justify-center text-2xl font-bold mb-4">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col justify-center bg-white p-4 hover:shadow-md ">
            <img src={member.imgPath} alt={member.name} className="relative left-6 z-0 object-cover h-28 m-1 w-28 border rounded-full" />
            <div className="p-4">
              <h2 className="flex items-center justify-center text-xl font-semibold">{member.name}</h2>
              <a href={member.linkedin} className="flex items-center justify-center text-blue-500" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
