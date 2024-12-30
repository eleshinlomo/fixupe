'use client'

import Footer from '@/components/footer'
import React, {useState, useEffect, Suspense} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ChatbotPage from './(publicroutes)/chatbot/page'



interface AllRoutesProps {
    children: React.ReactNode
}

const AllRoutesLayout = ({children}: AllRoutesProps) => {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <div className='bg-black text-white'>
    <Suspense fallback={<div>Loading...</div>}>
    {children}
    <ChatbotPage />
    </Suspense>
    <Footer />
    </div>
  )
}

export default AllRoutesLayout