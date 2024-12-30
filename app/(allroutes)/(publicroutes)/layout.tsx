'use client'
import { loginChecker } from '@/components/auth'
import HomeNavbar from '@/components/navbars/homenavbar'
import React from 'react'
import {useState, useEffect} from 'react'


interface PublicRouteProps {

    children: React.ReactNode
}

const PublicRoutesLayout = ({children} : PublicRouteProps)=>{
 
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    const handleLoginChecker = async ()=>{
        const response: any = await loginChecker()
        if(response.ok){
            console.log(response)
            setIsLoggedIn(true)
        }else{
            console.log(response.error)
            setIsLoggedIn(false)
        }

    }

    useEffect(()=>{
        handleLoginChecker()
    }, [])

    return (
        <div>
         <HomeNavbar isLoggedIn={isLoggedIn} />
         {children}
        </div>
    )
}

export default PublicRoutesLayout