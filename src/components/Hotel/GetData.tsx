'use client'
import { useState } from "react"
import { Button } from "../ui/button"
import ShowHotelData from "./SHowHotelData"
import { addHotelData, clearHotelData } from "@/redux/features/hotelDataSlice"
import { useDispatch } from "react-redux"
import Review from "../Review/Review"
const GetData = () => {
    const [queryText, setQueryText] = useState('')
    const [info, setInfo] = useState<any[]>([])
    const [loading, setLoading] = useState(false);
    const dispatch=useDispatch()
    const handleSearch = async () => {
        if (!queryText) return;

        setLoading(true);
        try {
            const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Goog-Api-Key": process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
                    "X-Goog-FieldMask":
                        "places.displayName,places.formattedAddress,places.rating,places.priceLevel,places.websiteUri,places.internationalPhoneNumber,places.photos"
                },
                body: JSON.stringify({
                    textQuery: queryText
                })
            });

            const data = await response.json();
            setInfo(data.places);
            dispatch(addHotelData(data.places))
        } catch (err) {
            console.error('Search error:', err);
        } finally {
            setLoading(false);
        }
    }
    console.log(info)
     const handleClicked = () => {
        dispatch(clearHotelData([]))
    }
    return (
        <div>
            <div className="flex justify-center w-full px-4 py-6 bg-gradient-to-br from-orange-100 to-white">
                <div className="w-full max-w-4xl p-6 bg-white border-2 border-orange-300 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-4">

                    <input
                        type="text"

                        value={queryText}
                        placeholder="🔍 Search For Hotel "
                        onChange={(e) => setQueryText(e.target.value)}
                        className="flex-1 px-5 py-3 text-base text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200 w-full"
                    />

                    <Button onClick={handleSearch} className="w-full md:w-[160px] h-[50px] text-base font-semibold bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-md hover:from-green-600 hover:to-green-700 transition-all duration-200">
                        Search
                    </Button>

                </div>
            </div>
            <div className="flex flex-col md:flex-row  gap-3 p-3 md:p-4 max-w-[1200px] mx-auto">
                <div className='w-full md:w-[220px] mt-14'>
                    <h1 className='font-medium mb-2'>Default Search Here</h1>
                    <form action="" className='flex flex-row md:flex-col space-x-7 md:space-x-0.5'>
                        <label className="flex items-center gap-2 mb-2 text-sm font-light text-black cursor-pointer">
                            <input
                                type="radio"
                                name="field"
                                onChange={(e)=>setQueryText(e.target.value)}
                                value="Hotel In cox's Bazar"
                                className="hidden peer"
                            />
                            <div className="w-4 h-4 border border-gray-400 peer-checked:bg-blue-500 peer-checked:border-blue-500 rounded-[2px]"></div>
                            Cox's Bazar Hotel
                        </label>
                        <label className="flex items-center gap-2 mb-2 text-sm font-light text-black cursor-pointer">
                            <input
                                type="radio"
                                name="field"
                                onChange={(e)=>setQueryText(e.target.value)}
                                value="Hotel In Chittagong"
                                className="hidden peer"
                            />
                            <div className="w-4 h-4 border border-gray-400 peer-checked:bg-blue-500 peer-checked:border-blue-500"></div>
                            Hotel In Chittagong
                        </label>

                        <label className="flex items-center gap-2 mb-2 text-sm font-light text-black cursor-pointer">
                            <input
                                type="radio"
                                name="field"
                                onChange={(e)=>setQueryText(e.target.value)}
                                value="Hotel In Shyllet"
                                className="hidden peer"
                            />
                            <div className="w-4 h-4 border border-gray-400 peer-checked:bg-blue-500 peer-checked:border-blue-500"></div>
                            Hotel In Shyllet
                        </label>
                    </form>
                    <Button onClick={handleClicked} className='text-green-600 hover:bg-green-300 rounded-full bg-green-200 text-[13px] h-[24px] mt-3'>Clear Data</Button>
                </div>
                <div className="flex-grow">
                    <ShowHotelData loading={loading}></ShowHotelData>
                </div>
            </div>
            <Review></Review>
        </div>

    )
}
export default GetData