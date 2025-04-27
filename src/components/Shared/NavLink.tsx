"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaBus, FaTrain } from "react-icons/fa"

const NavLink = () => {
    const path = usePathname()
    return (
        <div className="hidden md:flex space-x-4 md:space-x-6 items-center">
            <Link className={`text-sm font-bold flex gap-x-1.5 items-center ${path === '/' ? 'text-[#0dac53] border-2 border-green-400 px-4 py-1 rounded-[8px]' : 'text-black'}`} href={'/'}> <span>
               <FaBus ></FaBus> </span> Bus</Link>
            <Link className={`text-sm font-bold flex items-center gap-x-1.5 ${path === '/train' ? 'text-[#0dac53] border-2 border-green-400 px-4 py-2 rounded-[8px]' : 'text-black'}`} href={'/'}>
            <span><FaTrain></FaTrain></span> Train</Link>
            <Link className={`text-sm font-bold ${path === '/login' ? 'text-[#0dac53] border-2 border-green-400 px-4 py-2 rounded-[8px]' : 'text-black'}`} href={'/login'}>Login</Link>
        </div>
    )
}
export default NavLink