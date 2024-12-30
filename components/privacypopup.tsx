"use client"
import {useState, useEffect} from 'react'
import { Button } from "./ui/button"
import Link from 'next/link'


export const PrivacyPopup = ()=>{

    const [toggle, setToggle] = useState<boolean>(true)
    const saveUserVisit = ()=>{
        const userstate = "agreed"
        const userAgreedToPolicy = localStorage.setItem('visit', userstate)
        setToggle(false)
    }

    useEffect(()=>{
    const checkUserPolicyStatus = ()=>{
        const status = localStorage.getItem('visit')
        if (status === 'agreed'){
            setToggle(false)
        }
        setToggle(true)
    }
    checkUserPolicyStatus()
}, [])

    return (
        <div>
<div className='h-50  relative'>
{ toggle ?
            <div className="h-50  flex text-md
            flex-col bg-white fixed bottom-0 text-black justify-center items-center z-[100]
            py-2
            
            ">

            <div className='text-center text-sm px-2'>
<h2 className=''>Your privacy is important to us</h2>

This site uses first, technical and third party cookies to improve navigation performance, analyze visitor behavior and help us and our marketing partners measure campaign results and personalized advertising. By clicking Accept all, you agree to all these cookies. Cookie Policy .

We and our partners process data to:

Use precise geolocation data. 
Actively scan device attributes for identification. 
Store and/or access information on a device. 
Personalized ads and content, ad and content measurement, 
audience insights and product development. List of partners
</div>

<div className="my-5 flex flex-col gap-3">

<Button onClick={saveUserVisit} className=' bg-red-500'>
        Accept Everything
    </Button>
    <Button variant='ghost' asChild><Link href='/privacy'>Cookie Policy</Link></Button>
    </div>



</div>:null
}
</div>
</div>


    
        
    )
}