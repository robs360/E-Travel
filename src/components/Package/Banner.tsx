import Image from 'next/image';

import tan from '../../assets/tanguar.jpg'
import cox from '../../assets/cox2.jpg'
import ban from '../../assets/banner10.avif'
const Banner = () => {

    return (
        <div className='relative'>
            <div
                className="relative mt-1 w-full h-[260px] md:h-[370px] lg:h-[500px] flex items-center justify-center text-center bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${ban.src})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="px-4 md:px-10">
                    <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-snug drop-shadow-lg">
                        Escape & Save – Up to <span className="text-yellow-400">40% Off</span> <br />
                        on Select Stays!
                    </h1>
                    <p className="mt-4 text-white text-sm md:text-base max-w-xl mx-auto drop-shadow">
                        Discover unbeatable deals and luxurious stays across top-rated destinations. Limited time only!
                    </p>
                </div>
            </div>

            <h1 className='text-3xl mt-14 font-semibold text-green-500 text-center'>
                <span className='text-xl font-semibold text-orange-300'>Express your personality</span> <br />

                Take a Break at Park
            </h1>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto mt-14'>
                <div className="rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden bg-white">
                    <img
                        src={tan.src}
                        className="w-full h-[230px] object-cover"
                        alt="Sunamganj Tanguar Haor"
                    />
                    <div className="p-5 space-y-3">
                        <h2 className="text-lg font-semibold text-gray-800">Sunamganj Tanguar Haor</h2>
                        <p className="text-gray-500">🚤 Travel With Board</p>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>📅 2 Days, 2 Nights</span>
                            <span>👤 1 Person</span>
                        </div>
                        <p className="text-lg font-bold text-green-600">BDT 3400 / Person</p>
                        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition">
                            View Package
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden bg-white">
                    <img
                        src={cox.src}
                        className="w-full h-[230px] object-cover"
                        alt="Cox's Bazar"
                    />
                    <div className="p-5 space-y-3">
                        <h2 className="text-lg font-semibold text-gray-800">Cox’s Bazar Sea Tour</h2>
                        <p className="text-gray-500">🚤 Travel With Board</p>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>📅 2 Days, 2 Nights</span>
                            <span>👤 1 Person</span>
                        </div>
                        <p className="text-lg font-bold text-green-600">BDT 1400 / Person</p>
                        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition">
                            View Package
                        </button>
                    </div>
                </div>
                <div className="rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden bg-white">
                    <img
                        src={ban.src}
                        className="w-full h-[230px] object-cover"
                        alt="Tour Destination"
                    />

                    <div className="p-5 space-y-3">
                        <h2 className="text-lg font-semibold text-gray-800">Sunamganj Tanguar Haor</h2>
                        <p className="text-gray-500">🚤 Travel With Board</p>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>📅 2 Days, 2 Nights</span>
                            <span>👤 1 Person</span>
                        </div>
                        <p className="text-lg font-bold text-green-600">BDT 2200 / Person</p>

                        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition">
                            View Package
                        </button>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Banner