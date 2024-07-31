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
                initial={{ height: 0 }}
                animate={{ height: dropdown ? "auto" : 0, opacity: dropdown ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute flex flex-col gap-2 top-[3.5rem] bg-primary-background rounded-lg py-4 px-[0.6rem] w-[105%]">

                <CustomNavLink to="/executivecommittee"> 
                    Executive  
                </CustomNavLink>
                <CustomNavLink to="/operatingcommittee">   
                    Operating 
                </CustomNavLink>
            </motion.div>
        </div>
    )
}
