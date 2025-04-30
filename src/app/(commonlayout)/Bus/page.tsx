'use client'
import Search from '@/components/Home/Search';
import banner from '../../../assets/banner3.avif'
import { useState } from 'react';
import { Bus, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import logo from '../../../assets/logo5.png'
import { Button } from '@/components/ui/button';
const BusTicket = () => {
  const [info, setInfo] = useState<any[]>(["asdf"])
  const bannerStyle = {
    backgroundImage: `url(${banner.src})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  };
  console.log("from page ", info)
  return (
    <div>
      <div style={bannerStyle} className='mt-1 bg-cover h-[180px] md:h-[240px] lg:h-[300px] flex items-center justify-center'>
        <div className='hidden lg:flex items-center justify-center '>
          <Search setInfo={setInfo}></Search>
        </div>
      </div>
      <div className='lg:hidden mt-5'>
        <Search setInfo={setInfo}></Search>
      </div>
      <div className='w-full h-[46px] bg-green-600 mt-6 pt-2'>
        <h1 className='text-white text-center flex justify-center'><span className='font-medium flex'>Choose Departing  Ticket <ChevronRight></ChevronRight></span> Passenger Details Review & Pay</h1>
      </div>

      <div className='flex mt-10'>
        {
          info && (
            <div className='p-7 flex flex-col justify-center items-center md:items-start md:flex-row space-x-8 gap-y-7 w-full'>
              <div className='w-[220px] md:w-[120px]'>
                <h1 className='font-medium'>Filter</h1>
                <form action="" className='flex flex-row md:flex-col space-x-7 md:space-x-0.5'>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="radio" name="busType" value="AC" />
                    AC
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="radio" name="busType" value="Non-AC" />
                    Non-AC
                  </label>
                </form>
              </div>
              <div className="flex-grow p-6 shadow-2xl rounded-xl bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                <div className="flex flex-col gap-4 lg:flex-row justify-between items-center space-y-10 lg:space-y-0">
                  {/* Left - Company Info */}
                  <div className="flex gap-3">
                    <Image src={logo} width={120} height={20} alt="logo" />
                    <div className="w-full lg:w-[160px]">
                      <h1 className="text-xl font-semibold text-gray-800">Green Line Express</h1>
                      <p className="text-gray-500 text-sm">Bus Type: <span className="text-green-600 font-medium">AC</span></p>
                      <p className="text-gray-600 text-sm font-medium">
                        Route: <span className="font-normal text-gray-500">Chittagong - Cox's Bazar</span>
                      </p>
                    </div>
                  </div>

                  {/* Middle - Time Line (Do not modify structure inside this) */}
                  <div className="flex items-center">
                    <div className="text-center">
                      <h1 className="text-xl font-bold text-gray-800">12:45PM</h1>
                      <p className="text-gray-500 text-sm">Mon, 5 May</p>
                      <p className="text-gray-500 text-sm">Chittagong</p>
                    </div>

                    <div className="flex items-center ml-4">
                      <span className="h-[28px] w-[28px] bg-black md:bg-orange-500  rounded-full flex items-center justify-center shadow-md">
                        <Bus className="text-white size-5" />
                      </span>
                      <div className="-mt-4 ml-2">
                        <h1 className="text-sm text-center text-gray-700 font-medium">4 hours</h1>
                        <div className="h-[1px] w-[100px] border-t-2 border-dashed border-orange-400" />
                      </div>
                    </div>

                    <div className="ml-4 text-center">
                      <h1 className="text-xl font-bold text-gray-800">6:00PM</h1>
                      <p className="text-gray-500 text-sm">Mon, 5 May</p>
                      <p className="text-gray-500 text-sm">Chittagong</p>
                    </div>
                  </div>

                  {/* Right - Price & Action */}
                  <div className="flex items-center gap-x-6">
                    <h1 className="text-lg font-semibold text-gray-700">৳600</h1>
                    <div>
                      <Button className="bg-green-600 hover:bg-green-700 transition-all">Buy Ticket</Button>
                      <h1 className="text-gray-500 text-sm mt-1">Available Seats: 31</h1>
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

            </div>
          )
        }
      </div>

    </div>
  )
}
export default BusTicket
