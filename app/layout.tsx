

import {GoogleTagManager} from '@next/third-parties/google'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Suspense} from 'react'
import { GeneralContex } from '@/ContextProviders/generalContext'






const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
}


export const metadata: Metadata = {
  title: 'Home | MyAfros',
  description: 'Free software tools to complete tasks faster',
}


const RootLayout = ({children}: RootLayoutProps)=> {
 

  return (
    
    <html lang="en">
      
      <body className={inter.className}>
        
        <GeneralContex>
        {children}
        </GeneralContex>
        <GoogleTagManager gtmId='G-TWYHZMCD1T' />
        
        
      </body>
     
    </html>
    
  )
}

export default RootLayout
