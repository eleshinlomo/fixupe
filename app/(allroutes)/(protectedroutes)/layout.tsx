"use client"
import {useState, useEffect} from 'react'
import Image from 'next/image'
// @ts-ignore
import { useSearchParams, usePathname} from 'next/navigation';
import type { Metadata } from 'next'
import { creditFunction } from '@/components/creditfunction';
// Auth Functions
// import { getGoogleAccessToken } from '@/components/auth';
import { getGoogleUserInfo } from '@/components/auth';
import { DashNavbar } from '@/components/navbars/dashnavbar';
import { useRouter } from 'next/navigation';
import HomeNavbar from '@/components/navbars/homenavbar';
import { LoginCheckerProps } from '@/components/auth';
import { loginChecker } from '@/components/auth';
import UserNotLoggedPage from '../(publicroutes)/authpages/usernotloggedinpage';






interface ProtectedRoutesProps {
    children: React.ReactNode
}



// Login Status
const checking ="Checking login status. Please wait..."

const ProtectedRoutesLayout = ({children}: ProtectedRoutesProps)=>{

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)
    const [isChecking, setIsChecking] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("Checking status")
    const [error, setError] = useState<string | any>("")
    const [username, setUsername] = useState<string | null>(null)
    const [sessionid, setSessionid] = useState<null | any>(null)
    

    
    const path = usePathname()
    const router = useRouter()
    const params = useSearchParams()
    
     
   
    const creditHandler = ()=>{
        creditFunction()
    }


//   Get google accessToken
//   const handleGetAccessToken =async ()=>{

//     const authCode: any = params?.get('code')
//     if(!authCode) return
//     const response = await getGoogleAccessToken(authCode)
//     if(response && response.access_token){
//     const gAccessToken = response.access_token
//     localStorage.setItem('accessToken', gAccessToken)
//     const userInfo = await getGoogleUserInfo(gAccessToken)
//     const username = userInfo.given_name
//     localStorage.setItem('username', username)
//     setIsLoggedIn(true)
//     }

//   }

//   useEffect(()=>{
//     handleGetAccessToken()
//   }, [])


//  Login Checker Handler
    const LoginCheckerHandler = async ()=>{
        try{
        setIsChecking(true)
        setMessage('Signing in...')
        const response: any = await loginChecker()
        if(response.ok){
            setIsLoggedIn(true)
            setMessage('')
        }else{
            setMessage(response.error)
            // setIsLoggedIn(false)
           }
       }
    catch(err){
        console.log(err)
        setError('Please sign in')
    }finally{
        setIsChecking(false)
        setError('Please sign in')
    } 
}
   

 useEffect(()=>{
    LoginCheckerHandler()
 }, [isLoggedIn, error, message])

    return(
         <div className=''>
            

             {isChecking ?
            <div>
             <div className='relative text-center animate-spin'>
             <Image src='/logo.png' alt='logo' fill />
             </div>
             
            </div>:null
            }

            { isLoggedIn ?
    
            <div className=''>
            <DashNavbar updateAuth={LoginCheckerHandler} isLoggedIn={isLoggedIn} />
            {children}
            </div>: 
            <div className='flex flex-col'>
            <HomeNavbar isLoggedIn={isLoggedIn} />
            <UserNotLoggedPage message={error? <a href='/authpages/signinpage' className='text-blue-500'>
            Please sign in</a> : message} />
            </div>
         } 

        </div>
    )
}


export default ProtectedRoutesLayout



