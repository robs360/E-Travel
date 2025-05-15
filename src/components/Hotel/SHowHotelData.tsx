'use client'
import { ShowHotelDataProps } from "@/types/types"
import Loader from "../Loader/Loader"
import { useState } from "react"
import { hotelDescriptions } from "@/types/types"
import { Button } from "../ui/button"
import Image from "next/image"
import hotel from '../../assets/hotelcart.webp'
import { MapPin } from "lucide-react"
import { FaStar } from "react-icons/fa"
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
const ShowHotelData = ({ loading}: ShowHotelDataProps) => {
    const [counter, setCounter] = useState(6)
    const hotelInfo = useSelector((state: RootState) => state.hotelinfo.hotelCounter);
    console.log(hotelInfo)
    return (

        <div className="mt-16 w-full">

            {
                loading ? (<><Loader></Loader></>)
                    :
                    (<>
                        {
                            hotelInfo?.slice(0, counter).map((item: any, index) => {
                                const addressArray = item.formattedAddress.split(',').map((item: any) => item.trim());
                                let num = index % 20
                                let price = 2120 + Math.floor(Math.random() * 1000) + 1;
                               
                                return (
                                    <div
                                        key={index}
                                        className="my-8 flex flex-col md:flex-row w-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-3 md:p-4 rounded-xl bg-white"
                                    >
                                        <Image
                                            className="rounded-lg object-cover w-full md:w-[210px] h-[200px] mb-4 md:mb-0 md:mr-4"
                                            src={hotel}
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
                                                    <span>{addressArray[0]}</span>
                                                </div>

                                                <p className="text-gray-500 text-sm md:text-base">
                                                    {hotelDescriptions[num]}
                                                </p>
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
                        <div>
                            {
                                counter > 6 ? (<><Button className="bg-green-600" onClick={() => setCounter(6)}>See Less</Button></>) : (<>
                                    <Button className="bg-green-600" onClick={() => setCounter(hotelInfo.length)}>See All</Button>
                                </>)
                            }
                        </div>
                    </>)
            }
        </div>

    )
}
export default ShowHotelData


//  <Image
//                                     src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photos[0].photo_reference}&key=AIzaSyBkXIkjoBAhXCnCGk4HlBTx_ws0YdDrfjk`}
//                                     width={300}
//                                     height={200}
//                                     alt="place photo"
//                                     unoptimized={true}
//                                     className="rounded-md object-cover"
//                                 />