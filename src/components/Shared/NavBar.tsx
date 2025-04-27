'use client'
import Image from "next/image"
import logo from '../../assets/logo2.jpeg'
import { FaPhone } from "react-icons/fa"
import NavLink from "./NavLink"
import NavMenu from "./NavMenu"
import { motion } from "framer-motion";

const NavBar = () => {

    return (
        <motion.div initial={{opacity:0, y:-30}} animate={{opacity:1 ,y:0}}
        transition={{delay:0.3, duration:0.4}} className="flex items-center space-x-7 justify-around py-3 shadow">
            <div className="flex items-center">
                <Image src={logo} width={50} height={20}  alt="LOGO"></Image>
                <h1 className="font-black text-xl md:text-2xl">E-Ticket</h1>
            </div>

            <NavLink></NavLink>

            <button>
                <div className="px-3 text-[15px] py-1 flex items-center
            bg-orange-400 gap-x-1.5 rounded-2xl text-white font-medium">
                    <FaPhone className="text-[17px]"></FaPhone> 16245
                </div>
            </button>
            <NavMenu></NavMenu>
        </motion.div>
    )
}
export default NavBar