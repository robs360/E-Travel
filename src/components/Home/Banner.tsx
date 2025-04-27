
import banner from '../../assets/banner.png'
import Search from './Search'
const Banner = () => {
    const bannerStyle = {

        backgroundImage: `url(${banner.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div style={bannerStyle} className='flex justify-center items-center w-full h-[280px] md:h-[400px] lg:h-[550px]'>
            <div className='hidden md:flex'>
                <Search></Search>
            </div>
        </div>
    )
}
export default Banner