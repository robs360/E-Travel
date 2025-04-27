import Banner from "@/components/Home/Banner"
import FAQ from "@/components/Home/FAQ"
import Marketing from "@/components/Home/Marketing"
import Search from "@/components/Home/Search"
import SearchWay from "@/components/Home/SearchWay"
import Services from "@/components/Home/Services"

const Home=()=>{
    return(
        <div>
            <Banner></Banner>
            <div className="flex md:hidden mt-2">
                <Search></Search>
            </div>
            <SearchWay></SearchWay>
            <Services></Services>
            <Marketing></Marketing>
            <FAQ></FAQ>
        </div>
    )
}
export default Home