import clsx from "clsx";
import React, { useState } from 'react';
import teamImg from "../assets/team.png";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Popup = ({isOpen, setIsOpen}) => {

  const [closed, setClosed] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={clsx(closed && "hidden",!isOpen && "hidden", isOpen && "flex items-center justify-center min-h-screen")}>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">

          {/* content */}
          <div className="bg-primary-background rounded px-6 py-4 shadow-lg max-w-sm w-full">

            {/* close button */}
            <div onClick={() => {
              setClosed(true);
              window.scrollTo(0, window.innerHeight);
              togglePopup();
            }} className="w-full flex justify-end text-white text-4xl hover:cursor-pointer hover:text-primary-foreground">
             <IoCloseSharp/>
          </div>

            <div className="flex flex-col gap-4">
              {/* banner */}
              <div className="bg-primary-background flex flex-col justify-evenly items-center rounded p-2">
                <div className=" flex justify-center items-center my-2">
                  <img className="h-28 w-28" src={teamImg} alt="" />
                </div>
                <div>
                <h1 className="text-2xl font-bold text-white">
                IEEE Startup Tech
                </h1>
                <h1 className="text-2xl font-bold text-white">
                Pitch Competition
                </h1>
                </div>
              </div>

              {/* register */}
              <button 
                onClick={() => {
                  navigate("/eventregistration");
                }}
                className="w-full py-4 mt-4 font-semibold text-lg text-white border-2 border-white bg-primary-background rounded hover:text-primary-foreground hover:border-primary-foreground">
                  Register Now!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
