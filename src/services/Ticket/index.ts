'use server'

import { TTicket } from "@/types/types"

export const bookTicketHistory=async (payload:TTicket)=>{
    try{
        
        const res = await fetch(`${process.env.api_end_point}api/v1/ticket/`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(payload)
           })
           const ressult = await res.json()  
           return ressult
    }
    catch(err){
      console.log("it is err ",err)
    }
}