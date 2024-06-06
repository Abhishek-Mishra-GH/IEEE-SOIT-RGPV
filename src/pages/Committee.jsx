import React from "react";
import Navbar from "../components/Navbar";
import Particle from "../components/particle";
export default function Committee() {
  return (
    <>
      <Navbar />
      <Particle name="COMMITTEE" />
      <div>
        <div>
          <h1 className="text-4xl text-center font-semibold">
            {"Executive Committee".toUpperCase()}
          </h1>

          <div>{/* Dr.jitendra agarwal sir info   */}</div>

          <div>

          </div>
        </div>

        {/* In above section information about the Executive committee members is displayed */}
      </div>
    </>
  );
}