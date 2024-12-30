"use client"

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { ArrowLeftSquareIcon, XIcon } from "lucide-react"
import SignInForm from "../signinform"


interface SignPageProps {
  signInPageLoaded: boolean
}


// URLs
const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL

const SignInPage = ()=>{

  return (
  <div>
    
   <div className="h-full  md:flex flex-col  justify-around w-full
   items-center gap-3 pt-2 ">
  
          
              
              <div className=" flex flex-col  
              gap-2  w-full ">
                {/* Top Content */}
              <div className="flex flex-col justify-center items-center ">
              <Link href='/' className="text-center justify-center  flex flex-1 w-full text-3xl">
              <ArrowLeftSquareIcon className="mt-5  text-3xl" />
              <p className="  py-4">MYAFROS CRM</p>
              </Link>
              <div className="flex flex-1 gap-3">
              <p className="mt-1 ">Not Registered?</p>
                <Button size='sm'  className='bg-blue-500 hover:bg-blue-500 rounded-2xl text-white
                shadow-2xl  '>
                    <Link href='/authpages/signuppage'>
                    Sign Up
                    </Link>
                    </Button>
                </div>
              </div>

          </div>
        
       
        {/* Linkedin Button */}

        {/* <Button  className='border border-blue-500
          bg-white text-black hover:bg-white '>
         <Link href={`${ALLAUTH_BASE_URL}/accounts/login/`} 
         className="flex flex-1 justify-between">
          <div className="relative w-8 h-6">
          <Image src='/logos/linkedin_logo.png' alt='google logo' fill />
          </div>
         Sign in with Linkedin
          </Link>
        </Button> */}
        

       
        {/* Email */}
        <div className="">
        <SignInForm />
        </div>

        </div>

        </div>
      
  )
}

export default SignInPage
