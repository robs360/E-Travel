import Link from 'next/link';
import banner from '../../assets/banner.png';
import { Button } from '../ui/button';

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div
      style={bannerStyle}
      className="flex justify-center items-center w-full h-[380px] md:h-[450px] lg:h-[600px] px-4"
    >
      <div className="text-center space-y-3 bg-black/40 p-4 rounded-xl">
        <h1 className="text-[34px] md:text-5xl font-bold text-white uppercase tracking-wide">
          End-to-End Travel
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-green-400">
          Where Every Journey Starts
        </h2>
        <p className="text-sm md:text-base text-gray-100 font-medium">
          Find the perfect getaway, tailored just for you. Adventure awaits around every corner.
          <br className="hidden md:block" />
          Let's make your dreams a reality.
        </p>
        <Link href={'/Bus'}><Button className="text-[16px] md:text-[18px] bg-green-500 hover:bg-green-600 font-semibold mt-4">
          Buy Ticket
        </Button></Link>
      </div>
    </div>
  );
};

export default Banner;
