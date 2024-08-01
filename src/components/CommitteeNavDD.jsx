import { useState } from "react"
import { motion } from "framer-motion"
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import CustomNavLink from "./CustomNavLink"

export default function CommitteeNavDD() {
    const [dropdown, setDropdown] = useState(false)

    return (
        <div
            className="relative"
            onClick={() => setDropdown(prev => !prev)}>

            <div className="flex items-center gap-0.5 hover:cursor-pointer hover:text-primary-foreground">
                <span>Committee </span>
                {dropdown ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            <motion.div
                initial={{ 
                    height: 0,
                    padding: "0 0 0 0",
                    display: "none",
                    opacity: 0,                }}
                animate={{
                    height: dropdown ? "5.2rem" : 0, 
                    padding: dropdown ? "0.9rem 0.6rem" : "0 0 0 0",
                    display: dropdown ? "flex" : "none",
                    opacity: dropdown ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute flex flex-col justify-around top-[3.5rem] right-0 bg-primary-background rounded-lg text-base min-w-[12rem] border-2 border-green-700">

                <CustomNavLink to="/executivecommittee"> 
                    Executive Committee 
                </CustomNavLink>
                <CustomNavLink to="/operatingcommittee">   
                    Operating Committee
                </CustomNavLink>
            </motion.div>
        </div>
    )
}
