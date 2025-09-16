'use client'
import {useState, useEffect} from 'react'
import { BASE_URL } from '@/components/urls'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createWaitList } from '../api/waitlist'

interface NewsletterProps {
  btnText: string;
}


const NewsletterForm = ({btnText}: NewsletterProps )=>{

    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
   

const HandleEmailWaitlist = async (e:any)=>{
    
    try{
    e.preventDefault()
    const service = 'myafros'
    const payload = {
      service,
      email
    }
     console.log(BASE_URL)
    const response: any = await createWaitList(payload)
  
    if(response.ok){
  
      setMessage(response.message)
      setEmail('')
    }else{
      setMessage(response.error)
    }
    
  }
  catch(err: any){
     setMessage(`"Error": ${err.message}`)
  }
  }
  
  
    return (

    <div className='w-full'>
      <div className='py-4  text-white font-extrabold '>
  
            <p className=' py-2  '>{message ? message : btnText}</p>
        <form className=' md:flex gap-3' onSubmit={HandleEmailWaitlist}>
          <Input
          className='border border-white px-1  text-white rounded-2xl'
          value={email}
          name='email'
          placeholder='Enter your email'
          onChange={(e)=>setEmail(e.target.value)}
          type='email'
           required /><br/>
           <Button type='submit' className=' bg-blue-900 hover:bg-blue-900 mt-2 md:m-0 rounded-2xl text-white' variant='default'>
            Submit
           </Button>
        </form>
      </div>
      </div>
    )
  

}

  export default NewsletterForm