import { deleteCookie, fetchCsrfTokenFromServer, getCsrfTokenFromHeader, loginApi, loginChecker } from "@/components/auth";
import {useState, useEffect, useContext, FormEvent, createContext} from 'react'
import { useRouter } from "next/navigation";

const initialValues = {
  user: null,
  isLoggedIn: false,
  message: '',
  email: '',
  password: '',
  btnText: '',
  error: '',
  login: ()=>{},
  handleLoginChecker: ()=>{},
  setEmail: (value: string)=>{},
  setPassword: (value: string)=>{},
}

export const AuthContext = createContext(initialValues)


export const AuthProvider = ({children})=>{

  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [message, setMessage] = useState<string>('Please login')
  const [error, setError] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [btnText, setBtnText] = useState('Sign in')
  const [loginInitiated, setLoginInitiated] = useState(false)

 const router = useRouter()
 

  const login = async ()=>{
  
    try{
    setError('')
    setMessage('Signing in...')
    setBtnText('Signing in...')
    const payload = {
      email,
      password
    }
     const response = await loginApi({payload})
     if(response.ok){
      setBtnText('Waiting for login checker')
      setMessage('Waiting for login checker')
      setPassword('')
      setEmail('')
      setError('')
      setLoginInitiated(true)
      localStorage.setItem('isLoggedIn', JSON.stringify(response.message.isLoggedIn))
      setIsLoggedIn(JSON.parse(localStorage.getItem('isLoggedIn')))
      if(isLoggedIn)
        {
          await handleLoginChecker()
        }
      
      
      // router.push('/dashboard/dashboardpage')

      
      
    }else{
  
      setError(response.error)
      console.error(response.error)
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
    if(isLoggedIn && isLoggedIn === true) return
    setMessage('Checking csrf')
    const csrf = getCsrfTokenFromHeader()
    if(!csrf || csrf === '') {
      setMessage('Please login')
      return
    }
    console.log('CRSF TOKEN IN LOGIN CHECKER', csrf)
    setMessage('Checking authentication status')
    const response = await loginChecker()
    if(response.ok){
      
      console.log(response)
      const userData = {
        userid : response.message.userid,
        username: response.message.username,
      }
      // let newUser = []
      // newUser.push(userData)
      // localStorage.setItem('user', JSON.stringify(newUser))
      
    setIsLoggedIn(true)
      return
    }
  
     
    return
    
  }

  // This only persist and confirm loggedin users but will run without isLogged in the sign in function.
  useEffect(()=>{
      
      handleLoginChecker()

  
  },[])





  const values = {
    user,
    isLoggedIn,
    message,
    email,
    password,
    btnText,
    login,
    handleLoginChecker,
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