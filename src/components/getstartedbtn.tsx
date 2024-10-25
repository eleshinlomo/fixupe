import { useContext } from "react"
import { AuthContext } from "@/contextproviders/authprovider"
import Link from "next/link"

const GetStartedButton = ()=>{

  const authContext = useContext(AuthContext)
  const {isLoggedIn} = authContext

  return (

    <div>
                {isLoggedIn?
                <Link href='/dashboard/dashboardpage'>
                <button className="py-2 px-4 my-4 bg-green-700 rounded-2xl">Dashboard</button></Link>:
                <Link href='/authpages/signuppage'>
                <button className="py-2 px-4 my-4 bg-green-700 rounded-2xl">Get started</button></Link>
                }
    </div>
  )
}

export default GetStartedButton 

