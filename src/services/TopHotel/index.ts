'use server'

export const getTopHotel = async () => {
    try {
        const res = await fetch(`${process.env.api_end_point}api/v1/top`, {
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
        console.log(err)
    }
}