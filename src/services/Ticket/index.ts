'use server'

import { TTicket } from "@/types/types"

export const bookTicketHistory = async (payload: TTicket) => {
    try {

        const res = await fetch(`${process.env.api_end_point}api/v1/ticket/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
        const ressult = await res.json()
        return ressult
    }
    catch (err) {
        console.log("it is err ", err)
    }
}
export const getTicketHistory = async (email: string) => {
    try {
        const res = await fetch(`${process.env.api_end_point}api/v1/ticket/${email}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
         if (!res.ok) {
            console.error("Failed to fetch reviews:", res.status, res.statusText);
            return []; // or return null
        }
        const ressult = await res.json()
        return ressult
    }
    catch (err) {
        console.log("it is err ", err)
    }
}

export const getReview = async () => {
    try {
        const res = await fetch(`${process.env.api_end_point}api/v1/review`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            console.error("Failed to fetch reviews:", res.status, res.statusText);
            return []; // or return null
        }

        const result = await res.json();
        return result;
    } catch (err) {
        console.error("Error fetching review:", err);
        return []; // or return null
    }
};
