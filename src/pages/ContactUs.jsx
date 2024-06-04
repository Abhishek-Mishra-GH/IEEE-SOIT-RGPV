import React, { useState, useMemo, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// all details of the operating members are stored in the array of objects. The details are then mapped to the respective components.

const operaatingMembers = [
  {
    name: "Ananya Mishra",
    email: "Chairieeergpv@gmail.com",
    designation: "Chairperson",
    icon: "../src/assets/Images/01.jpg",
  },
  {
    name: "Vedeka Gupta",
    email: "Vicechairpersonieeergpv@gmail.com",
    designation: "Vice Chairperson",
    icon: "./src/assets/Images/02.jpg",
  },
  {
    name: "Rudresh Bharadwaj",
    email: "Ieeesecretary05@gmail.com",
    designation: "Secretary",
    icon: "./src/assets/Images/04.jpg",
  },
  {
    name: "Parth Parik",
    email: "Ieeergpvtreasurer@gmail.com",
    designation: "Treasurer",
    icon: "./src/assets/Images/03.png",
  },
];
const ContactUs = () => {
  const [send, setSend] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {},
      background: {
        color: "#000000",
      },
      fullScreen: {
        enable: true,
        zIndex: 1,
      },
      style: {
        position: "absolute",
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        number: {
          value: 80,
        },
        opacity: {
          value: { min: 0.3, max: 1 },
          random: true,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
        move: {
          direction: "right",
          enable: true,
          speed: { min: 3, max: 5 },
          straight: true,
        },
      },
      detectRetina: true,
    }),
    []
  );

  function executivemap(member) {
    return (
      <>
        <div className="grid justify-items-center border-stone-950 rounded-xl p-4 border-2 hover:shadow-2xl">
          <img src={member.icon} alt="Image" className="h-64 rounded-md hover:scale-110 ease-in-out duration-300 text-primary-background"/>
          <h1 className="text-2xl mt-3 mb-3">{member.name} </h1>
          <p className="text-lg mb-3">{member.designation}</p>
          <Link to="mailto:{member.email}" className="text-sm">{member.email}</Link>
          
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <div>
          <div className="w-full">
            <div className="h-40 p-6 mb-8 mt-0 relative">
              <Particles options={options} />
            </div>
          </div>
          <div className="font-semibold text-white xl:top-[21%] top-[15%] md:top-[9%]  grid items-center justify-center w-full text-5xl md:text-7xl  absolute">
            <h1>CONTACT US</h1>
          </div>
        </div>

        {/* please add these class in above div after adding navbar   (xl:top-[12%] top-[10%] md:top-[5%]) */}
        {/* Committee Members Contact Details */}

        <div>
          <div className="grid justify-items-center font-semibold text-xl mt-11 mb-11">
            <h1 className="text-3xl">OPERATION HEADS</h1>
            <div>
              <div className="justify-items-center mt-16 mb-10 flex flex-row gap-x-8 flex-wrap justify-around gap-4">
                {operaatingMembers.map(executivemap)}
              </div>
            </div>
          </div>
        </div>

        {/* contact us form  */}

        <div className="grid justify-items-center mb-6">
          <div className=" grid justify-items-center font-sans font-semibold">
            <h1 className="text-3xl">Get in touch</h1>
            <p className="text-base">
              {" "}
              Use the form below to quickly send us a message.
            </p>
          </div>
          <div className="grid mt-5 pt-5">
            <div
              className="flex-col justify-center"
              style={{ display: send ? "none" : "block" }}
            >
              <form aria-label="Contact Form">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    className="pl-3 mt-2 mb-6 rounded-md p-3 w-64 md:w-96 border-solid border-2 border-zinc-400  drop-shadow-md hover:shadow-2xl"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm ">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    className="pl-3 mt-2 mb-6 rounded-md p-3 w-64 md:w-96 border-solid border-2 border-zinc-400  drop-shadow-md hover:shadow-2xl"
                    id="email"
                    placeholder="Enter E-mail"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="text" className="text-sm">
                    MESSAGE *
                  </label>
                  <textarea
                    className="pl-3 mt-2 mb-6 rounded-md p-3 w-64 md:w-96 border-solid border-2 border-zinc-400   drop-shadow-md hover:shadow-2xl"
                    id="text"
                    placeholder="Your message for us"
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    className="rounded-md border-solid border-2 border-zinc-500 pl-2 pr-2 bg-primary-background text-white w-28 text-lg hover:shadow-2xl"
                    type="submit"
                    onClick={() => setSend(true)}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div
              className="mt-0 bg-primary-background p-4 rounded-md w-96 text-white flex justify-around"
              style={{ display: send ? "block" : "none" }}
            >
              <div className="grid justify-items-end">
                <button
                  className="font-semibold grid "
                  onClick={() => setSend(false)}
                >
                  close
                </button>
              </div>
              <br />
              <div className="flex justify-center  pb-5 text-2xl">
                Thanks for Contacting us ! <br /> We will be right back to you !
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
