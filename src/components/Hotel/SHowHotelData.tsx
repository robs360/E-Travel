'use client'
import { ShowHotelDataProps } from "@/types/types"
import Loader from "../Loader/Loader"
import { useState } from "react"
import { Button } from "../ui/button"
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import HotelCard from "./HotelCard"
const ShowHotelData = ({ loading}: ShowHotelDataProps) => {
    const [counter, setCounter] = useState(6)
    const hotelInfo = useSelector((state: RootState) => state.hotelinfo.hotelCounter);
    
    return (

        <div className="mt-16 w-full">

            {
                loading ? (<><Loader></Loader></>)
                    :
                    (<>
                        <HotelCard hotelInfo={hotelInfo} counter={counter}></HotelCard>
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