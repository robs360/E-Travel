import Banner from "@/components/Home/Banner"
import FAQ from "@/components/Home/FAQ"
import Marketing from "@/components/Home/Marketing"

import SearchWay from "@/components/Home/SearchWay"
import Services from "@/components/Home/Services"

const Home=()=>{
    return(
        <div>
            <Banner></Banner>
            <SearchWay></SearchWay>
            <Services></Services>
            <Marketing></Marketing>
            <FAQ></FAQ>
        </div>
    )
}
export default Home