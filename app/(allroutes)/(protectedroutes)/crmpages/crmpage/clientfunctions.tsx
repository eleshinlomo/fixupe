
// CLIENT CRUD

export interface DataTypes {
    id:number,
    company: string,
    contact: string,
    email: string,
    mobile: string,
    followup: string,
    address: string,
    servicefee: string,
    status: "lead" | "in-talks" | "signed-contract" | "ongoing-contract",
  }



export interface DeleteProps {
  clientId: number;
}

export interface ModifyProps {
  clientid: number;
  company: string
}


const BASE_URL: any = process.env.NEXT_PUBLIC_BASE_URL


// Get sessionId
export const getSessionid = ()=>{
  if (typeof window !== 'undefined'){
  const sessionid: string | null = localStorage.getItem('sessionid')
  if (sessionid !== null || sessionid !== 'undefined'){
  return sessionid
  }
}else{
  return null
}
}


// Add Client
export const addClient = async (payload: DataTypes) => {
  try{
  const sessionid = getSessionid()
  if (!sessionid || sessionid === 'undefined' || sessionid === null) return
  const response = await fetch(`${BASE_URL}/registerclient/`, {
    mode: 'cors',
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "sessionid": sessionid
    },
    body: JSON.stringify(payload)
})
if (!response) throw new Error('No response from server')
const data: any = response.json()
if (data.ok){
  return data
}else {
  console.log(data.error)
  return data.error
}
  }
  catch(err){
    console.error(err)
  }
  }


// Fetch Client Data
export const getClients = async (sessionid: string)=>{
    
    try{
    if(!sessionid) return
    const response: any = await fetch(`${BASE_URL}/getclients/`, {
         mode: 'cors',
         method: 'GET',
         headers: {
            'Content-Type':'application/json',
            'sessionid': sessionid
        }
        
    })
    if(!response) return "Server error"

    const data = await response.json()
    if(data.ok === true){
        console.log(data)
        return data
    }else{
        console.log(data.error)
        return data.error
    }
}
catch(err){
    console.log(err)
}
}

// Total Clients
export const getTotalClients = async ()=>{
  const sessionid = getSessionid()
  if (!sessionid) return 'Totalclient not found. Suspicious authentication'
  const response = await getClients(sessionid)
  const allClients = response.data
  if (allClients && allClients.length > 0){
   const totalClients = allClients.length
   return totalClients
  }else{
    return 0
  }
}


  // Client Delete
  export const deleteClient = async (clientId: number)=>{
  
    if(!clientId) return
    try{
    
    const response: any = await fetch(`${BASE_URL}/deleteclient/`, {
      method: 'DELETE',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
  
      },
      body: JSON.stringify({clientId})
    })
    if(!response)throw new Error("No response from server")
    const dataResponse = await response.json()
    if(dataResponse){
        return dataResponse
    }else{
      console.log(dataResponse.error)
      return dataResponse.error
    }
  }
  catch(err: any){
    console.log(err)
  }
  }
  
  
  //   Client Modify
  export const modifyClient = async ({clientid, company}: ModifyProps)=>{
  
    const sessionid = localStorage.getItem('sessionid')
    if (!sessionid || sessionid === 'undefined' || sessionid === null) return console.error('sessionid not found')
    if(!clientid) return

    const payload = {
      clientid: clientid,
      company: company
    }

    try{
    
    const response: any = await fetch(`${BASE_URL}/modifyclient/`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
  
      },
      body: JSON.stringify(payload)
    })
    if(!response)throw new Error("No response from server")
    const dataResponse = await response.json()
    if(dataResponse){
        return dataResponse
    }else{
      console.log(dataResponse.error)
      return dataResponse.error
    }
  }
  catch(err: any){
    console.log(err)
  }
  }
  

  

