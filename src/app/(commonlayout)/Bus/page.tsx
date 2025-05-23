'use client'
import Search from '@/components/Home/Search';
import banner from '../../../assets/banner3.avif'

import { ChevronRight } from 'lucide-react';

import TicketCard from '@/components/Ticket/TicketCard';
import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { RootState } from '@/redux/store';
import { clearTickets } from '@/redux/features/ticketSlice';
import { useState } from 'react';
import Link from 'next/link';
import Review from '@/components/Review/Review';
import Loader from '@/components/Loader/Loader';

const BusTicket = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
  const tickets = useAppSelector((state: RootState) => state.tickets.ticketCounter);
  console.log('it is tickets ', tickets)
  const bannerStyle = {
    backgroundImage: `url(${banner.src})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  };
  const handleClicked = () => {
    dispatch(clearTickets())
  }
  return (
    <div className='bg-white pb-8'>
      <div style={bannerStyle} className='mt-1 bg-cover h-[180px] md:h-[240px] lg:h-[300px] flex items-center justify-center'>
        <div className='hidden lg:flex items-center justify-center '>
          <Search setLoading={setLoading}></Search>
        </div>
      </div>
      <div className='lg:hidden mt-5'>
        <Search setLoading={setLoading}></Search>
      </div>
      <div className='w-full h-[46px] bg-green-600 mt-6 pt-2'>
        <h1 className='text-white text-center flex justify-center'><span className='font-medium flex'>Departing Ticket <ChevronRight></ChevronRight></span><Link href={'/TicketHistory'}>Ticket History</Link></h1>
      </div>

      <div className='flex'>
        {
          tickets && (
            <div className='p-7 flex flex-col justify-center items-center md:items-start md:flex-row space-x-8 gap-y-7 w-full'>
              <div className='w-[220px] md:w-[120px] mt-14'>
                <h1 className='font-medium'>Filter</h1>
                <form action="" className='flex flex-row md:flex-col space-x-7 md:space-x-0.5'>
                  <label className="flex items-center gap-2 mb-2 text-sm text-gray-500 cursor-pointer">
                    <input
                      type="radio"
                      name="busType"
                      value="AC"
                      className="hidden peer"
                    />
                    <div className="w-4 h-4 border border-gray-400 peer-checked:bg-blue-500 peer-checked:border-blue-500 rounded-[2px]"></div>
                    AC
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer">
                    <input
                      type="radio"
                      name="busType"
                      value="AC"
                      className="hidden peer"
                    />
                    <div className="w-4 h-4 peer-checked:bg-blue-500 peer-checked:border-blue-500 rounded-[2px]"></div>
                    Non-Ac
                  </label>
                </form>
                <Button onClick={handleClicked} className='text-green-600 hover:bg-green-300 rounded-full bg-green-200 text-[13px] h-[24px] mt-3'>Clear Data</Button>
              </div>
              <div className='w-full p-3'>
                {
                  loading && (
                    <Loader></Loader>
                  )
                }
                {
                  tickets.length > 0 ? (<>
                    {
                      tickets.map((item, index) => <TicketCard key={index} item={item}></TicketCard>)
                    }</>) : (<><h1 className='text-red-400 text-center'>Sorry! No Data Found in Data Base</h1></>)
                }
              </div>

            </div>
          )
        }
      </div>

    </div>
  )
}
export default BusTicket
