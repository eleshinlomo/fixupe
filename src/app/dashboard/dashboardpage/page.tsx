'use client'
import ContactPage from "@/app/contact/page"
import moneyImage from '../../../../public/gifs/money-8760.gif'
import Image from "next/image"

const DashboardPage = ()=>{

  return (

    <div>
      
      <div className="h-screen w-full pt-28 text-center">
      <h1 className="mb-5 text-3xl font-bold leading-tight text-green-700 dark:text-green-400 sm:text-4xl sm:leading-tight md:text-3xl md:leading-tight">
                  DASHBOARD COMING SOON.
      </h1>
      <div className="relative h-1/2 w-full">
      <Image src={moneyImage} alt='money gif' fill />
      </div>
      </div>
    </div>
  )
}

export default DashboardPage