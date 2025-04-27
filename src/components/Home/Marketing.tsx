import Image from "next/image"
import market from '../../assets/marketing.webp'
const Marketing = () => {
    return (
        <div className="mt-16 p-5 flex flex-col md:flex-row justify-center gap-10 items-center">
            <div className="md:w-[420px] ">
                <h1 className="text-3xl md:text-4xl font-medium text-black">All your
                    <span className="text-green-500"> travel options</span> in one place</h1>
                <p className="text-[18px] mt-4">More than 1,000 trusted travel partners across trains, buses, flights, and launch so that you can focus on the journey.</p>
                <div className="flex gap-x-7 mt-4 ">
                    <div>
                        <h1 className="text-2xl font-medium text-green-500 uppercase">Ticket Sold</h1>
                        <p>90000+</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-medium text-green-500 uppercase">Happy User</h1>
                        <p>1000000+</p>
                    </div>

                </div>
            </div>
            <div>
                <Image src={market} width={400} height={200} alt="Marketing"></Image>
            </div>
        </div>
    )
}
export default Marketing