import { IoMdPerson } from "react-icons/io";
import GetInTouch from "../components/GetInTouch";
import { IconContext } from "react-icons";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Particle from "../components/particle";

import Ananya from "../assets/ieee_team/ananya.jpg";
import Vedeka from "../assets/ieee_team/vedeka.jpg";
import Rudresh from "../assets/ieee_team/rudresh.jpg";
import Parth from "../assets/ieee_team/parth.jpg";

// all details of the operating members are stored in the array of objects. The details are then mapped to the respective components.

const operaatingMembers = [
  {
    name: "Ananya Mishra",
    email: "chairieeergpv@gmail.com",
    designation: "Chairperson",
    icon: Ananya,
  },
  {
    name: "Vedeka Gupta",
    email: "vicechairpersonieeergpv@gmail.com",
    designation: "Vice Chairperson",
    icon:  Vedeka,
  },
  {
    name: "Rudresh Bharadwaj",
    email: "ieeesecretary05@gmail.com",
    designation: "Secretary",
    icon: Rudresh,
  },
  {
    name: "Parth Parik",
    email: "ieeergpvtreasurer@gmail.com",
    designation: "Treasurer",
    icon: Parth,
  },
];
const ContactUs = () => {
  function executivemap(member) {
    return (
      <>
        <div className="grid justify-items-center border-stone-950 rounded-xl p-4 border-0 hover:shadow-2xl w-72 ">
          {/* <IconContext.Provider value={{ color: "#2f699e", size: "4em" }}>
            <div>{<IoMdPerson />}</div>
          </IconContext.Provider> */}
          <div>
            <img
              src={member.icon}
              alt="member"
              className="rounded-full h-32 w-32 object-cover"
            />
          </div>

          <h1 className="text-2xl mt-3 mb-3">{member.name} </h1>
          <p className="text-lg mb-3">{member.designation}</p>
          <Link
            to={`mailto:${member.email}`}
            className="text-sm  underline-offset-8"
          >
            {member.email}
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        {/* <h1 className="text-5xl text-center my-8 font-semibold">
                CONTACT US
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-52 border-b-4 border-black"></div>
        </h1> */}
        
      
        {/* Committee Members Contact Details */}

        <div>
          <div className="grid justify-items-center font-semibold text-xl mt-5 mb-4">
            <h1 className="text-3xl font-semibold mt-2">CONTACT US</h1>
            <div>
              <div className="m-10 grid grid-cols-1 sm:grid-cols-4">
                {operaatingMembers.map(executivemap)}
              </div>
            </div>
          </div>
        </div>

        {/* contact us form  */}
        <GetInTouch />
      </div>
    </>
  );
};

export default ContactUs;
