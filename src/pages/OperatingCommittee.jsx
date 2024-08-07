import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import Navbar from "../components/Navbar";

import Ananya from '../assets/ieee_team/ananya.jpg'
import Vedeka from '../assets/ieee_team/vedeka.jpg'
import Rudresh from '../assets/ieee_team/rudresh.jpg'
import Parth from '../assets/ieee_team/parth.jpg'
import Dhruv from '../assets/ieee_team/dhruv.jpg'
import Nandini from '../assets/ieee_team/nandini.jpg'
import Suryansh from '../assets/ieee_team/suryansh.jpg'
import Bharat from '../assets/ieee_team/bharat.jpg'
import priyanshu from '../assets/ieee_team/priyanshu.jpg'
import aniruddh from '../assets/ieee_team/aniruddh.jpg'
import vinay from '../assets/ieee_team/vinay.jpg'
import lakshya from '../assets/ieee_team/lakshya.jpg'
import ankita from '../assets/ieee_team/ankita.jpg'
import shivam from '../assets/ieee_team/shivam.jpg'


export default function OperatingCommittee() {

    const councilMembers = [{
        name: "Ananya Mishra",
        position: "chairperson",
        email: "ananya180604@gmail.com",
        linkedin: "https://www.linkedin.com/in/ananya-mishra-228a69260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        imgPath: Ananya
    },
    {
        name: "Vedeka Gupta",
        position: "Vice-Chairperson",
        email: "vedekagupta@gmail.com",
        linkedin: "#",
        imgPath: Vedeka
    },
    {
        name: "Rudresh Bharadwaj",
        position: "Secretary",
        email: "bharadwajrudresh@gmail.com",
        linkedin: "#",
        imgPath: Rudresh
    },
    {
        name: "Parth Parik",
        position: "Treasurer",
        email: "parthparik619@gmail.com",
        linkedin: "#",
        imgPath: Parth
    }
    ];

    const operationsHead = [
        {
            name: "Dhruv Jain",
            position: "finance coordinator",
            email: "dhruv.jain1615@gmail.com",
            linkedin: "#",
            imgPath: Dhruv
        },
        {
            name: "Nandini Tiwari",
            position: "client relations head",
            email: "nandinitiwari2209@gmail.com",
            linkedin: "#",
            imgPath: Nandini
        },
        {
            name: "Suryansh Dubey",
            position: "Tech Master",
            email: "dubeysuryansh1603@gmail.com",
            linkedin: "#",
            imgPath: Suryansh
        },
        {
            name: "Bharat Bhushan Mishra",
            position: "Web Master",
            email: "bharatbhushanmishra777@gmail.com",
            linkedin: "#",
            imgPath: Bharat
        },
        {
            name: "Priyanshu Dubey",
            position: "event head",
            email: "pridub123@gmail.com",
            linkedin: "#",
            imgPath: priyanshu
        },
        {
            name: "Aniruddh Gupta",
            position: "Operations Head",
            email: "aniruddhgupta148@gmail.com",
            linkedin: "#",
            imgPath: aniruddh
        },
        {
            name: "Vinay Jain",
            position: "Graphic Head",
            email: "vinayjain0410@gmail.com",
            linkedin: "#",
            imgPath: vinay
        },
        {
            name: "Lakshya Jain",
            position: "graphic coordinator",
            email: "lakshyajain459@gmail.com",
            linkedin: "#",
            imgPath: lakshya
        },
        {
            name: "Ankita Tiwari",
            position: "client relations coordinator",
            email: "ankitatiwari40347@gmail.com",
            linkedin: "#",
            imgPath: ankita
        },
        {
            name: "Shivam Upadhyay",
            position: "Event Coordinator",
            email: "shivamupadhyay20271@gmail.com",
            linkedin: "#",
            imgPath: shivam
        }
    ]

    const MemberCard = ({ name, position, email, linkedin, imgPath }) => {
        return <div className="max-w-sm border-red-600 flex flex-col items-center gap-1 p-4 hover:shadow-2xl rounded-lg min-w-72">
            <img className="h-28 m-1 w-28 border rounded-full" src={imgPath} alt={name} />
            <h3 className="text-xl font-medium">{name}</h3>
            <h4 className="">{(position + "").toUpperCase()}</h4>
            <div className="flex gap-8">
                <a href={`mailto:${email}`}> 
                <div className="flex items-center">
                <MdOutlineEmail className="text-xl" /> {" " + email}
                </div> 
                </a>
            </div>
        </div>
    }

    return (
        <>
            <Navbar />
            <div>
                {/* Council members */}
                <div>
                    <h1 className="text-4xl text-center font-semibold px-6 py-8">EXECUTIVE COMMITTEE</h1>
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 justify-items-center">
                            {councilMembers.map((member, index) => <MemberCard key={index} {...member} />)}
                        </div>
                    </div>
                </div>

                {/* Operations head */}
                <div>
                    <h1 className="text-4xl text-center font-semibold pt-10 pb-8 px-6">OPERATING COMMITTEE</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
                        {operationsHead.map((member, index) => <MemberCard key={index} {...member} />)}
                    </div>
                </div>
            </div>
        </>
    )
}
