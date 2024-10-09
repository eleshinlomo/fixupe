import { ChangeEvent } from "react"





const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    
export const Waitlist = async (e: React.FormEvent<HTMLFormElement>, name: string, email: string)=>{

  e.preventDefault()
  try{

    const payload = {
      email,
      name
    }

     console.log(BASE_URL)
    const response: any = await fetch(`${BASE_URL}/waitlist/`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if(!response) throw new Error('No response from server')
      const data = await response.json()
    console.log(data)
      return data
  }catch(err){
   console.log('Error', err)
  }


}



