import React, { useState } from "react"

function ContactForm() {
  const [send, setSend] = useState(false)

  return (
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
                    className="pl-3 mt-2 mb-6 rounded-md p-3 w-64 md:w-96 border-2 border-solid  border-zinc-300 shadow-lg"
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
                    className="pl-3 mt-2 mb-6 rounded-md p-3 w-64 md:w-96 border-solid border-2 border-zinc-300  shadow-lg"
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
                    className="pl-3 mt-2 mb-6 rounded-md p-3 w-64 md:w-96 border-solid border-2 border-zinc-300   shadow-lg"
                    id="text"
                    placeholder="Your message for us"
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    className="rounded-md border-solid border-2 border-zinc-500 pl-2 pr-2 bg-primary-background text-white w-28 text-lg"
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
  )
}

export default ContactForm