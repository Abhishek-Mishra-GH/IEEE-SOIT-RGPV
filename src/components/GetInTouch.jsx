import React, { useState } from 'react';
import getInTouch from '../assets/getInTouch.jpg';
import ContactForm from "./ContactForm";


export default function GetInTouch() {
  const [send, setSend] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSend = () => {
    if(fullName === "" || email === "" || message === "") {
      setError("* Please fill all the fields");
      return;
    } else {
      setError("");
      setSend(true);
    }
  }

  return <div className="w-full md:px-12 py-8">
    <h1 className="text-4xl text-center mt-4">Get in touch</h1>
    <p className="text-base text-center mb-4">
      {" "}
      Use the form below to quickly send us a message.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 md:m-4">
      {/* Illustration */}
      <div className="hidden md:flex justify-center items-center max-w-[45vw]">
        <img src={getInTouch} alt="getInTouch" className="md:h-auto" />
      </div>
      {/*Form */}
      <div className="p-4 flex flex-col justify-center items-center">
        <div className="md:max-w-[55vw]">
          <div className="grid justify-items-center m-6">
          
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
                      className="pl-3 mt-2 mb-6 rounded-md p-3 w-64 md:w-96 border-2 border-solid  border-zinc-300 shadow-lg"
                      name="name"
                      id="name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
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
                      className="pl-3 mt-2 mb-6 rounded-md p-3 w-64 md:w-96 border-solid border-2 border-zinc-300  shadow-lg"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter E-mail"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="text" className="text-sm">
                      MESSAGE *
                    </label>
                    <textarea
                      className="pl-3 mt-2 mb-6 rounded-md p-3 w-64 md:w-96 border-solid border-2 border-zinc-300   shadow-lg"
                      id="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your message for us"
                      required
                    />
                  </div>

                  <p className="mb-4 text-red-500">
                  <span>{error}</span>
                </p>

                  <div className="flex justify-center">
                    <button
                      className="rounded-md border-solid border-2 border-zinc-500 pl-2 pr-2 bg-primary-background text-white w-28 text-lg"
                      type="submit"
                      onClick={handleSend}
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
      </div>
    </div>
  </div>
}