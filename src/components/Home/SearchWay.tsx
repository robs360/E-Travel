import { CreditCard, List, Search } from "lucide-react"

const SearchWay=()=>{
    return(
        <div className="mt-10">
           <h1 className="text-green-500 text-3xl font-medium text-center">Buy tickets 
            <span className="text-black"> in 3 easy steps</span></h1>
            <div className="mt-7 flex flex-col md:flex-row justify-center md:items-center p-4 gap-1 gap-y-6 md:gap-y-2">
                <div className="flex gap-2 items-center ">
                    <Search className="size-15"></Search>
                    <div>
                       <h1 className="text-2xl font-medium">Search</h1>
                       <p className="text-gray-400 text-sm">Choose your origin, destination, journey
                         dates</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                <List className="size-15"></List>
                    <div>
                       <h1 className="text-2xl font-medium">List</h1>
                       <p className="text-gray-400 text-sm">Select your desired trip and choose your seats</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                <CreditCard className="size-15"></CreditCard>
                <div>
                       <h1 className="text-2xl font-medium">Pay</h1>
                       <p className="text-gray-400 text-sm">Pay by bank cards or mobile banking</p>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default SearchWay