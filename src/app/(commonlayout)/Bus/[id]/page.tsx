
import SeatPlan from "@/components/Ticket/SeatPlan"
import TicketDetails from "@/components/Ticket/TicketDetails"
const BookTicket = () => {
    return (
        <div className="mx-auto mt-8 min-h-[80vh] p-5 md:p-8
         bg-gray-100/50 rounded-3xl border-t-[3px] w-[98%] md:w-[94%] border-green-400">
           <TicketDetails></TicketDetails>
            <SeatPlan></SeatPlan>
        </div>
    )
}
export default BookTicket