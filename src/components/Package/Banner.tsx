import Image from 'next/image';
import banner from '../../assets/package.jpg'
import tan from '../../assets/tanguar.jpg'
import cox from '../../assets/cox2.jpg'
import ban from '../../assets/bandarban.jpeg'
const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${banner.src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
    };
    return (
        <div className='relative'>
            <div className='mt-1 bg-cover h-[200px] md:h-[270px] lg:h-[320px] flex p-3 items-center justify-center' style={bannerStyle}>

            </div>
            <h1 className='text-3xl mt-14 font-semibold text-green-500 text-center'>
            <span className='text-xl font-semibold text-orange-300'>Express your personality</span> <br /> 

        Take a Break at Park
            </h1>
            <div className='grid grid-cols-3 max-w-[1100px] mx-auto mt-14'>
                <div className='rounded-md w-[325px] border-2 border-gray-300'>
                   <img src={tan.src} className='w-full rounded-t-md h-[230px]' alt="" /> 
                   <div className='p-3 flex flex-col space-y-4'>
                       <h1 className='font-semibold'>sunamganj tanguar Haur</h1>
                       <p className='text-gray-400 font-medium'>Travel With Board</p>
                       <p className='text-gray-400 font-medium'>BDT 3400 per Person</p>
                       <p className='text-sm'>1 Person 2 day 2 night</p>
                       <span className='px-2 py-0.5 w-[84px] font-medium bg-green-500 rounded-[10px] text-white'>Package</span>
                    </div>  
                </div>
               <div className='rounded-md w-[325px] border-2 border-gray-300'>
                   <img src={cox.src} className='w-full rounded-t-md h-[230px]' alt="" /> 
                   <div className='p-3 flex flex-col space-y-4'>
                       <h1 className='font-semibold'>sunamganj tanguar Haur</h1>
                       <p className='text-gray-400 font-medium'>Travel With Board</p>
                       <p className='text-gray-400 font-medium'>BDT 1400 per Person</p>
                       <p className='text-sm'>1 Person 2 day 2 night</p>
                       <span className='px-2 py-0.5 w-[84px] font-medium bg-green-500 rounded-[10px] text-white'>Package</span>
                    </div>  
                </div>
                <div className='rounded-md w-[325px] border-2 border-gray-300'>
                   <img src={ban.src} className='w-full rounded-t-md h-[230px]' alt="" /> 
                   <div className='p-3 flex flex-col space-y-4'>
                       <h1 className='font-semibold'>sunamganj tanguar Haur</h1>
                       <p className='text-gray-400 font-medium'>Travel With Board</p>
                       <p className='text-gray-400 font-medium'>BDT 2200 per Person</p>
                       <p className='text-sm'>1 Person 2 day 2 night</p>
                       <span className='px-2 py-0.5 w-[84px] font-medium bg-green-500 rounded-[10px] text-white'>Package</span>
                    </div>  
                </div>
                
            </div>
        </div>
    )
}
export default Banner