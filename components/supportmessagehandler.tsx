
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const SupportMessageHandler = async (e: any, payload: any)=>{
    e.preventDefault()
    try{
    
     
    const response: any = await fetch(`${BASE_URL}/support/`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if(!response) throw new Error("Problem with Feedback server")
    const data = await response.json()
    if (data){
        return data
    }else{
      return data.error
    }
  
  }
  catch(err: any){
     console.log(err)
  }
  }
  