



const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL



  export const purchaseHandler = async (amount: string)=>{

    const sessionid = localStorage.getItem('sessionid')
  
    if(!sessionid) return
    try{
    const payload = {
      amount
    }
    const response: any = await fetch(`${BASE_URL}/purchasecredit/`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'sessionid': sessionid,
      },
      body: JSON.stringify(payload)
    })
    if(!response)throw new Error("No response from server")
    const dataResponse = await response.json()
    if(dataResponse){
      console.log(dataResponse)
        return dataResponse
    }else{
      console.log(dataResponse.message.error)
      return dataResponse.message.error
    }
  }
  catch(err: any){
    console.log(err)
  }
  }

 

  