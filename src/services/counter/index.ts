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
        return Error(error);
    }
}