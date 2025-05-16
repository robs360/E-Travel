import Marquee from "react-fast-marquee";
import { getReview } from "@/services/Ticket";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const Review =  () => {
    const [info,setInfo]=useState([])
    const [vari,serVari]=useState(true)
    useEffect(()=>{
        const fetchData=async ()=>{
            const res=await getReview()
            setInfo(res.data)
        }
        fetchData()
    },[])
    console.log(info)
    return (
        <div onMouseEnter={()=>{
            serVari(false)
        }} onMouseLeave={()=>{
            serVari(true)
        }} className="max-w-[1200px] mx-auto p-6">
            <h1 className='uppercase text-2xl mb-8 font-semibold mt-6'>Our Customer Review</h1>
            <Marquee play={vari} className="flex gap-3 w-full">
                {
                    info.map((item:any,index:number)=><div className="flex min-h-[290px] p-4 w-[346px] rounded-[8px] mr-5 border border-black">
                            <div className="flex flex-col justify-between">
                               <div className="flex space-x-4">
                               <Image src={item.image} alt="" width={60} height={60} 
                                className="rounded-full"></Image>
                                <div>
                                    <h1 className="text-[18px] font-semibold">{item.name}</h1>
                                    <p className="text-sm">{item.nationality}</p>
                                </div>
                               </div>
                                <div className="flex space-x-4 items-center mt-5">
                                  <div className="w-12 h-9 items-center rounded-[4px] 
                                  justify-center bg-green-700 flex space-x-2">
                                       <Star className="text-white size-5"></Star>
                                       <span className="text-white text-sm">{item.rating}</span>
                                  </div>
                                  <h1 className="text-sm">{item.status}</h1>
                                  
                                </div>
                                <p className="text-sm text-gray-600 mt-3">{item.review} Lorem ipsum dolor sit amet consectetur. </p>
                                <div className="flex space-x-4 items-start">
                                    <Image src={item.serImage} width={70} height={70} alt="" className="rounded-[8px]"></Image>
                                    <h1>{item.serName}</h1>
                                </div>
                            </div>
                    </div>)
                }
            </Marquee>
        </div>
    );
};

export default Review;
