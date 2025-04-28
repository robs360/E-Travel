import Footer from "@/components/Shared/Footer"
import NavBar from "@/components/Shared/NavBar"
import { Tsession } from "@/types/types"
import { authOptions } from "@/utils/authOption"
import { getServerSession } from "next-auth"

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
    const session:Tsession|null=await getServerSession(authOptions)
    console.log(session)
    return (
        <div>
            <NavBar session={session}></NavBar>
            {children}
            <Footer></Footer>
        </div>
    )
}
export default CommonLayout