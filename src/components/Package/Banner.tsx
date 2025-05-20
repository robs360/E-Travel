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
            <div className='min-h-[300px]'>
                <div className='max-w-[1100px] p-6 bg-white z-50 lg:absolute mt-4 mx-auto border-2 top-50 left-6 shadow-xl rounded-[12px]'>
                    <h1 className='font-semibold mb-2'>Top Destination Wth Package</h1>
                    <div className='grid grid-cols-1  md:grid-cols-3 gap-4'>
                        <div className="relative mx-auto w-[340px] group md:w-[250px]  lg:w-[280px] h-[220px] overflow-hidden">
                            <Image src={tan} alt="Packages" fill className="object-cover rounded-lg" />
                            <div className='absolute -top-32 group-hover:top-0 pt-8 transition-all duration-500 group-hover:bg-black/50 group-hover:h-[220px]'>
                                <h1 className='font-semibold text-white text-center'>Tanguar Haor</h1>
                                <p className='font-medium text-white text-center'>BDT:4200 Tk</p>
                                <p className='text-center text-white text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="relative inset-0 mx-auto w-[340px] group md:w-[250px]  lg:w-[280px] h-[220px] overflow-hidden">
                            <Image src={ban} alt="Packages" fill className="object-cover rounded-lg" />
                            <div className='absolute -top-32 group-hover:top-0 pt-8 transition-all duration-500 group-hover:bg-black/50 group-hover:h-[220px]'>
                                <h1 className='font-semibold text-white text-center'>Bandarban Tour</h1>
                                <p className='font-medium text-white text-center'>BDT:3300 Tk</p>
                                <p className='text-center text-white text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="relative mx-auto w-[340px] group md:w-[250px]  lg:w-[280px] h-[220px] overflow-hidden">
                            <Image src={cox} alt="Packages" fill className="object-cover rounded-lg" />
                            <div className='absolute -top-32 group-hover:top-0 pt-8 transition-all duration-500 bg-neutral-50 group-hover:bg-black/50 group-hover:h-[220px]'>
                                <h1 className='font-semibold text-white text-center'>Cox's Bazar</h1>
                                <p className='font-medium text-white text-center'>BDT:2000 Tk</p>
                                <p className='text-center text-white text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner