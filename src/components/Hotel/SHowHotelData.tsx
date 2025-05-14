import { ShowHotelDataProps } from "@/types/types"
import Loader from "../Loader/Loader"

const ShowHotelData=({loading}:ShowHotelDataProps)=>{
    
   return(
    <div>
        {
            loading?(<><Loader></Loader></>)
            :
            (<>
            
            </>)
        }
    </div>
   )
}
export default ShowHotelData