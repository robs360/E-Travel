'use server'

export const createCounter = async (counterData: any) => {
    try {
        const res = await fetch(`${process.env.api_end_point}/api/v1/counter/create`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(counterData)
        })
        const result = await res.json();
        return result

    }
    catch (error: any) {
        console.log(error)
    }
}

export const getCounter = async (from: string, to: string, date: Date) => {
    try {
        const dateString = date.toLocaleDateString("en-CA");
        
        const queryString = new URLSearchParams({
            from: from,
            to: to,
            date: dateString
        }).toString();
        
        
        console.log(`${process.env.api_end_point}/api/v1/counter?${queryString}`)
        const res = await fetch(`${process.env.api_end_point}api/v1/counter?${queryString}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })

        const ressult = await res.json()  
        return ressult

    }
    catch (err: any) {
        console.log("error happened")
    }
}