import { useState, useEffect } from 'react'
import  Link  from 'next/link'
import { Button } from '../ui/button'
import  Image  from 'next/image'
import { GOOGLE_LOGIN_URL } from '../urls'
import { GOOGLE_LOGOUT_URL } from '../urls'
import Waitlist from '../waitlist'
import { OtherHomeNavButtons } from './otherhomenavbuttons'
import { useRouter } from 'next/navigation'

//  Auth Functions
import { loginChecker } from '../auth'
import { userLogout } from '../auth'





// URLs
 // URLs
 const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL




export const HomeMobileNavBar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false)
  const [username, setUsername] = useState<string | null>(null)
  const [sessionid, setSessionid] = useState<null | any>(null)
  const router = useRouter()
    

  //  Login Checker Handler
 //  Login Checker Handler
 const handleLoginChecker = async ()=>{
  try{
  // Get sessionid and check validity
  const session_id = localStorage.getItem('sessionid')
  if (!session_id || session_id === null || session_id === 'undefined') throw new Error('Sessionid not found')
  setSessionid(session_id)
  const response = await loginChecker()
  if (response.ok){
  setUsername(localStorage.getItem('username'))
  setIsLoggedIn(true)
}
console.log(response.error)
}
catch(err){
  console.log(err)

}
 }

useEffect(()=>{
handleLoginChecker()
}, [])


  return (
    <div className='md:hidden'>
      <div className='flex flex-col flex-1 gap-4'>
        
        <Button size='icon' variant='outline' 
        onClick={()=>router.push('/')}>
        <div className='relative w-24 h-12'>
          <Image src='/logos/fixupe_logo.png' alt='logo' fill />
        </div>
        </Button>
        


        { isLoggedIn === true ?
        <div className='flex flex-col gap-3 mt-10'>
       <Button size='sm' onClick={userLogout}>
          Sign Out
        </Button>

        <OtherHomeNavButtons />

        <div className=''>
          <Waitlist />
         </div>

        </div>
        :
        <div className=' flex flex-col flex-1 gap-3 mt-5'>
        <Button className=' w-full'>
          <Link href='signuppage'>Sign up</Link></Button>

        <Button className=''>
            <Link href='/signinpage'>Sign In</Link>
        </Button>

        <div>
          <Waitlist />
         </div>

        </div>
         }

         
      </div>
    </div>
  )
}