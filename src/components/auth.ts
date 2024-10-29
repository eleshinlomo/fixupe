

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

  const response = await fetch(`${BASE_URL}/api/registeruser/`, {
    method: 'POST',
    mode: 'cors',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  })

  if(!response) throw new Error('No response from the server')
  const data = response.json()
  return data
}

// Get csrf token from headers(if available)
export const getCsrfTokenFromHeader  = ()=>{

  const cookies = document.cookie.split(';');
  document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith('csrftoken='))
    ?.split('=')[1];
    if(cookies === null) throw new Error('Csrf not found in headers')
  return  cookies;
}


// This fetches csrf before login
export const fetchCsrfTokenFromServer = async () => {
  const response = await fetch(`${BASE_URL}/api/getcsrf/`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',  // Important to include cookies
  });

  if (!response.ok) {
    throw new Error('Failed to fetch CSRF token');
  }

  // Extract CSRF token from cookies
  const csrfToken = getCsrfTokenFromHeader()

  if (!csrfToken) {
    throw new Error('CSRF token not found in cookies');
  }

  console.log(`CSRF Token: ${csrfToken}`);
  return csrfToken;
};





// Login
export const loginApi = async ({payload})=>{
  const csrf = JSON.stringify( await fetchCsrfTokenFromServer())
  if(!csrf) throw new Error('csrf token not found')
  try{
 console.log('CSRF FOUND IN LOGIN', csrf)
 const response = await fetch(`${BASE_URL}/api/loginuser/`, {
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
  headers: {
    
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRFToken': csrf
    

  },
  body: JSON.stringify(payload)
 })

 if(!response) throw new Error('No response from server')
  const data: any = await response.json()
  return data
}catch(err){
  console.log(err)
}
}






// Login Checker
export const loginChecker = async ()=>{
  const csrf = JSON.stringify(getCsrfTokenFromHeader())
  if(!csrf) return
  console.log('CSRF FOUND IN LOGIN CHECKER', csrf)
  const response = await fetch(`${BASE_URL}/api/loginchecker/`, {
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-csrftoken': csrf

    },
    
  })

  if(!response) throw new Error('No response from server')
  const data = await response.json()
  console.log(data)
  return data
}

// Delete a cookie
export const deleteCookie = (cookieName) => {
  document.cookie = `${cookieName}=; Max-Age=0; path=/; domain=localhost; SameSite=Strict;`;
};

// Logout
export const logoutApi = async ()=>{
  const csrf = JSON.stringify(getCsrfTokenFromHeader())
  if(!csrf) return 'csrf token not found'
  const response = await fetch(`${BASE_URL}/api/logoutuser/`, {
   method: 'POST',
   mode: 'cors',
   headers: {
     
     'Content-Type': 'application/json',
     'X-csrfToken': csrf
     
   },
   body: JSON.stringify({'message': 'Logging out'})
  })
 
  if(!response) throw new Error('No response from server')
   const data: any = await response.json()
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('user')
    deleteCookie('csrftoken')
    deleteCookie('session')
    window.location.href = '/authpages/logoutlandingpage'
    return
   
 }
 
 





