import { Info, ShieldCheck, Utensils } from "lucide-react";
import { FaBus, FaHotel, FaTrain } from "react-icons/fa";

const Services = () => {
  return (
    <div className="w-full bg-[#f6f9f9] px-4 py-20 mt-10">
      <h1 className="text-center text-orange-400 text-xl font-semibold mb-4 uppercase">
        A one-stop solution for your travel needs
      </h1>
      <h2 className="text-center text-green-500 text-3xl md:text-4xl font-bold mb-16">
        Introducing you to the Shohoz way of life
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-[92%] mx-auto">
        {/* Service Card */}
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="bg-green-100 p-4 rounded-full">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {service.title} <span className="text-green-500">{service.highlight}</span>
            </h3>
            <p className="text-gray-500 text-[15px]">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

// Service data separated for cleaner structure
const services = [
  {
    icon: <FaBus className="text-3xl text-green-500" />,
    title: "Bus",
    highlight: "Ticket",
    description: "No more queuing at counters. Tickets of 100+ bus operators available online.",
  },
  {
    icon: <FaTrain className="text-3xl text-green-500" />,
    title: "Train",
    highlight: "Ticket",
    description: "Now book your train tickets for domestic travel in Bangladesh.",
  },
  {
    icon: <FaHotel className="text-3xl text-green-500" />,
    title: "Hotel",
    highlight: "Book",
    description: "Book hotels easily and enjoy amazing travel experiences.",
  },
  {
    icon: <ShieldCheck className="text-3xl text-green-500" />,
    title: "Guidance",
    highlight: "Service",
    description: "Get expert advice for a smooth and safe journey every time.",
  },
  {
    icon: <Utensils className="text-3xl text-green-500" />,
    title: "Food",
    highlight: "Service",
    description: "Delicious meals delivered during your trips for a comfortable ride.",
  },
  {
    icon: <Info className="text-3xl text-green-500" />,
    title: "Provides",
    highlight: "Info",
    description: "Helpful travel updates and important information at your fingertips.",
  },
];
