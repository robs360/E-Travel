import { createSlice } from "@reduxjs/toolkit"

const initialState={
    hotelCounter:[]
}

export const hotelDataSlice=createSlice({
    name:'hotel',
    initialState,
    reducers:{
        addHotelData:(state,action)=>{
            state.hotelCounter=action.payload
        },
        clearHotelData:(state,action)=>{
            state.hotelCounter=[]
        }
    }
})
export const {addHotelData,clearHotelData}=hotelDataSlice.actions
export default hotelDataSlice.reducer