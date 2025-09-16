"use client"
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import React from 'react'
import NewsSubscriptionPage from './newsletterform'

interface NewsletterProps {
  btnText: string;
}


const NewsletterButton = ({btnText}: NewsletterProps ) => {
  return (
    <>
    <Sheet>
        <SheetTrigger asChild>
            <Button className='text-white bg-blue-500 hover:bg-blue-500 rounded-2xl'>
                {btnText}
            </Button>
        </SheetTrigger>

        <SheetContent side='right' className='bg-black'>
         <div>
            <NewsSubscriptionPage btnText={btnText}  />
         </div>
        </SheetContent>
    </Sheet>
    </>
  )
}

export default NewsletterButton