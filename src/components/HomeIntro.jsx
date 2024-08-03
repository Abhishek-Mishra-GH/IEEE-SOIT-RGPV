import { useState, useMemo, useEffect } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { motion } from 'framer-motion'
import rgpvLogo from "../assets/logo-rgpv.webp"


export default function HomeIntro() {

    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => {
            setInit(true)
        })
    }, []);

    const options = useMemo(
        () => ({
            fpsLimit: 120,
            background: {
                color: "#000000",
            },
            fullScreen: {
                enable: true,
                zIndex: 1,
            },
            interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "attract",
                  },
                },
            },
            style: {
                position: "absolute",

            },
            particles: {
                color: {
                    value: "#ffffff"
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
                    value: { min: 1, max: 5 }
                },
                move: {
                    direction: "right",
                    enable: true,
                    speed: { min: 3, max: 5 },
                    straight: true,
                }
            },
            detectRetina: true,
        }),
        [],
    );


    if (init) {
        return (
            <div id='introPage'>
            <div className="flex absolute top-0 left-0 h-screen w-full ">
                <div className="relative h-full w-full">
                    <Particles options={options} />
                </div>
            </div>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut"}}
                className="absolute text-white top-1/2 left-[10%] -translate-y-1/2  md:text-7xl sm:text-5xl text-2xl select-none">
                <h2 className="sm:text-4xl md:text-6xl text-xl my-1 font-light">
                    <div className="flex items-center gap-2">
                    <img src={rgpvLogo} alt="logo-rgpv" className="md:h-[72px] h-[36px]" />
                    IEEE RGPV -
                    <p> Welcome's you</p>
                    </div>
                </h2>
                <h1 className="my-1">Rajiv Gandhi Proudyogiki </h1>
                <h1 className="my-1">Vishwavidyalaya</h1>
            </motion.div>
            </div>
        )
    } else return null
}
