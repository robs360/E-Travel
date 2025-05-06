import Marquee from "react-fast-marquee";
import { getReview } from "@/services/Ticket";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const Review =  () => {
    const [info,setInfo]=useState([])
    useEffect(()=>{
        const fetchData=async ()=>{
            const res=await getReview()
            setInfo(res.data)
        }
        fetchData()
    },[])
    console.log(info)
    return (
        <div className="max-w-[1260px] mx-auto p-6">
            <h1 className='uppercase text-3xl mb-8 font-semibold mt-6'>Our Customer Review</h1>
            <Marquee className="flex gap-3 w-full">
                {
                    info.map((item:any,index:number)=><div className="min-h-[280px] p-4 w-[346px] rounded-[8px] mr-5 border border-black">
                            <div className="">
                               <div className="flex space-x-4">
                               <Image src={''} alt="" width={60} height={60} 
                                className="rounded-full"></Image>
                                <div>
                                    <h1 className="text-[18px] font-semibold">{item.name}</h1>
                                    <p className="text-sm">{item.nationality}</p>
                                </div>
                               </div>
                                <div className="flex space-x-4 items-center mt-5">
                                  <div className="w-12 h-9 items-center rounded-[4px] 
                                  justify-center bg-blue-800 flex space-x-2">
                                       <Star className="text-white size-5"></Star>
                                       <span className="text-white text-sm">{item.rating}</span>
                                  </div>
                                  <h1 className="text-sm">{item.status}</h1>
                                  
                                </div>
                                <p className="text-sm text-gray-400 mt-3">{item.review} Lorem ipsum dolor sit amet consectetur. </p>
                            </div>
                    </div>)
                }
            </Marquee>
        </div>
    );
};

export default Review;
