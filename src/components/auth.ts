

interface SigninProps {
  email: string;
  password: string
}

const BASE_URL = ''



export const signin = async ({email, password}: SigninProps )=>{

  const payload = {
    email,
    password
  }
 const response = await fetch(`${BASE_URL}/login`, {
  mode: 'cors',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(payload)
 })

 if(!response) throw new Error('No response from server')
  const data: any = response.json()
  return data
}