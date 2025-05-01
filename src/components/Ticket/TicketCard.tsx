import Image from 'next/image';
import { Bus } from 'lucide-react';
import { Button } from '../ui/button';
const TicketCard=({item}:any)=>{
    return(
        <div className="flex-grow p-5 my-10 shadow-2xl rounded-xl bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300">
        <div className="flex flex-col gap-4 lg:flex-row justify-between items-center space-y-4 md:space-y-7 lg:space-y-0">
          {/* Left - Company Info */}
          <div className="flex gap-3">
            <Image src={item.logo} width={80} height={60} alt="logo" />
            <div className="w-full lg:w-[160px]">
              <h1 className="text-xl font-semibold text-gray-800">{item.name}</h1>
              <p className="text-gray-500 text-sm">Bus Type: <span className="text-green-600 font-medium">{item.category}</span></p>
              <p className="text-gray-600 text-sm font-medium">
                Route: <span className="font-normal text-gray-500">Chittagong - Cox's Bazar</span>
              </p>
            </div>
          </div>

          {/* Middle - Time Line (Do not modify structure inside this) */}
          <div className="flex items-center">
            <div className="text-center">
              <h1 className="text-[18px] md:text-xl font-bold text-gray-800">{item.time}PM</h1>
              <p className="text-gray-500 text-sm">Mon, 5 May</p>
              <p className="text-gray-500 text-sm">Chittagong</p>
            </div>

            <div className="flex items-center ml-4">
              <span className="w-[24px] md:h-[28px] h-[24px] md:w-[28px] bg-orange-500  rounded-full flex items-center justify-center shadow-md">
                <Bus className="text-white size-4 md:size-5" />
              </span>
              <div className="-mt-4 ml-2">
                <h1 className="text-sm text-center text-gray-700 font-medium">4 hours</h1>
                <div className="h-[1px] w-[50px] md:w-[100px] border-t-2 border-dashed border-orange-400" />
              </div>
            </div>

            <div className="ml-4 text-center">
              <h1 className="text-[18px] md:text-xl font-bold text-gray-800">6:00PM</h1>
              <p className="text-gray-500 text-sm">Mon, 5 May</p>
              <p className="text-gray-500 text-sm">Chittagong</p>
            </div>
          </div>

          {/* Right - Price & Action */}
          <div className="flex items-center gap-x-6">
            <h1 className="text-lg font-semibold text-gray-700">৳{item.rent}</h1>
            <div>
              <Button className="bg-green-600 hover:bg-green-700 transition-all">Buy Ticket</Button>
              <h1 className="text-gray-500 text-sm mt-1">Available Seats: {item.seat}</h1>
            </div>
          </div>
        </div>

        {/* Bottom Tags */}
        <div className="flex justify-center mt-4">
          <div className="flex gap-x-4">
            <span className="text-green-600 text-xs px-3 py-1 bg-green-100 rounded-full font-medium">Our Policy</span>
            <span className="text-green-600 text-xs px-3 py-1 bg-green-100 rounded-full font-medium">Dropping Point</span>
          </div>
        </div>
      </div>
    )
}
export default TicketCard