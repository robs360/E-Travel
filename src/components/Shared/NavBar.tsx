'use client'
import Image from "next/image"
import logo from '../../assets/logo2.jpeg'

import NavLink from "./NavLink"
import NavMenu from "./NavMenu"
import { motion } from "framer-motion";
import { Tsession } from "@/types/types"
import Link from "next/link"
import DropDown from "../Shadcn/Dropdown"
import { usePathname } from "next/navigation"
const NavBar = ({session}:{session:Tsession | null}) => {
    const path=usePathname()
    return (
        <motion.div initial={{opacity:0, y:-30}} animate={{opacity:1 ,y:0}}
        transition={{delay:0.2, duration:0.4}} className="flex items-center space-x-5 lg:space-x-7 justify-around py-3 shadow">
            <div className="flex items-center">
                <Image src={logo} width={50} height={20}  alt="LOGO"></Image>
                <h1 className="font-black text-xl md:text-2xl">E-Tour</h1>
            </div>

            <NavLink></NavLink>
           
            {
                !session?(
                <Link className={`text-sm font-bold flex items-center ${path === '/login' ? 'text-[#0dac53] border-2 border-green-400 px-3 py-2 rounded-[8px]' : 'text-black'}`} href={'/login'}>Login</Link>):(
                    <DropDown></DropDown>
                )
            }
            <NavMenu></NavMenu>
        </motion.div>
    )
}
export default NavBar