
export interface CreateWaitListProps {

        // firstname: string;
        // lastname: string;
        // clientType: string;
        // numOfProperties: number;
        email: string;

}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL


export const createWaitList = async (payload: CreateWaitListProps)=>{
    const response = await fetch(`${BASE_URL}/prototype/waitlist`, {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })

    if(!response) return 'No response from server'
    const data = response.json()
    return data
}