'use client'

import { userInfo } from 'os'
import React, {useState, useEffect, createContext, FormEvent} from 'react'


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
const [users, setUsers] = useState<any[] | null>([])
const [user, setUser] = useState<any | null>(null)
const [pageName, setPageName] = useState<string>('')



useEffect(()=>{

  const getUser = ()=>{
    const getSavedUser = localStorage.getItem('user')
    if (getSavedUser === null || undefined) return
    const parsedUserArray: any[] = JSON.parse(getSavedUser)
    if (parsedUserArray.length > 0){
      setUsers(parsedUserArray)

    // Create user object
    if(users.length > 0){
      users.map((user)=>{
     
       const newUser = {userid: user.id, username: user.username}
       if(newUser !== null) {
         setUser(newUser)
         console.log('USER', user)
       }
      })
      
   }
    }else{
      console.log('No user array found')
      return
    }
 
  }
  getUser()
}, [])





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
    user
  
  }

 return (
   <GeneralContext.Provider value={value}>
    {children}
  </GeneralContext.Provider>
 )
  
}

