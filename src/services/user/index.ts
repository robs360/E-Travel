'use server'

import { Tuser } from "@/types/types"

export const RegisterUser = async (user: Tuser) => {
    try {
        const res = await fetch(`${process.env.api_end_point}api/v1/user/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        const ressult = await res.json()
        return ressult
    }
    catch (err) {
        console.log(err)
    }
}
