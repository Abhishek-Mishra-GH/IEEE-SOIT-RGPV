import React from 'react'
import IEEELogo from "../assets/ieee-logo-lg.svg"

export default function IEEE() {
    return (
        <div className="md:px-4 py-8">
            <div className="w-full">
                <h1 className="text-5xl text-center my-8">ABOUT US</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 md:m-4">
                    {/* IEEE logo */}
                    <div className="flex justify-center items-center">
                        <img src={IEEELogo} alt="logo-iee" className="h-[30vh] md:h-auto" />
                    </div>
                    {/* What is IEEE */}
                    <div className="p-4 col-span-2 flex flex-col justify-center items-center">
                        <div className="md:max-w-[45vw]">
                        <h3 className="text-3xl font-medium my-2">What is IEEE?</h3>
                        <p className="text-2xl">
                            IEEE RGPV is a student chapter of RGPV, It is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. As a student chapter at RGPV, our mission is to ignite our passions, foster a sense of community, and provide enriching experiences.
                            <br />
                            <br />
                            Through our diverse activities and collaborative environment, we strive to create a space where students can grow both academically and professionally, preparing them to become future leaders in technology and engineering.

                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
