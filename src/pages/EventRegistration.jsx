import React, { useState } from 'react'
import axios from "axios";

const Input = ({ label, type, id }) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input
            required={true}
            type={type} 
            id={id}
            className="w-full p-2 border-2 border-gray-300 rounded-md outline-none focus:border-black"
         />
      </div>
    )
  }

export default function EventRegistration() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {

    try {
        const teamName = document.getElementById("teamName").value;
    const teamLeader = document.getElementById("teamLeader").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const collegeName = document.getElementById("collegeName").value;
    const branch = document.getElementById("branch").value;
    const year = document.querySelector('input[name="year"]:checked').value;
    const startupIdea = document.getElementById("startupIdea").value;
    const mediumOfReach = document.querySelector('input[name="mediumOfReach"]:checked').value;
    } catch (err) {
        setError("Please fill the form properly.");
    }

    const teamData = {
        teamName,
        teamLeader,
        email,
        contact,
        collegeName,
        branch,
        year,
        startupIdea,
        mediumOfReach,
        teamMembers
    }

    axios.post("https://ieee.abhishekcodes.tech/api/teams", {
        ...teamData
      }, {
        headers: {
            "Content-Type": "application/json"
        }
      }).then((resp) => {
        console.log(resp.data);
      }).catch((err) => {
        setError("Error occured. please fill the form properly.");
      })

}

  return (
    <div className="flex">
        {/* left */}
      <div className="sm:w-[40vw]"></div>

      {/* right */}
      <div className="border flex-1 p-6 sm:p-12 sm:pt-6">
        <h3 className="text-2xl font-bold text-center mb-6">REGISTER HERE</h3>

        {/* registration form */}
        <div className="flex flex-col gap-4 sm:m-4">
            {/* Name, Leader */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Team Name" type="text" id="teamName" />
            <Input label="Team Leader" type="text" id="teamLeader" />
            </div>
            
            {/* Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Email" type="email" id="email" />
            <div>
                <label htmlFor="contact">{"Contact"}</label>
                <br />
                <div className="flex">
                    <div className="flex justify-center items-center p-2 border-2 border-gray-300 rounded-l-md border-r-0">+91</div>
                    <input 
                        type="text"
                        id="contact"
                        className="w-full p-2 border-2 border-gray-300 rounded-r-md outline-none focus:border-black"
                     />
                </div>
                
            </div>
            </div>

            {/* college */}
            <div className="grid grid-cols-1 gap-4">
                <Input label="College" type="text" id="collegeName" />
            </div>

            {/* Branch */}
            <div className="grid grid-cols-1 gap-4">
                <Input label="Branch" type="text" id="branch" />
            </div>

            {/* Year */}
            <div className="grid grid-cols-1">
                <label>Year</label>
                <div className="pl-4 pt-1 flex flex-col gap-1">
                <div className="flex gap-2">
                    <input type="radio" name="year" id="I" value={"I"} />
                    <label htmlFor="I">I</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" name="year" id="II" value={"II"} />
                    <label htmlFor="II">II</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" name="year" id="III" value={"III"} />
                    <label htmlFor="III">III</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" name="year" id="IV" value={"IV"} />
                    <label htmlFor="IV">IV</label>
                </div>
                </div>
            </div>

            {/* Startup */}
            <div className="grid grid-cols-1 gap-4">
                <Input label="Startup Idea" type="text" id="startupIdea" />
            </div>

            {/* Medium of reach */}
            <div className="grid grid-cols-1">
                <label>How did you get to know about us?</label>
                <div className="pl-4 pt-1 flex flex-col gap-1">
                <div className="flex gap-2">
                    <input type="radio" name="mediumOfReach" id="WhatsApp" value={"WhatsApp"} />
                    <label htmlFor="WhatsApp">WhatsApp</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" name="mediumOfReach" id="Instagram" value={"Instagram"} />
                    <label htmlFor="Instagram">Instagram</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" name="mediumOfReach" id="Friends" value={"Friends"} />
                    <label htmlFor="Friends">Friends</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" name="mediumOfReach" id="College" value={"College"} />
                    <label htmlFor="College">College</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" name="mediumOfReach" id="Faculty" value={"Faculty"} />
                    <label htmlFor="Faculty">Faculty</label>
                </div>
                </div>
            </div>

            {/* Team Members */}
            <div className="grid grid-cols-1">
                <label>Team Members</label>
                <ol className="pl-4 pt-2 pb-4">
                    {teamMembers.map((member, index) => (
                        <li key={index}> <span>{index+1}. </span> {member}</li>
                    ))}
                </ol>
                <div className="pl-4 flex gap-2">
                    <input 
                        type="text"
                        id="teamMember"
                        className="min-w-[60%]  p-2 border-2 border-gray-300 rounded-md outline-none focus:border-black" 
                    />
                    <button 
                        className="h-full bg-blue-600 text-white py-1 px-2 rounded"
                        onClick={(e) => {
                            e.preventDefault();
                            const memberElement = document.getElementById("teamMember");
                            if(memberElement.value === "") return;
                            setTeamMembers([...teamMembers, memberElement.value]);
                            memberElement.value = "";
                        }}
                    >
                        Add Member
                    </button>
                </div>
            </div>

            <div>
                {error && <p className="text-red-600 pl-4">*{error}</p>}
            </div>

            {/* Submit */}
            <div className="flex justify-normal p-4 items-center">
                <button 
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-12 hover:text-gray-100 text-lg rounded-md"
                    onClick={(e) => {
                        handleSubmit(e);
                    }}
                >
                    Register
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}