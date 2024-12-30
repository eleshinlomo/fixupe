
// Admin CRUD
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

interface AdminUserPayloadProps {
    userid: string,
    username: string,
    company: string
}


// Admin Delete
  export const adminDeleteUser = async (userid: string)=>{

    const sessionid = localStorage.getItem('sessionid')
  
    if(!userid) return
    try{
    
    const response: any = await fetch(`${BASE_URL}/admindeleteuser/`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
  
      },
      body: JSON.stringify({userid})
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


//   Admin Modify
  export const adminModifyUser = async (payload: AdminUserPayloadProps)=>{

    const sessionid = localStorage.getItem('sessionid')
     const {userid} = payload
    if(!userid) return
    try{
    
    const response: any = await fetch(`${BASE_URL}/adminmodifyuser/`, {
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
      console.log(dataResponse.message.error)
      return dataResponse.message.error
    }
  }
  catch(err: any){
    console.log(err)
  }
  }


// CLIENT CRUD

interface ClientPayloadProps {
  clientid: string,
  company: string,
  contact: string,
  email: string,
  mobile: string,
  phone: string,
  followup: string,
  address: string,
  servicefee: string,
  contractdoc: string
}
// Client Delete
export const deleteClient = async (clientid: string)=>{

  const sessionid = localStorage.getItem('sessionid')

  if(!clientid) return
  try{
  
  const response: any = await fetch(`${BASE_URL}/deleteclient/`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify({clientid})
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
export const modifyClient = async (payload: ClientPayloadProps)=>{

  const sessionid = localStorage.getItem('sessionid')
   const {clientid} = payload
  if(!clientid) return
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

 

  

 

  

 

  

 

  