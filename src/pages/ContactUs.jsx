import { IoMdPerson } from "react-icons/io";
import GetInTouch from "../components/GetInTouch";
import { IconContext } from "react-icons";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Particle from "../components/particle";

// all details of the operating members are stored in the array of objects. The details are then mapped to the respective components.

const operaatingMembers = [
  {
    name: "Ananya Mishra",
    email: "Chairieeergpv@gmail.com",
    designation: "Chairperson",
    icon: <IoMdPerson />,
  },
  {
    name: "Vedeka Gupta",
    email: "Vicechairpersonieeergpv@gmail.com",
    designation: "Vice Chairperson",
    icon: <IoMdPerson />,
  },
  {
    name: "Rudresh Bharadwaj",
    email: "Ieeesecretary05@gmail.com",
    designation: "Secretary",
    icon: <IoMdPerson />,
  },
  {
    name: "Parth Parik",
    email: "Ieeergpvtreasurer@gmail.com",
    designation: "Treasurer",
    icon: <IoMdPerson />,
  },
];
const ContactUs = () => {
  function executivemap(member) {
    return (
      <>
        <div className="grid justify-items-center border-stone-950 rounded-xl p-4 border-0 hover:shadow-2xl w-72 ">
          <IconContext.Provider value={{ color: "#2f699e", size: "4em" }}>
            <div>{<IoMdPerson />}</div>
          </IconContext.Provider>

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
        <Particle name="CONTACT US" />
        {/* Committee Members Contact Details */}

        <div>
          <div className="grid justify-items-center font-semibold text-xl mt-5 mb-4">
            <h1 className="text-3xl">OPERATION HEADS</h1>
            <div>
              <div className="justify-items-center mt-10 mb-10 flex flex-row gap-x-8 flex-wrap justify-around gap-6">
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
