'use client'
import {useState, useEffect} from 'react'
import DatePage from './date/date'
import { Button } from '@/components/ui/button'

const EmployeePageSettings = () => {

    const [company, setCompany] = useState<null | any>(null)


    // Get Company name
    useEffect(()=>{
    const getCompanyName = ()=>{
        const companyName = localStorage.getItem('company')
        if(companyName !== null || companyName || undefined || companyName === 'undefined'){
            setCompany(companyName)
        }
    }
    getCompanyName()
    }, [])

  return (
    <div>
        
        <div className=' mt-5 px-2'>

            {/* Heading */}
            <div className='text-center flex flex-col gap-3'>
            <p className='text-xl font-extrabold'>Welcome to {company ? company: null}&apos;s LLM-Powered Employee&apos;s Page</p>
            <DatePage />

            </div>
          
           
        </div>

        

    </div>
  )
}

export default EmployeePageSettings