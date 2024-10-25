"use client";
import {useContext} from 'react'
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { usePathname, useParams } from "next/navigation";
import { Providers } from "./providers";import { GeneralProvider } from "@/contextproviders/generalcontext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeaderPage from "@/components/Header";
import { AuthContext, AuthProvider } from "@/contextproviders/authprovider";
import { GeneralContext } from '@/contextproviders/generalcontext';


const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({children}: RootLayoutProps)=> {

  const path = usePathname()
  const generalContext = useContext(GeneralContext)
  // const {pageName} = generalContext
 
  const params = useParams()
  const pageParams = params.product?.toString()

  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        
        <Providers>
        <GeneralProvider>
          
          <AuthProvider>
          {path === '/' + pageParams ? null : <HeaderPage />}
          {children}
          {path === '/' + pageParams ? null : <Footer />}
          </AuthProvider>
         </GeneralProvider>
          <ScrollToTop />
        </Providers>
        
      </body>
    </html>
  );
}

export default RootLayout


