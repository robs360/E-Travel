"use client"
import Image from 'next/image'
import hero from '../../assets/road.png'
import { Button } from '../ui/button'

import { useState } from 'react'
import { MapPin, Send } from "lucide-react"
const Search = () => {
    const [focus, setFocus] = useState(true)
    const [focus2, setFocus2] = useState(true)
    return (
        <div className="p-4 py-5 rounded-2xl bg-white mx-auto shadow-2xl w-[350px] md:w-auto">
            <div className="flex items-center space-x-1">
                <div className="w-[14px] h-[14px] rounded-full border-2 border-black">

                </div>
                <h1 className="font-semibold">One Way</h1>
            </div>
            <form action="" className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row space-x-7 mt-1 items-center">

                <div className='relative pl-4 lg:pl-0'>
                    <h1 className='text-[18px] pl-1 text-gray-500 font-semibold'>From</h1>
                    {
                        focus && (<Send className='absolute left-5 lg:left-2 top-10 text-green-400 text-2xl'></Send>)
                    }
                    <input onFocus={() => {
                        setFocus(false)
                    }} onBlur={() => setFocus(true)} className="w-[280px] lg:w-[260px] p-2 h-[50px] rounded-xl border border-gray-400" type="text" />

                </div>
                <Image className='hidden lg:flex' src={hero} width={20} height={15} alt='Hero Image'></Image>
                <div className='relative pl-4 lg:pl-0'>
                    <h1 className='text-[18px] pl-1 text-gray-500 font-semibold'>To</h1>
                    {
                        focus2 && (<MapPin className='absolute left-5 lg:left-2 top-10 text-green-400 text-2xl'></MapPin>)
                    }
                    <input onFocus={() => {
                        setFocus2(false)
                    }} onBlur={() => setFocus(true)} className="w-[280px] lg:w-[260px] p-2 h-[50px] rounded-xl border border-gray-400" type="text" />

                </div>
                <input type="date" className='mt-3' />
                <Button className='mt-3 bg-black w-[280px] lg:w-[100px] text-[17px] h-[45px]'>Search</Button>
            </form>
        </div>
    )
}
export default Search