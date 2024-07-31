import React from "react";
import Navbar from "../components/Navbar";
import Particle from "../components/particle";
import DrSanjeevSharma from "../components/ExecutiveComm";
import DrJitendraAgrawal from "../components/ExecutiveCom"
export default function Committee() {
  return (
    <>
      <Navbar />
      <div>
        
        <div>
          <h1 className="text-4xl text-center font-semibold mt-6">
            {"Executive Committee".toUpperCase()}
          </h1>
        </div>

        {/* In above section information about the Executive committee members is displayed */}
      </div>
    </>
  );
}