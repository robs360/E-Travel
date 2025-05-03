'use client'
import Image from 'next/image'
import stearing from '../../assets/steering-wheel.png'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Button } from '../ui/button'
const SeatPlan = () => {
    const [bookedTicket, setBookedTicket] = useState<string[]>([]);
    const [counter, setCounter] = useState(0)

    const handleTicket = (seat: string) => {
        const count = counter + 1;

        if (count > 4) {
            toast.error("You can book maximum 4 tickets");
            return;
        }

        setCounter(count);
        setBookedTicket(prev => [...prev, seat]);
    };
    return (
        <div className="flex gap-4  mt-8 min-h-[300px] max-w-[1200px] p-6 mx-auto bg-white rounded-2xl justify-between">
            <div className='max-w-[500px]'>
                <div className='w-[60px] ml-auto'>
                    <Image src={stearing} alt='' width={50}></Image>
                </div>
                <div className="mt-3 flex gap-14">

                    <div className="grid grid-cols-2 gap-4">
                        {Array.from({ length: 20 }).map((_, index) => {
                            const row = String.fromCharCode(65 + Math.floor(index / 2));
                            const seatNum = (index % 2) + 1;
                            const seat = `${row}${seatNum}`;
                            return (
                                <button onClick={() => { handleTicket(`${row}${seatNum}`) }}
                                    key={`L-${row}${seatNum}`}
                                    className={`${bookedTicket.includes(seat) ? 'bg-green-500 text-white' : 'bg-gray-100/50'
                                        } text-black cursor-pointer font-semibold py-2 rounded shadow w-14`}
                                >
                                    {row}{seatNum}
                                </button>
                            );
                        })}
                    </div>


                    <div className="grid grid-cols-2 gap-4">
                        {Array.from({ length: 20 }).map((_, index) => {
                            const row = String.fromCharCode(65 + Math.floor(index / 2)); // A to E
                            const seatNum = (index % 2) + 3;
                            const seat = `${row}${seatNum}`;
                            return (
                                <button onClick={() => { handleTicket(`${row}${seatNum}`) }}
                                    key={`R-${row}${seatNum}`}
                                    className={`${bookedTicket.includes(seat) ? 'bg-green-500 text-white' : 'bg-gray-100/50'} text-black cursor-pointer font-semibold py-2 rounded shadow w-14`}
                                >
                                    {row}{seatNum}
                                </button>
                            );
                        })}
                    </div>
                </div>


            </div>
            <div className='pl-5 md:pl-9 lg:pl-12 border-dotted border-l-2'>
                <h1 className='bg-red-200 text-red-500 animate-pulse
                 px-1.5 py-0.5 rounded-full mb-2'>Maximum 4 seat can bok</h1>
                <h1 className='font-semibold'>Selected Seat</h1>
                <div className='mt-2 flex px-2.5 py-1.5 justify-between bg-gray-100/50'>
                    {
                        bookedTicket?.map((_, index: number) =>
                            <span key={index}>{bookedTicket[index]}</span>)
                    }
                </div>
                {
                    bookedTicket.length > 0 && (<div>
                        <Button className='mt-2 font-semibold bg-green-500
                         hover:bg-green-600 block mx-auto'>Confirm Ticket</Button>
                    </div>)
                }
            </div>

        </div>
    )
}
export default SeatPlan