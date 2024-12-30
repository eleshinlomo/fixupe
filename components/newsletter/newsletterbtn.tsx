"use client"
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import React from 'react'
import NewsSubscriptionPage from './newsletterform'

const NewsletterButton = () => {
  return (
    <>
    <Sheet>
        <SheetTrigger asChild>
            <Button className='text-white bg-blue-500 hover:bg-blue-500 rounded-2xl'>
                SUBSCRIBE
            </Button>
        </SheetTrigger>

        <SheetContent side='right' className='bg-black'>
         <div>
            <NewsSubscriptionPage />
         </div>
        </SheetContent>
    </Sheet>
    </>
  )
}

export default NewsletterButton