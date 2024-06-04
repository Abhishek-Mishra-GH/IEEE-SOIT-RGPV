import React from 'react'
import IEEELogo from "../assets/ieee-logo-lg.svg"
import PIC from "../assets/ieeeh 1.svg"

export default function IEEEH() {
    return (
        <div className="md:px-4 py-8">
        <div className="w-full">
            
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-4 gap-10">
                {/* IEEE logo */}
                
                {/* What is IEEE */}
                <div className="p-4 col-span-1 flex flex-col ">
                    <div className="md:max-w-[45vw]  ">
                    <h3 className="text-3xl font-medium my-2">History of IEEE</h3>
                    <p className="text-xl">
                    IEEE is the world's largest technical professional organisation dedicated to advancing innovation and technological excellence. Founded in 1884 with the establishment of the American Institute of Electrical Engineers (AIEE), it merged with the Institute of Radio Engineers (IRE) in 1963 to form IEEE. Originally focused on electrical and radio engineering, IEEE has grown to encompass a broad range of fields, including computing, bioengineering, robotics, and nanotechnology. 
                        <br />
                        <br />
                        Today, IEEE supports over 395,000 members in 160 countries through its extensive network of societies, publications, and conferences, continually fostering global technological advancements.

                    </p>
                    </div>
                    
                </div>
                <div className="flex justify-center items-center">
                    <img src={PIC} alt="img" className="h-[25vh] md:h-auto"/>
                </div>
            </div>
        </div>
    </div>
)
}
