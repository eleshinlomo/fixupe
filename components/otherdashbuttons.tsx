import {useState, useEffect} from 'react'
import { useRouter, usePathname } from 'next/navigation';
import { ArrowBigDown, ArrowBigRight } from 'lucide-react';
import React from 'react'
import { Button } from '@/components/ui/button';

export const OtherDashButtons = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
  
  
    const pathname= usePathname()
    const router = useRouter();
  return (
    <div className='flex flex-col gap-2 text-white'>

      {/* Text Reader button */}
      <div className='px-2 w-auto flex flex-col justify-center items-center'>
          <Button className='w-full flex flex-1 justify-between'
          onClick={()=>{
            setIsOpen(!isOpen); 
            router.push('https://imgbot.myafros.com')
            pathname   ? pathname : null
          }}
          >
             ImageBot
            <ArrowBigRight/>
            </Button>
        </div>

        {/* Credit topup button */}
        <div className='px-2 w-auto flex flex-col justify-center items-center'>
          <Button className='w-full flex flex-1 justify-between'
          onClick={()=>{
            setIsOpen(!isOpen); 
            router.push('/dashboard/purchase/purchasepage')
            pathname   ? pathname : null
          }}
          >
             Top up credit
            <ArrowBigRight />
            </Button>
        </div>

        {/* Admin */}
        {/* <div className='px-2 w-auto flex flex-col justify-center items-center'>
          <Button className='w-full flex flex-1 justify-between'
          onClick={()=>{
            setIsOpen(!isOpen); 
            router.push('/crm/adminpage')
            pathname   ? pathname : null
          }}
          >
             Admin
            {isOpen?<ArrowBigRight /> : <ArrowBigDown/>}
            </Button>
        </div> */}

        {/* Todo button */}
        <div className='px-2 w-auto flex flex-col justify-center items-center'>
          <Button className='w-full flex flex-1 justify-between'
          onClick={()=>{
            setIsOpen(!isOpen); 
            router.push('/contactpage')
            pathname   ? pathname : null
          }}
          >
             Support
            <ArrowBigRight /> 
            </Button>
        </div>

        {/* Todo button */}
        <div className='px-2 w-auto flex flex-col justify-center items-center'>
          <Button className='w-full flex flex-1 justify-between'
          onClick={()=>{
            setIsOpen(!isOpen); 
            router.push('https://myafros.com')
            pathname   ? pathname : null
          }}
          >
             My Afros
            <ArrowBigRight /> 
            </Button>
        </div>

       

    </div>
  )
}

