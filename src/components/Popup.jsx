import clsx from "clsx";
import React, { useState } from 'react';
import EventImg from "../assets/eventsPopup/event.png";
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

          {/* content */}
          <div className="bg-[#1c1000] p-1 relative rounded shadow-lg max-w-sm sm:max-w-md w-full">

            {/* close button */}
            <div onClick={() => {
              setClosed(true);
              window.scrollTo(0, window.innerHeight);
              togglePopup();
            }} className="inline-block absolute top-1 right-1 text-white text-4xl hover:cursor-pointer hover:text-primary-foreground">
             <IoCloseSharp/>
          </div>

            <div className="flex flex-col gap-2">
              {/* banner */}
              <div className="bg-primary-background flex flex-col justify-evenly items-center rounded">
                <div className=" flex justify-center items-center">
                  <img src={EventImg} alt="event" className="w-full h-full"/>
                </div>
              </div>

              {/* register */}
              <button 
                onClick={() => {
                  navigate("/eventregistration");
                }}
                className="w-full py-4 mt-3 font-semibold text-lg text-white border-2 border-white bg-[#1c1000] rounded hover:text-primary-foreground hover:border-primary-foreground">
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
