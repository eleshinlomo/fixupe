import Link from "next/link"
import { useContext, useEffect } from "react"
import { AuthContext } from "@/contextproviders/authprovider"
import { logoutApi } from "../auth"
import { LogInIcon, LogOutIcon, User2Icon } from "lucide-react"



const AuthButtonMobile = ({isLoggedIn})=>{

 
  return (

    <div className="md:hidden lg:hidden">
 {isLoggedIn ?

<Link href="/dashboard/dashboardpage"
    className="px-4 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white"
  onClick={logoutApi}><LogOutIcon />
  
  </Link>:

<div className=" ">
  <Link
  href="/authpages/signinpage"
  className=" px-4 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white "
>
  <LogInIcon />
</Link>

</div> 
}
</div>

  )

}

export default AuthButtonMobile