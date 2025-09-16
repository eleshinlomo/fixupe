"use client"
import {useState, useEffect} from 'react'
import { LogOutIcon, Menu } from "lucide-react"
import { Button } from "../ui/button"
import DashMobileSidebar from "./dashmobilesidebar"
import Link from 'next/link'
// import ProfileAvatar  from './profile-avatar'
// Auth Functions
import { userLogout } from '../auth'
// UserProfile
import { getUserProfile } from '../userprofile'
import DatePage from '../date/date'
import CreditPage from '@/app/(allroutes)/(protectedroutes)/creditpage'
import { motion } from 'framer-motion'
import Image from 'next/image'


interface DashNavProps {
  isLoggedIn: boolean;
  updateAuth: ()=>void;
}

const handleLogout = async ()=>{
  await userLogout()
}

export const DashNavbar = ({isLoggedIn}: DashNavProps) => {

const [isOpen, setIsOpen] = useState<boolean>(false)
const [userUsername, setUserUsername] = useState<null | any>(null)
const [userData, setUserData] = useState<null | any>(null)
const [company, setCompany] = useState<null | any>(null)


// User Profile Handler for Google login
const getUsername = ()=>{
if(typeof window !== 'undefined' || typeof window !==null){
  const userName = localStorage.getItem('username')
  setUserUsername(userName)
}
}

useEffect(()=>{
  getUsername()
}, [userUsername])

// User Profile Handler for Email login

const handleUserProfile = ()=>{
  const userprofile = getUserProfile()
  if (userprofile !==null){
    setUserData(userprofile)
  const {username, company} = userprofile
  
  setUserUsername(username)
  setCompany(company)
  }else{
    return
  }

}
useEffect(()=>{
handleUserProfile()
},[])

// Toggle Handler
const handleToggle = ()=>{
  
   setIsOpen(!isOpen)
}

  
  return (
    <div className=" px-2  pb-2">
      {/* Mobile */}
      <DashMobileSidebar />

      <div className='flex  justify-between items-center '>
        
        {/* Logo */}
        <a href='/'>
         <div className='relative h-8 w-12'>
          <Image src='/logos/logo.png' alt='logo' fill />
         </div>
         </a>

        <CreditPage />


        {/* User Profile */}
        <div className=''>


           {isOpen?
          <div>
            
            <div className='absolute right-6 bg-black text-white 
             flex flex-col
            p-4 z-50'>
              <p className='font-extrabold'>Hi {userUsername? userUsername[0].toUpperCase() + userUsername.slice(1): null}</p>
              <p>Company: {company?company:null}</p>
              <Button className=' my-1 px-12'>
              Change Password
              </Button>
              <Button className=' my-1 px-12'>
              Update Profile
              </Button>
              <div className=''>
              <Button className='w-full' onClick={handleLogout}>Logout</Button>
              </div>
              </div>

            </div>:null
          }
      </div>
            
           
        </div>

     <DatePage />
       
    </div>
  )
}

