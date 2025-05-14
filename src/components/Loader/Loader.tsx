const Loader = () => {
    return (
        <div className="flex justify-center items-center h-40">
            <div className="relative w-[70px] h-[70px]">

                <div className="absolute inset-0 rounded-full border-[3px] border-t-transparent border-r-transparent border-b-green-500 border-l-green-500 animate-spin bg-white shadow-md"></div>


                <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.8"
                    >
                        <path d="M4 6C4 4.343 5.343 3 7 3h10c1.657 0 3 1.343 3 3v10c0 1.104-.896 2-2 2v2a1 1 0 1 1-2 0v-2H8v2a1 1 0 1 1-2 0v-2c-1.104 0-2-.896-2-2V6z" />
                        <circle cx="7" cy="16.5" r="1" />
                        <circle cx="17" cy="16.5" r="1" />
                    </svg>
                </div>
            </div>
        </div>

    )
}
export default Loader