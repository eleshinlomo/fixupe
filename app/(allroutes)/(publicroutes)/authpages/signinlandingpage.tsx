import {useState, useEffect} from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import Image from 'next/image'
import googleLogo from '@/public/logos/google_logo.png'
import myafrosLogo from '@/public/logos/logo.png'


interface SigninLandingpageProps {

  isSignInPageLoaded: boolean
}
const SigninLandingpage = () => {
  

  return (
    <div className="">
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' size='lg'
        className=" text-white bg-blue-500 hover:bg-blue-500 hover:text-white rounded-2xl w-full py-4 px-12" >Sign in</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-blue-500 text-white text-center">
        <DialogHeader>
          <DialogTitle className='text-center'>Sign in</DialogTitle>
          <DialogDescription className='text-center'>
            How would you like to sign in?
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col justify-center items-center">

          {/* Google Button */}
        {/* <Button className="flex  border border-blue-500 rounded-2xl mb-2 mt-4   bg-white hover:bg-white text-black text-md" 
          onClick={()=>window.location.href=googleAuthCodeUrl}
          >
          <div className="relative h-6 w-8">
          <Image src={googleLogo} alt='google logo' fill />
          </div>
            Sign in with Google
          </Button> */}

         {/* Sign in with email */}
          <Button className="flex gap-2 border border-blue-500 rounded-2xl mb-2 mt-4   bg-white hover:bg-white text-black text-md">
          <div className="relative h-6 w-8">
          <Image src={myafrosLogo} alt='google logo' fill />
          </div>
          <Link href='/authpages/signinpage' >
            Sign in with Email
            </Link>
          </Button>

        </div>
       <DialogFooter>
       </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default SigninLandingpage