import { fetchCsrfToken, getCsrfToken, loginApi, loginChecker } from "@/components/auth";
import {useState, useEffect, useContext, FormEvent, createContext} from 'react'

const initialValues = {
  user: null,
  isLoggedIn: false,
  message: '',
  email: '',
  password: '',
  btnText: '',
  error: '',
  login: ()=>{},
  setEmail: (value: string)=>{},
  setPassword: (value: string)=>{},
}

export const AuthContext = createContext(initialValues)


export const AuthProvider = ({children})=>{

  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [message, setMessage] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [btnText, setBtnText] = useState('Sign in')
  const [loginInitiated, setLoginInitiated] = useState(false)


 

  const login = async ()=>{
  
    try{
    setMessage('Signing in...')
    setBtnText('Signing in...')
    const payload = {
      email,
      password
    }
     const response = await loginApi({payload})
     if(response.ok){
      setBtnText('Signed in')
      setEmail('Signed in')
      setPassword('')
      setError('')
      setLoginInitiated(true)
      
    }else{
  
      setError(response.error)
      console.log(response.error)
      setBtnText('Sign in')
      return
  
    }
  }catch(err){
    setMessage('Error with api call. Check console.')
    setBtnText('Sign in')
    console.log(error)
  }
  }


  const handleLoginChecker = async ()=>{
    const csrf = getCsrfToken()
    if(csrf === null) return
    const response = await loginChecker()
    if(response.ok){
      
      console.log(response)
      const userData = {
        userid : response.message.userid,
        username: response.message.username,
      }
      let newUser = []
      newUser.push(userData)
      localStorage.setItem('user', JSON.stringify(newUser))
      localStorage.setItem('isLoggedIn', JSON.stringify(response.message.isLoggedIn))
      setIsLoggedIn(JSON.parse(localStorage.getItem('isLoggedIn')))
      return
    }
     
    setIsLoggedIn(false)
    return
    
  }

  useEffect(()=>{
    handleLoginChecker()
  }, [loginInitiated])

  const values = {
    user,
    isLoggedIn,
    message,
    email,
    password,
    btnText,
    login,
    error,
    setEmail,
    setPassword,
  }

  return (

    <AuthContext.Provider value={values}>
    {children}
    </AuthContext.Provider>

    )
  
}