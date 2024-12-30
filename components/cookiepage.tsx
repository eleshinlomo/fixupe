'use client'
import {useState, useEffect} from 'react'
import { Button } from '@/components/ui/button'

const CookiePage = () => {
    const [showCookiepage, setShowCookiepage] = useState<boolean | any>(false)

useEffect(()=>{
const checkStatus = ()=>{
   
   const cookiepage: any = localStorage.getItem('cookiepage')
   if (cookiepage === true) {
    setShowCookiepage(true)
   }else{
    return
   }
}
 checkStatus()

}, [showCookiepage])

const handleCookiePage = ()=>{
    setShowCookiepage(false)
    localStorage.setItem('cookiepage', showCookiepage)
}

  return (
    <div className='absolute bottom-0 z-50 flex flex-col
    justify-start items-center text-white w-full'>
        
        {showCookiepage === true ?
            
        <div className='md:flex bg-black px-8 py-8'>
            <p>We use cookies to understand your use of this website. Detailed information about the use of cookies on this website and how you can manage your consent at any time can be found in our Cookie Policy. 
                By clicking “Accept”, you consent to the use of ALL the cookies.</p>
        

        <Button className='bg-blue-500' onClick={handleCookiePage}>Accept</Button>
        </div>: null
       }
    </div>
  )
}

export default CookiePage