

export interface LoginProps {
  email: string;
  password: string
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL


export const passMatch = ({password, repassword})=>{
  if(password !== repassword){
    return 'Password must match'
  }
  return null
}


export const registerAPI = async ({payload})=>{

  const response = await fetch(`${BASE_URL}/registeruser/`, {
    method: 'POST',
    mode: 'cors',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  })

  if(!response) throw new Error('No response from the server')
  const data = response.json()
  return data
}


// Login
export const loginApi = async ({payload})=>{
  
 const response = await fetch(`${BASE_URL}/loginuser/`, {
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',

  },
  body: JSON.stringify(payload)
 })

 if(!response) throw new Error('No response from server')
  const data: any = await response.json()
  return data
}


// Get csrf token
export const getCsrfToken  = ()=>{

  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'csrftoken') return value;
  }
  return null;
}

// Login Checker
export const loginChecker = async ()=>{
  
  const response = await fetch(`${BASE_URL}/loginchecker/`, {
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'X-csrftoken': csrf

    },
    credentials: 'include',
  })

  if(!response) throw new Error('No response from server')
  const data = await response.json()
  console.log(data)
  return data
}

// Utility to delete a cookie
const deleteCookie = (name) => {
  document.cookie = `${name}=; Max-Age=0; path=/; domain=localhost; SameSite=Strict;`;
};

// Logout
export const logoutApi = async ()=>{
  const csrf = getCsrfToken()
  if(!csrf) return 'Missing csrf'
  const response = await fetch(`${BASE_URL}/logoutuser/`, {
   method: 'POST',
   mode: 'cors',
   credentials: 'include',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'X-csrftoken': csrf
 
   },
   body: JSON.stringify({'message': 'Logging out'})
  })
 
  if(!response) throw new Error('No response from server')
   const data: any = await response.json()
    localStorage.removeItem('isLoggedIn')
    deleteCookie('csrftoken')
    window.location.href = '/authpages/logoutlandingpage'
   
 }
 
 





