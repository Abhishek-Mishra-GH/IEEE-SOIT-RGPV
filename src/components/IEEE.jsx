import React from 'react'
import IEEELogo from "../assets/ieee_logos/ieee-logo-simplified.jpg"
// import IEEELogo from "../assets/ieee-logo-lg.svg"

export default function IEEE() {
    return (
        <div className="w-full mb-4">
            {/* About > what is ieee */}
            <div className="w-full md:px-4 py-12">
            <h1 className="text-5xl text-center mt-8 mb-2">ABOUT US</h1>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* What is IEEE */}
                    <div className="py-4 col-span-2 flex flex-col justify-center items-start p-8">
                        <div className="sm:max-w-[50vw]">
                        <h3 className="text-3xl font-medium my-2">What is IEEE?</h3>
                        <p className="text-xl">
                            IEEE RGPV is a student chapter of RGPV, It is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. As a student chapter at RGPV, our mission is to ignite our passions, foster a sense of community, and provide enriching experiences.
                            <br />
                            <br />
                            Through our diverse activities and collaborative environment, we strive to create a space where students can grow both academically and professionally, preparing them to become future leaders in technology and engineering.
                        </p>
                        </div>
                    </div>
                    
                    {/* IEEE logo */}
                    <div className="flex justify-center items-center sm:mr-24 mt-8 sm:mt-0">
                        <img src={IEEELogo} alt="logo-ieee" className="h-24 sm:h-40" />
                    </div>
                    
                </div>
            </div>
            
            {/* Quote */}
            {/* <div className="bg-primary-background text-white px-6 py-8">
                <div className="flex justify-center md:mt-4">
                <p className="font-kalam text-left text-3xl md:max-w-[70vw] text leading-loose">
                “Technology is best when it brings people together. IEEE embodies this principle by uniting professionals across the globe, driving progress through innovation and collaboration, and ultimately improving the quality of life for all humanity.”
                </p>
                </div>
                <br />
                <br />
                <p className="text-right text-xl mr-6">
                ~ Matt Mullenweg
                </p>
            </div> */}

        </div>
    )
}
