'use client'
import { ShowHotelDataProps } from "@/types/types"
import Loader from "../Loader/Loader"
import { useState } from "react"
import { hotelDescriptions } from "@/types/types"
console.log(hotelDescriptions)
const ShowHotelData = ({ loading, info }: ShowHotelDataProps) => {
    const [counter,setCounter]=useState(6)
    return (

        <div className="mt-16 w-full">
         
            {
                loading ? (<><Loader></Loader></>)
                    :
                    (<>
                    {
                        info.slice(0,counter).map((item,index)=><div key={index} className="my-8 w-full border-2 p-4 rounded-[9px]">
                            
                        </div>)
                    } 
                    <div>
                       
                    </div>
                    </>)
            }
        </div>

    )
}
export default ShowHotelData