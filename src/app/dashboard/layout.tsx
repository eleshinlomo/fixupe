'use client'
import Header from "@/components/Header"
import { useContext, useEffect } from "react"
import { GeneralContext } from "@/contextproviders/generalcontext"
import Footer from "@/components/Footer"
import { useRouter } from "next/navigation"
import SigninPage from "../authpages/signinpage/page"
import { AuthContext } from "@/contextproviders/authprovider"
import DashSidebar from "./dashsidebar"


interface DashboardLayoutPorps {
  children: React.ReactNode
}
const DashboardLayout = ({children}: DashboardLayoutPorps)=>{

  const authContext = useContext(AuthContext)

  const {isLoggedIn} = authContext
  
  useEffect(()=>{
    console.log('IS_LOGGEDIN IN DASHBOARD PAGE', isLoggedIn)
  }, [isLoggedIn])
  
  

  


    
    return (

    <div>

    {isLoggedIn ? 
    
    <div className="">
   
    {children}
    </div>:

    <SigninPage />
    }

    </div>
  )
}


export default DashboardLayout