
import GetData from '@/components/Hotel/GetData';
import banner from '../../../assets/hotel_image.webp'
const HotelBook = () => {
  
    const bannerStyle = {
        backgroundImage: `url(${banner.src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
    };
    return (
      <div>
          <div style={bannerStyle} className='mt-1 bg-cover h-[200px] md:h-[270px] lg:h-[350px] flex p-3 items-center justify-center'>
              <h1 className='text-3xl text-center md:text-4xl font-semibold text-white uppercase'>
               Enjoy every moment <br /> of 
                your adventure
              </h1>
        </div>
           <GetData></GetData>     
      </div>
    )
}
export default HotelBook