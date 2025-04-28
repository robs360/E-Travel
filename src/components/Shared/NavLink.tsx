"use client"
import { Package } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaBus, FaHotel } from "react-icons/fa"
import { Tsession } from "@/types/types"
import DropDown from "../Shadcn/Dropdown"
const NavLink = ({session}:{session:Tsession | null})=> {
    const path = usePathname()
    return (
        <div className="hidden md:flex space-x-4 md:space-x-6 items-center">
            <Link className={`text-sm font-bold flex gap-x-1.5 items-center ${path === '/' ? 'text-[#0dac53] border-2 border-green-400 px-4 py-1 rounded-[8px]' : 'text-black'}`} href={'/'}> <span>
               <FaBus ></FaBus> </span> Bus</Link>
            <Link className={`text-sm font-bold flex items-center gap-x-1.5 ${path === '/hotel-book' ? 'text-[#0dac53] border-2 border-green-400 px-4 py-2 rounded-[8px]' : 'text-black'}`} href={'/hotel-book'}>
            <span><FaHotel></FaHotel></span>Book Hotel</Link>
            <Link className={`text-sm font-bold flex items-center gap-x-1.5 ${path === '/packages' ? 'text-[#0dac53] border-2 border-green-400 px-4 py-2 rounded-[8px]' : 'text-black'}`} href={'/packages'}>
            <span><Package></Package> </span>Packages</Link>
            {
                !session?(
                <Link className={`text-sm font-bold ${path === '/login' ? 'text-[#0dac53] border-2 border-green-400 px-4 py-2 rounded-[8px]' : 'text-black'}`} href={'/login'}>Login</Link>):(
                    <DropDown></DropDown>
                )
            }
        </div>
    )
}
export default NavLink