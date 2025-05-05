import TicketDownload from "@/components/Ticket/TicketDownload"
import { getTicketHistory } from "@/services/Ticket"

import { authOptions } from "@/utils/authOption"
import { getServerSession } from "next-auth"

const TicketHistory=async ()=>{
    const session= await getServerSession(authOptions)
    console.log(session?.user?.email)
    const res= await getTicketHistory(session?.user?.email as string)
    return(
        <div>
            <TicketDownload res={res}></TicketDownload>
        </div>
    )
}
export default TicketHistory