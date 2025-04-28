"use client"
import Image from "next/image"
import menu from '../../assets/menu.png'
import { useState } from "react"
import { FaPlus } from "react-icons/fa"
import Link from "next/link"
import { motion } from "motion/react"
import { usePathname } from "next/navigation"

import { navLinks } from "./NavLink"
const NavMenu = () => {
    const [open, setOpen] = useState(false)
    const path = usePathname()

    return (
        <div className="flex md:hidden">
            <button onClick={() => {
                setOpen(true)
            }}>
                <Image src={menu} height={20} width={32} alt="Nav bar Menu"></Image>
            </button>
            <div
                className={`w-[270px] flex flex-col pt-10 py-2 gap-y-4 pl-3 text-[16px] font-semibold text-white overflow-hidden absolute top-[72px] z-50 bg-[rgba(0,0,0,0.9)] h-[86vh] ${open ? "left-0" : "-left-[310px]"
                    } transition-all duration-700`}
            >
                {
                    open && (<>
                        {
                            navLinks.map((item: any, index: number) => <motion.div key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ x: 10, opacity: 1 }}
                                transition={{ delay: item.delay, duration: 0.5 }}>
                                <Link href={item.href} className={`font-medium flex gap-x-1 items-center text-[15px] ${path === item.href ? 'text-[#0dac53] border-2 border-green-400  px-4 py-1 rounded-[8px] w-[100px]' : 'text-orange-300'}`}><item.icon className='size-5'></item.icon> 
                                <span className="mt-[2px]">{item.label}</span> </Link>
                            </motion.div>)
                        }
                    </>)
                }
                <button
                    onClick={() => {
                        setOpen(false);
                    }}
                    className={`absolute top-0 right-0 w-[36px] h-[36px] rounded-[50%]  ${open ? "absolute" : "hidden"
                        }`}
                >
                    <FaPlus className="text-xl ml-[6px] rotate-45 text-white"></FaPlus>
                </button>
            </div>
        </div>
    )
}
export default NavMenu