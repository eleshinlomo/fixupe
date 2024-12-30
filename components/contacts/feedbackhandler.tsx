
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const FeedbackHandler = async (e: any, feedback: any)=>{
    e.preventDefault()
    try{
    
    const payload = {
      feedback
    }
     
    const response: any = await fetch(`${BASE_URL}/feedback/`, {
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
  