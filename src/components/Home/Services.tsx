import { Info, ShieldCheck, Utensils } from "lucide-react"
import { FaBus, FaHotel, FaTrain } from "react-icons/fa"


const Services = () => {
    return (
        <div className="w-full bg-[#f6f9f9f5] px-3 md:px-4 py-16  mt-10">
            <h1 className="text-center text-xl text-orange-400 font-semibold mb-12">
                <span className="uppercase">A one-stop solution for your travel needs</span> <br />

                <span className="text-green-500 text-3xl">Introducing you to the Shohoz way of life</span></h1>

           <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-[94%] mx-auto">
               <div className="mx-auto">
                   <div className="rounded-xl flex items-center bg-white w-[70px] h-[70px]">
                    <FaBus className="text-2xl mx-auto block text-green-500"></FaBus>
                     
                   </div>
                   <h1 className="text-xl font-medium text-black mt-1">Bus
                     <span className="text-green-500"> Ticket</span></h1>
                     <p className="text-[15px]">No more queuing at counters. Tickets of 100+ bus operators available online.</p>
               </div>
               <div className="mx-auto">
                   <div className="rounded-xl flex items-center bg-white w-[70px] h-[70px]">
                    <FaTrain className="text-2xl mx-auto block text-green-500"></FaTrain>
                     
                   </div>
                   <h1 className="text-xl font-medium text-black mt-1">Train
                     <span className="text-green-500"> Ticket</span></h1>
                     <p className="text-[15px]">Now book your train tickets for domestic travel in Bangladesh.</p>
               </div>
               <div className="mx-auto">
                   <div className="rounded-xl flex items-center bg-white w-[70px] h-[70px]">
                    <FaHotel className="text-2xl mx-auto block text-green-500"></FaHotel>
                     
                   </div>
                   <h1 className="text-xl font-medium text-black mt-1">Hotel
                     <span className="text-green-500"> Book</span></h1>
                     <p className="text-[15px]">No more queuing at counters. Tickets of 100+ bus operators available online.</p>
               </div>
               <div className="mx-auto">
                   <div className="rounded-xl flex items-center bg-white w-[70px] h-[70px]">
                    
                     <ShieldCheck className="text-2xl mx-auto block text-green-500"></ShieldCheck>
                   </div>
                   <h1 className="text-xl font-medium text-black mt-1">Guidence
                     <span className="text-green-500"> Service</span></h1>
                     <p className="text-[15px]">No more queuing at counters. Tickets of 100+ bus operators available online.</p>
               </div>
               <div className="mx-auto">
                   <div className="rounded-xl flex items-center bg-white w-[70px] h-[70px]">
                    <Utensils className="text-2xl mx-auto block text-green-500"></Utensils>
                     
                   </div>
                   <h1 className="text-xl font-medium text-black mt-1">Food
                     <span className="text-green-500"> Service</span></h1>
                     <p className="text-[15px]">No more queuing at counters. Tickets of 100+ bus operators available online.</p>
               </div>
               <div className="mx-auto">
                   <div className="rounded-xl flex items-center bg-white w-[70px] h-[70px]">
                    <Info className="text-2xl mx-auto block text-green-500"></Info>
                     
                   </div>
                   <h1 className="text-xl font-medium text-black mt-1">Provides
                     <span className="text-green-500"> Info</span></h1>
                     <p className="text-[15px]">No more queuing at counters. Tickets of 100+ bus operators available online.</p>
               </div>
            </div>     

        </div>
    )
}
export default Services