import Banner from "@/components/Home/Banner"
import Company from "@/components/Home/Comapny"
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
            <Company></Company>
            <Marketing></Marketing>
            <FAQ></FAQ>
        </div>
    )
}
export default Home