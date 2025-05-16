'use client'
import { getTopHotel } from "@/services/TopHotel"
import { MapPin } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import './style.css'
const TopHotel = () => {
   const [info, setInfo] = useState([])
   useEffect(() => {
      const fetchData = async () => {
         const res = await getTopHotel()
         setInfo(res.data)
      }
      fetchData()
   }, [])
   return (
      <div className="max-w-[1210px] mx-auto">
         <h1 className='uppercase ml-6 text-2xl mb-8 font-semibold mt-6'>Our Most Top Hotel In This Year</h1>
         <div className="grid-container">
            {
               info?.map((item: any, index: number) => {
                  let reviews = 2 + Math.floor(Math.random() * 10) + 1;
                  return(
                     <div key={index} className="rounded-[6px] border-2 w-full">
                  <Image className="rounded-[6px] mx-auto"
                     src={item.image} width={295} height={220} alt="Hotel Image">

                  </Image>
                  <div className="mt-2 p-3 mx-auto">
                     <h1 className="text-xl font-semibold">{item.name}</h1>
                     <div className="flex my-2 mb-3">
                        <MapPin className="size-5"></MapPin>
                        <h1 className="text-sm text-gray-500">{item.location}</h1>
                     </div>
                     <span className="text-black p-1 text-sm border-2 rounded-[4px]">Central Location</span>
                     <div className="flex items-center space-x-2 my-3">
                        <div className="text-sm text-white w-[30px] h-[30px] rounded-[6px] flex items-center justify-center font-medium bg-green-700">
                           {item.rating}
                        </div>
                        <h1 className="text-[13px] font-light text-gray-500">{item.ratingStatus}</h1>
                        <h1 className="text-[13px] font-light text-gray-500">reviews {reviews}</h1>
                     </div>
                     <p className="text-sm">{item.description}</p>
                     <div className="mt-4">
                           <span className="text-gray-500">From</span>
                           <span className="text-xl font-medium"> BDT {item.bdt}</span> <br />
                           <span className="text-gray-500">1 Night</span>
                     </div>
                  </div>
               </div>
                  )
               })
            }
         </div>
      </div>
   )
}
export default TopHotel
// let price = 2120 + Math.floor(Math.random() * 1000) + 1;