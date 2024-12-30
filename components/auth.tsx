// @ts-ignore


interface EmailLoginProps {
  email: string,
  password: string
}

interface RegisterUserProps {
  
  username: string;
  email: string;
  password: string;
  usersource: string;
  company: string;
}

export interface GoogleAccessParamsProps {
  client_id: string;
  redirect_uri: string;
  response_type: string;
  scope: string;
  include_granted_scopes: string;
  state: string;
}

export interface AuthTokenProp {
  authCode: string | null | 'undefined'
}

export interface LoginCheckerProps {
  sessionid?: string | null;
  accessToken?: string | null;
  error?: string | React.ReactNode
}




// URLs
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
// const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
// const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET
// const AUTH_USER_REDIRECT_URL = process.env.NEXT_PUBLIC_AUTH_USER_REDIRECT_URL
console.log('BASE URL', BASE_URL)


// const clientId = `${CLIENT_ID}`;
// const redirectUri = `${AUTH_USER_REDIRECT_URL}`;
// const scope = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.metadata.readonly';
// const responseType = 'code';

// Get Google Code URL
// export const googleAuthCodeUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

   

// Get Access Token
// export const getGoogleAccessToken = async (authCode: string)=>{

//   const google_params = {

//     client_id: `${CLIENT_ID}`,
//     client_secret: `${CLIENT_SECRET}`,
//     redirect_uri: `${AUTH_USER_REDIRECT_URL}`,
//     grant_type: 'authorization_code',
//     code: authCode,
//     state: 'pass-through value'
  
//   }

//   try{
  
//   const response: any = await fetch(`https://oauth2.googleapis.com/token`, {
//     method: 'POST',
//     headers: {
//       "Content-Type": 'application/x-www-form-urlencoded',
//     },
//     body: new URLSearchParams(google_params).toString(),
//   })
 
//   if (!response.ok) {
//     console.log("Error response", response);
//     throw new Error(`Error: ${response.statusText}`);
//   }

//   const data = await response.json();
//   return data;

  
// }
// catch (error) {
//   console.error("Server error", error);
//   return null;
// }
// }


// Get Google User Info
export const getGoogleUserInfo = async (accessToken: string) => {
  if(!accessToken) return
  try {
    const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log("Error fetching user info", errorData);
      throw new Error(`Error: ${response.statusText}`);
    }

    const userInfo = await response.json();
    console.log('Google User Info', userInfo)
    return userInfo;
  } catch (error) {
    console.error("Error fetching user info", error);
    return null;
  }
};



    

// Register user with email
export const registerUserWithEmail = async (payload: RegisterUserProps)=>{
  try{
    const response = await fetch(`${BASE_URL}/registeruser/`, {
        mode: 'cors',
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    })
  
    const data: any = await response.json()
    if(!response.ok) return {"error": "No response from server"}
  
     if(data.ok){
      return data
     }else{
      return data.error
     }
  }
  catch(error: any){
  console.log('Server error', error)
  return null
  
  }
  
  }


// Email Login
export const emailLogin = async (payload: EmailLoginProps)=>{
try{
  const response = await fetch(`${BASE_URL}/loginuser/`, {
      mode: 'cors',
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload)
  })

  if(!response.ok) return {"error": "No response from server"}

  const data: any = await response.json()
  
  if(data.ok){

    const {userid, username, email, sessionid, company} = data.data
    localStorage.setItem('userid', userid)
    localStorage.setItem('username', username)
    localStorage.setItem('email', email)
    localStorage.setItem('sessionid', sessionid)
    localStorage.setItem('company', company)
    return data
  }else{
    return data.error
  }
  
}
catch(error: any){
console.log(error)
return null

}

}


 // General Login Checker
 export const loginChecker =  async ()=>{
  const sessionid = localStorage.getItem('sessionid')
  try{
  // Sessionid
  if(!sessionid) throw new Error('No sessionid found')
   const response = await fetch(`${BASE_URL}/loginchecker/`, {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
     'sessionid': sessionid
    }
 })

 if(!response) throw new Error('Server error')

 const data: any = await response.json()
  return data
  

}
  catch(err){
   console.log(err)
   return err
  }
 }
 
  
    

  // Logout
  export const userLogout = async ()=>{

    const response: any = await fetch(`${BASE_URL}/logoutapi/`, {
      mode: 'cors',
      method: 'POST',
      headers: {'Content-Type': 'application/json'}

    })
    if (! response) throw new Error('Server error')
    const data = await response.json()
    if (data.ok){
    console.log(data)
    localStorage.removeItem('username')
    localStorage.removeItem('userid')
    localStorage.removeItem('sessionid')
    localStorage.removeItem('credits')
    localStorage.removeItem('company')
    localStorage.removeItem('email')
    localStorage.removeItem('accessToken')
    window.location.href=`/`
    return data
   }else{
    console.log(response.error)
    return response
   }
    
    }


// Password reset link
export const getPasswordResetLink = async (email: string)=>{
  try{
    const response = await fetch(`${BASE_URL}/passwordresetlink/`, {
        mode: 'cors',
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email})
    })
  
    if(!response.ok) return {"error": "No response from server"}
    const data: any = await response.json()
   
     if(data.ok){
      return data
     }else{
      return data.error
     }
  }
  catch(error: any){
  console.log('Server error', error)
  return null
  
  }
  
  }







   
  

 
  


    

   



 

 




