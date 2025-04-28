"use client"
import Image from "next/image"
import menu from '../../assets/menu.png'
import { useState } from "react"
import { FaBus, FaHotel, FaPlus, FaTrain } from "react-icons/fa"
import Link from "next/link"
import { motion } from "motion/react"
import { usePathname } from "next/navigation"
import { Package } from "lucide-react"
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
                    open &&(<>
                    <motion.div initial={{ opacity: 0, x: -10 }}
                    animate={{ x: 10, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}>
                    <Link href={'/'} className={`font-medium flex items-center text-[15px] ${path === '/' ? 'text-[#0dac53] border-2 border-green-400 px-4 py-1 rounded-[8px] w-[110px]' : 'text-orange-300'}`}><FaBus></FaBus> Bus</Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ x: 10, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}>
                    <Link href={'/tarin'} className={`font-medium flex items-center text-[15px] ${path === '/train' ? 'text-[#0dac53] border-2 border-green-400  px-4 py-1 rounded-[8px] w-[100px]' : 'text-orange-300'}`}><FaTrain></FaTrain> Train</Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ x: 10, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}>
                    <Link href={'/hotel-book'} className={`font-medium flex items-center text-[15px] ${path === '/hotel-book' ? 'text-[#0dac53] border-2 border-green-400  px-4 py-1 rounded-[8px] w-[100px]' : 'text-orange-300'}`}><FaHotel></FaHotel> Book Hotel</Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ x: 10, opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}>
                    <Link href={'/packages'} className={`font-medium flex items-center text-[15px] ${path === '/packages' ? 'text-[#0dac53] border-2 border-green-400  px-4 py-1 rounded-[8px] w-[100px]' : 'text-orange-300'}`}><Package></Package>Package</Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ x: 10, opacity: 1 }}
                    transition={{ delay:2, duration: 0.5 }}>
                    <Link href={'/login'} className={`font-medium flex items-center text-[15px] ${path === '/login' ? 'text-[#0dac53] border-2 border-green-400 px-4 py-1 rounded-[8px] w-[100px]' : 'text-orange-300'}`}>Login</Link>
                </motion.div></>)
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