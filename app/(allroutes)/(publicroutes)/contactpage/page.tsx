"use client"
import {useState, useEffect} from 'react'
import { BASE_URL } from '@/components/urls'
import { Button } from '@/components/ui/button'
import { SupportMessageHandler } from '@/components/supportmessagehandler' 
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'


const ContactPage = ()=>{

    const [emailBody, setEmailBody] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [emailSubject, setEmailSubject] = useState<string>('Message from Fixupe Customer')
    const [message, setMessage] = useState<string>('Please send a message to us and we aim to respond within few hours')
    const [isFeedback, setIsFeedback] = useState<boolean>(false)

const handleFeedback = async (e:any)=>{
    try{
    e.preventDefault()
    const payload = {
      email, 
      emailSubject,
      emailBody}
    const response = await SupportMessageHandler(e, payload)
    if(response.ok){
    setMessage(response.message)
    setEmailBody('')
    setEmail('')
    }else{
        console.log(response.error)
        setMessage(response.message)
    }
}
catch(err: any){
    console.log(err)
}finally{
}
  }
  
  const handleIsFeedback = ()=>{
    setIsFeedback(!isFeedback)
  }
  
    return (

    <div className=''>
      <div className=' flex flex-col justify-center 
      items-center text-center px-4'>

        <p className='mt-16 font-extrabold px-4'>Send a message to support</p>
          
          <div className='  w-full md:w-1/2  rounded-2xl '>
            <p className='font-mono text-center px-6  py-3'>
                {message}</p>
        <form className='flex flex-col justify-center items-center gap-2 px-6 my-3' 
        onSubmit={handleFeedback}>
          <Input placeholder='Enter email' value={email} name='email' type='email'
          onChange={(e)=>setEmail(e.target.value)}
          className='rounded-2xl'/>
          {/* Email Subject */}
          <Input  value={emailSubject} name='emailSubject' type='hidden'
           onChange={(e)=>setEmailSubject(e.target.value)}
            
           />

            {/* Email Body */}
          <Textarea
          className='bg-black/50 border border-white px-2 text-start rounded-2xl' 
          value={emailBody}
          name='emailBody'
          placeholder='Enter your message here'
          onChange={(e)=>setEmailBody(e.target.value)}
           required />
           <Button type='submit' className='bg-black/50 text-white rounded-2xl' variant='outline'>
            Submit Message</Button>
        </form>
        </div>
      </div>

      </div>
    )
  

}

  export default ContactPage