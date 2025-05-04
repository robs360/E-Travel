import { Bus } from "lucide-react"
import Image from "next/image"
import driver from '../../assets/info-devider.png'
const TicketDetails = ({res}:any) => {
   
    return (
       
         <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-between min-h-[300px] max-w-[1200px] mx-auto bg-white rounded-2xl">
            {/* 1st div */}
            <div className="flex-grow w-full md:w-auto p-5">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-2 items-center">
                        <div>
                            <Bus className="size-6 md:size-8"></Bus>
                        </div>
                        <div>
                            <h1 className="font-semibold text-[16px] md:text-xl">{res.name}</h1>
                            <p className="text-gray-400 text-sm">{res.busNumber}</p>
                        </div>
                    </div>
                    <div className="flex px-1 md:px-2 space-x-0.5 h-[26px] items-center bg-green-100 rounded-full">
                        <Bus className="size-4 text-green-500"></Bus>
                        <p className="text-green-500 text-sm">Seat:{res.seat}</p>
                    </div>
                </div>
                <div className="mt-6 p-5 bg-gray-100 rounded-2xl">
                    <div className="flex justify-between py-4 border-b-3 border-dashed">
                        <h1 className="text-sm text-gray-500">Departure Time</h1>
                        <h1 className="text-sm text-gray-500">{res.time}PM</h1>
                    </div>
                    <div className="flex justify-between py-4">
                        <h1 className="text-sm text-gray-500">{res.from}</h1>
                        <h1 className="text-sm text-gray-500">To</h1>
                        <h1 className="text-sm text-gray-500">{res.to}</h1>

                    </div>
                </div>
            </div>
            {/* 2nd div */}
            <div className="hidden md:flex">
                <Image src={driver} width={58} height={380} alt="image"></Image>
            </div>
            {/* 3rd div */}
            <div className="w-[120px] pb-5 flex gap-4 flex-row md:flex-col">

                <h1 className="flex text-xl font-semibold items-center justify-center
             h-[40px] w-[40px] rounded-full bg-green-400 text-white">৳</h1>
                <div>
                    <h1 className="text-xl font-semibold">{res.rent}</h1>
                    <p className="font-semibold text-sm">Per Seat</p>
                </div>

            </div>
        </div>
    
    )
}
export default TicketDetails