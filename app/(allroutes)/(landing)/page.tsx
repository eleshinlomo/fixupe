'use client'

import {useState, useEffect} from 'react'
import HomeNavbar from '@/components/navbars/homenavbar'
import Projects from '@/components/projects'
import Features from '@/components/features'
import TopSlanted from '@/components/topslanted'
import ThreeColsTop from '@/components/threecolstop'
import { Skillsets } from '@/components/skillsets'
import Hero from '@/components/hero'





  const Home = () =>{

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    return (
      <div>
        <HomeNavbar isLoggedIn={isLoggedIn} />
      <div className='relative overflow-hidden flex flex-col justify-center'>
        
        <Hero />
        <Skillsets />
        <Projects />
        <ThreeColsTop />
        <TopSlanted />
       <Features />
      
        {/* <NewsletterPage /> */}
       
        {/* <CookiePage /> */}
      </div>
      </div>
    )
  }

  export default Home