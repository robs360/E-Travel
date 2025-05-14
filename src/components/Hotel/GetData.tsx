'use client'
import { useState } from "react"
import { Button } from "../ui/button"
import ShowHotelData from "./SHowHotelData"

const GetData = () => {
    const [queryText, setQueryText] = useState('')
    const [info, setInfo] = useState<any[]>([])
    const [loading, setLoading] = useState(false);
    
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
        } catch (err) {
            console.error('Search error:', err);
        } finally {
            setLoading(false);
        }
    }
    console.log(info)
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
            <ShowHotelData loading={loading}></ShowHotelData>
        </div>

    )
}
export default GetData