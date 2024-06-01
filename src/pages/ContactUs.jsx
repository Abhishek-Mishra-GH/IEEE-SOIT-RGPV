import React, { useState, useMemo, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons";



// all details of the executive and operating members are stored in the array of objects. The details are then mapped to the respective components.


const executiveMembers = [
  {
    name: "Dr. R. K. Singh",
    email: "test123@gmail.com",
    designation: "President",
    icon: <CgProfile />,
  },
  {
    name: "Dr. R. K. Singh",
    email: "test123@gmail.com",
    designation: "President",
    icon: <CgProfile />,
  },
  {
    name: "Dr. R. K. Singh",
    email: "test123@gmail.com",
    designation: "President",
    icon: <CgProfile />,
  },
  {
    name: "Dr. R. K. Singh",
    email: "test123@gmail.com",
    designation: "President",
    icon: <CgProfile />,
  },
];

const operaatingMembers =[{
  name: "Dr. R. K. Singh",
  email: "test123@gmail.com",
  designation: "President",
  icon: <CgProfile />,
},
{
  name: "Dr. R. K. Singh",
  email: "test123@gmail.com",
  designation: "President",
  icon: <CgProfile />,
},
{
  name: "Dr. R. K. Singh",
  email: "test123@gmail.com",
  designation: "President",
  icon: <CgProfile />,
},
{
  name: "Dr. R. K. Singh",
  email: "test123@gmail.com",
  designation: "President",
  icon: <CgProfile />,
},

]
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
        <div className="grid justify-items-center border-slate-200 rounded-xl p-4 border-4">
          <IconContext.Provider value={{ color: "rgb(0 34 80)", size: "4em" }}>
            <div>{member.icon}</div>
          </IconContext.Provider>
          <h1 className="text-2xl mt-3">{member.designation}</h1>
          <p className="text-lg">{member.name} </p>
          <p className="text-lg">{member.email} </p>
        </div>
      </>
    );
  }



  return (
    <>
      <div className="flex flex-col">
        <div>
          <div className="w-full">
            <div className="h-40 p-6 mb-8 mt-0 relative">
              <Particles options={options} />
            </div>
          </div>
          <div className="font-semibold text-white xl:top-[21%] top-[15%] md:top-[9%] grid items-center justify-center w-full text-5xl md:text-7xl  absolute">
            <h1>CONTACT US</h1>
          </div>
        </div>

        {/* Committee Members Contact Details */}

        <div>
          <div className="grid justify-items-center font-semibold text-xl">
            <h1 className="text-3xl">EXECUTIVE COMMITTEE</h1>
            <div>
              <div className="justify-items-center mt-16 mb-10 flex flex-row gap-x-8 flex-wrap justify-around gap-4">
                {executiveMembers.map(executivemap)}
              </div>
            </div>
          </div>

          <div className="grid justify-items-center font-semibold text-xl mt-11 mb-11">
            <h1 className="text-3xl">OPERATING COMMITTEE</h1>
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
                    className="pl-3 mt-2 mb-6 rounded-md p-3 w-64 md:w-96 border-solid border-2 border-zinc-400  drop-shadow-md"
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
                    className="pl-3 mt-2 mb-6 rounded-md p-3 w-64 md:w-96 border-solid border-2 border-zinc-400  drop-shadow-md"
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
                    className="pl-3 mt-2 mb-6 rounded-md p-3 w-64 md:w-96 border-solid border-2 border-zinc-400   drop-shadow-md"
                    id="text"
                    placeholder="Your message for us"
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    className="rounded-md border-solid border-2 border-zinc-500 pl-2 pr-2 bg-primary-background text-primary-foregrund w-28 text-lg"
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
