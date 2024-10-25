'use client'

import { getCsrfToken,  loginApi } from '@/components/auth'
import React, {useState, useEffect, createContext, FormEvent} from 'react'
import { LoginProps } from '@/components/auth'
import { loginChecker } from '@/components/auth'

interface GeneralContextProps{
  children: React.ReactNode,
}


const initialValue = {
 username: '',
 validProducts: [],
 pageName: '',
 setPageName: (value: string)=>{},
 
}

export const GeneralContext = createContext(initialValue)



export const GeneralProvider = ({children}: GeneralContextProps)=>{

const [username, setUsername] = useState<string>('unknown')
const [message, setMessage] = useState<string>('Login to your account')
const [passResetMessage, setPassResetMessage,] = useState<string>('You will recieve a reset link if your email exist.')

const [pageName, setPageName] = useState<string>('')
const [user,setUser] = useState(null)
const [signInComplete, setSignInComplete] = useState(false)


const validProducts = [
  'camsecure',
  'teju'
]






  
  

  const value = {
    username,
    validProducts,
    passResetMessage,
    pageName,
    setPageName,
  
  }

 return (
   <GeneralContext.Provider value={value}>
    {children}
  </GeneralContext.Provider>
 )
  
}

