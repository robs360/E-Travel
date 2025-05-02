'use client'
import Image from 'next/image'
import stearing from '../../assets/steering-wheel.png'
import { useState } from 'react'
const SeatPlan = () => {
    const [bookedTicket, setBookedTicket] = useState<string[]>([]);

    console.log(bookedTicket)
    const handleTicket = (seat: string) => {
        console.log(seat)
        setBookedTicket(prev => [...prev, seat]);
    }
    return (
        <div className="flex gap-6  mt-8 min-h-[300px] max-w-[1200px] p-5 mx-auto bg-white rounded-2xl">
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
                                    className={`${bookedTicket.includes(seat) ? 'bg-green-400' : 'bg-gray-100/50'
                                        } text-black cursor-pointer font-semibold py-2 rounded shadow w-16`}
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
                                    className={`${bookedTicket.includes(seat)?'bg-green-400':'bg-gray-100/50'} text-black cursor-pointer font-semibold py-2 rounded shadow w-16`}
                                >
                                    {row}{seatNum}
                                </button>
                            );
                        })}
                    </div>
                </div>


            </div>
            <div>
                <h1 className='font-semibold'>Selected Seat</h1>
            </div>

        </div>
    )
}
export default SeatPlan