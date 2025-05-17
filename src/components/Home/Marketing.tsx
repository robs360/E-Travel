import Image from "next/image";
import market from '../../assets/marketing.webp';
import { Ticket, Users } from "lucide-react";

const Marketing = () => {
  return (
    <div className="mt-20 p-5 flex flex-col md:flex-row justify-center gap-10 items-center">
      {/* Text Content */}
      <div className="md:w-[420px] text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          All your <span className="text-green-500">travel options</span> in one place
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          More than 1,000 trusted travel partners across trains, buses, flights, and launches so that you can focus on the journey.
        </p>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-8 justify-center">
          <div className="bg-white p-6 shadow-lg rounded-xl border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-medium text-green-500 flex gap-x-2 items-center">
              <Ticket className="text-xl" /> Ticket Sold
            </h2>
            <p className="text-2xl font-bold text-gray-800 mt-2">90,000+</p>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-xl border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-medium text-green-500 flex gap-x-2 items-center">
              <Users className="text-xl" /> Happy Users
            </h2>
            <p className="text-2xl font-bold text-gray-800 mt-2">1,000,00+</p>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center md:w-[400px]">
        <Image src={market} width={400} height={250} alt="Marketing" />
      </div>
    </div>
  );
};

export default Marketing;
