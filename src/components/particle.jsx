import React, { useState, useMemo, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Particle = (props) => {
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

  return (
    <div>
      <div className="w-full">
        <div className="h-40 p-6 mb-8 mt-0 relative">
          <Particles options={options} />
        </div>
      </div>
      <div className="font-semibold text-white xl:top-[21%] top-[15%] md:top-[9%]  grid items-center justify-center w-full text-5xl md:text-7xl  absolute">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};
export default Particle;
