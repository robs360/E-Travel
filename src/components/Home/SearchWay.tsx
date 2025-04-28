import { CreditCard, List, Search } from "lucide-react";

const SearchWay = () => {
  return (
    <div className="mt-20 px-4">
      <h1 className="text-green-500 text-3xl md:text-4xl font-bold text-center mb-10">
        Buy tickets <span className="text-black">in 3 easy steps</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="bg-green-100 p-4 rounded-full">
            <Search className="size-10 text-green-500" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Search</h2>
            <p className="text-gray-500 text-sm max-w-[220px]">
              Choose your origin, destination, and journey dates.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="bg-green-100 p-4 rounded-full">
            <List className="size-10 text-green-500" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">List</h2>
            <p className="text-gray-500 text-sm max-w-[220px]">
              Select your desired trip and choose your seats.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="bg-green-100 p-4 rounded-full">
            <CreditCard className="size-10 text-green-500" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Pay</h2>
            <p className="text-gray-500 text-sm max-w-[220px]">
              Pay securely by bank cards or mobile banking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWay;
