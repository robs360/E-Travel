

import Search from '@/components/Home/Search';
import banner from '../../../assets/hero-section.webp'

const BusTicket = () => {
    const bannerStyle = {
        backgroundImage: `url(${banner.src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '330px',
        width: '100%',
      };
      
    return (    
       <div>
         <div style={bannerStyle} className='mt-1 bg-cover flex items-center justify-center'>
            <div className='hidden lg:flex items-center justify-center '>
            <Search></Search>
            </div>
        </div>
        <div className='lg:hidden mt-5'>
        <Search></Search>
        </div>
       </div>
    )
}
export default BusTicket
