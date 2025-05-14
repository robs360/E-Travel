'use client'
import { useState } from "react"
import { Button } from "../ui/button"


const GetData = () => {
    const [queryText, setQueryText] = useState('')
    const [info, setInfo] = useState<any[]>([])
    console.log(queryText)
    const handleSearch = () => {

    }
    return (
        <div className="flex justify-center w-full px-4 py-6 bg-gradient-to-br from-orange-100 to-white">
            <div className="w-full max-w-4xl p-6 bg-white border-2 border-orange-300 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-4">

                <input
                    type="text"
                    value={queryText}
                    placeholder="🔍 Search For Hotel "
                    onChange={(e) => setQueryText(e.target.value)}
                    className="flex-1 px-5 py-3 text-base text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200 w-full"
                />

                <Button className="w-full md:w-[160px] h-[50px] text-base font-semibold bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-md hover:from-green-600 hover:to-green-700 transition-all duration-200">
                    Search
                </Button>

            </div>
        </div>

    )
}
export default GetData