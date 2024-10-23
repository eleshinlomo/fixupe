import { loginChecker } from "@/components/auth";
import { createContext } from "react";
import {useState, useEffect} from 'react'

const initialValues = {
  user: null,
  isLoggedIn: false
}

export const AuthContext = createContext(initialValues)


export const AuthProvider = ({children})=>{

  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginChecker = async ()=>{

    const response = await loginChecker()
    if(response.ok){
      console.log(response)
      localStorage.setItem('isLoggedIn', JSON.stringify(response.message.isLoggedIn))
      setIsLoggedIn(JSON.parse(localStorage.getItem('isLoggedIn')))
      return
    }
     
    setIsLoggedIn(false)
    return
    
  }

  useEffect(()=>{
    handleLoginChecker()
  }, [isLoggedIn])

  const values = {
    user,
    isLoggedIn
  }

  return (

    <AuthContext.Provider value={values}>
    {children}
    </AuthContext.Provider>

    )
  
}