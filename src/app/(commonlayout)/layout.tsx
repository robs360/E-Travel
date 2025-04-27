import Footer from "@/components/Shared/Footer"
import NavBar from "@/components/Shared/NavBar"

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
        </div>
    )
}
export default CommonLayout