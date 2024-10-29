

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
export const getCsrfToken  = ()=>{

  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'csrftoken') return value;
  }
  return null;
}


// This fetches csrf before login
export const fetchCsrfToken = async () => {
  const response = await fetch(`${BASE_URL}/api/getcsrf/`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',  // Ensure cookies are included
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch CSRF token');
  }

  // Try to extract the CSRF token from the headers
  const csrfToken = response.headers.get('csrftoken');  // Replace with the correct header name
  console.log(`CSRF Token from Header: ${csrfToken}`);

  if (!csrfToken) {
    throw new Error('CSRF token not found in headers');
  }

  return csrfToken;
};




// Login
export const loginApi = async ({payload})=>{
  const csrf = await fetchCsrfToken()
  if(!csrf) throw new Error('csrf token not found')
  try{
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
  const csrf = getCsrfToken()
  if(!csrf) return
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
  const csrf = await fetchCsrfToken()
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
 
 





