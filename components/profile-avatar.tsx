// "use client"
// import {useState, useEffect} from 'react'
// import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
// import { string } from "zod"
// import { Button } from "./ui/button"
// import  Link  from "next/link"
// import { SheetContent, Sheet, SheetTrigger } from "./ui/sheet"
// import { getcsrfToken } from './auth'
// import { getUserProfile } from './auth'
// import { getAccessToken } from './auth'
// import { dummyLogout } from './auth'
// import { BASE_URL } from './auth'




// const GOOGLE_LOGOUT_URL = process.env.NEXT_PUBLIC_SSO_LOGOUT_URL






// const ProfileAvatar = ()=>{
// const [isUserProfile, setIsUserProfile] = useState<Boolean>(false)
// const [userProfile, setUserProfile] = useState< []>([])
// const [isLoggedIn, setIsLoggedIn] = useState(false)
// const [toggleBtn, setToggleBtn] = useState(false)
// const [csrftoken, setCsrftoken] = useState(null)
// const [accessToken, setAccessToken] = useState<any>()


// const handleClose = ()=>{
//   setToggleBtn(false)
// }

// const handleOpen = ()=>{
//   setToggleBtn(true)
// }


// useEffect(()=>{
//   const loginChecker = async() =>{
//       const response: any = await fetch(`${BASE_URL}/authchecker/`, {
//           mode: 'cors',
//           credentials: 'include'
//       })
//       if (!response) throw new Error("No response from server")
//        const data = await response.json()
//       if (data.success === true){
//          setIsLoggedIn(true)
//       }else{
//           setIsLoggedIn(false)
//       }
//   }
//   loginChecker()
//   },[])




// //   Get CSRF TOKEN

// useEffect(()=>{

//   const handleCsrfToken = async ()=>{

//   try{
  
//   const response: any = await getcsrfToken()
//   if (! response)throw new Error("authChecker error") 
//   setCsrftoken(response)
  
// }
// catch(err){
// console.log(err)
// }
//   }

// handleCsrfToken()
// }, [])  


// // //   Get ACCESS TOKEN

// useEffect(()=>{

//   const handleGetAccessToken = async ()=>{

//   try{
//   if (csrftoken) return
//   const response: any = await getAccessToken(csrftoken)
//   if (! response)throw new Error("No Access Token Found") 
//   setAccessToken(response)
  
// }
// catch(err){
// console.log(err)
// }
//   }

// handleGetAccessToken()
// }, [])  



// if (accessToken){
//   console.log(accessToken)
// }


// //   GET USERPROFILE
// useEffect(()=>{

//   const handleUserProfile = async ()=>{
//   if (!csrftoken) return
//   const response = await getUserProfile(csrftoken, accessToken)
//   if (!response) throw new Error("No response from server")
//   setUserProfile(response.message)
//   setIsUserProfile(true)
 
//   }

//   handleUserProfile()
//     }, [csrftoken, accessToken])

  

 
    
 
//     return (

//       <div>
//       <Sheet>
//         <SheetTrigger>
//           <Button size='icon' asChild className='mt-2'>
//         <Avatar className='h-12 w-12'>
//               <AvatarImage src='/avatar-1968236_1280.png' />
              
//                <AvatarFallback className='bg-white text-black'>
//                   Profile
//                 </AvatarFallback>
//             </Avatar>
//             </Button>
//         </SheetTrigger>
//         <SheetContent side='top' className="p-0">
        
        
//           {isLoggedIn ?
//           <div className='  bg-black border-r-4 flex flex-col justify-center items-center'>
          
//           {userProfile.map((user: any, index)=>
//           <ul key={index} className='text-sm text-center text-white py-2 '>
//           <li>Username: {user.username}</li>
//           <li>{user.email}</li>
//           <li>Firstname: {user.firstname}</li>
//           <li>Lastname: {user.lastname}</li>
//           </ul>
//           )}
//           <div className='flex gap-1'>
//           <Button asChild>
//             <Link href={`${GOOGLE_LOGOUT_URL}`}>Logout</Link>
//           </Button>
//           <Button asChild>
//             <Link href=''>Edit Profile</Link>
//           </Button>
//           </div>
//           </div>:
          
//           <div className='bg-black  px-4 py-10'>
//           <div className='flex justify-center md:justify-between gap-4 py-5'>
//            <p className='   text-white  pt-2'>
//             Hi Guest,
//             </p>
            
//             <Button asChild>
//               <Link  className=' ' href='/'>Logout</Link>
//               </Button>
//           </div>
//           <div className='text-center text-white'>
//             <p>We were not able to log you in properly.</p>
//           </div>
//           </div>
//           }
         
//         </SheetContent>
//         </Sheet>
//     </div>

//     )
// }

// export default ProfileAvatar

export const  something = ()=>{
  return (
    <div>
    </div>
  )
}