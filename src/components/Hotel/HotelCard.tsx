import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { hotelDescriptions, imageLink } from "@/types/types";
import hotel from '../../assets/hotel_image.webp'
import { Button } from "../ui/button";
const HotelCard = ({ hotelInfo, counter }: { hotelInfo: any, counter: number }) => {
    return (
        <div>
            {
                hotelInfo?.slice(0, counter).map((item: any, index: number) => {
                    const addressArray = item.formattedAddress.split(',').map((item: any) => item.trim());
                    let num = index % 20
                    let price = 2120 + Math.floor(Math.random() * 1000) + 1;
                    let randomNumber: number = Math.floor(Math.random() * 14);

                    return (
                        <div
                            key={index}
                            className="my-8 flex flex-col md:flex-row w-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-3 md:p-4 rounded-xl bg-white"
                        >
                            <Image
                                className="rounded-lg object-cover w-full md:w-[210px] h-[200px] mb-4 md:mb-0 md:mr-4"
                                src={imageLink[randomNumber]}
                                width={210}
                                height={200}
                                alt="Hotel Image"
                            />

                            <div className="flex justify-between flex-grow">
                                <div >
                                    <div className="flex items-center space-x-2 mb-2">
                                        <h1 className="md:text-xl font-semibold text-gray-800">
                                            {item?.displayName?.text}
                                        </h1>
                                        <div className="flex text-orange-300">
                                            <FaStar className="text-sm" />
                                            <FaStar className="text-sm" />
                                        </div>
                                    </div>

                                    <div className="flex items-center text-gray-600 text-sm mb-2">
                                        <MapPin className="w-5 h-5 mr-1" />
                                        <div className="flex flex-col">
                                            <span>{addressArray[0]}</span>
                                            <span>{addressArray[1]}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-500 text-sm md:text-base">
                                        {hotelDescriptions[num]}
                                    </p>
                                    <div className="flex text-sm mt-3 space-x-1">
                                        <Phone className="size-5"></Phone>
                                        <p>{item.internationalPhoneNumber}</p>
                                    </div>
                                </div>

                                <div className="mt-4 md:mt-0 ml-2 flex flex-col md:items-end md:justify-between md:w-[200px]">
                                    <div className="flex items-center space-x-1.5 mb-4">
                                        <h1 className="text-sm font-medium text-gray-700">Pleasant</h1>
                                        <div className="p-1 text-sm font-semibold text-white rounded-md bg-green-600">
                                            {item.rating}
                                        </div>
                                    </div>

                                    <div className="text-right mb-4">
                                        <p className="text-sm text-gray-500">Price From</p>
                                        <h1 className="text-[18px] lg:text-xl font-bold text-green-600">BDT {price}</h1>
                                        <p className="text-sm text-gray-500">1 Night</p>
                                    </div>

                                    <Button className="w-full md:w-auto bg-green-600 hover:bg-green-700 transition-colors duration-200 font-semibold text-white px-2 py-1 rounded-lg">
                                        Book Now
                                    </Button>
                                </div>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default HotelCard