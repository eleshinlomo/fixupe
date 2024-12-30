"use client"
import {useState, useEffect} from 'react'
import { BASE_URL } from '@/components/urls'
import { Button } from '@/components/ui/button'
import { FeedbackHandler } from '@/components/contacts/feedbackhandler'
import { Textarea } from '@/components/ui/textarea'


const FeedbackPage = ()=>{

    const [feedback, setFeedback] = useState<string>('')
    const [message, setMessage] = useState<string>('Please share your feedback about this project.')
    const [isFeedback, setIsFeedback] = useState<boolean>(false)

const handleFeedback = async (e:any)=>{
    try{
    e.preventDefault()
    const response = await FeedbackHandler(e, feedback)
    if(response.ok){
    setMessage(response.message)
    }else{
        console.log(response.error)
    }
    setFeedback('')
}
catch(err){
    console.log(err)
    setMessage('Feedback not sent')
}finally{
    setFeedback('')
}
  }
  
  const handleIsFeedback = ()=>{
    setIsFeedback(!isFeedback)
  }
  
    return (

    <div className=''>
      <div className='py-4 flex flex-col justify-center 
      items-center text-center text-black
       '>
          
          <Button onClick={handleIsFeedback}>
          {isFeedback? 'Close' : 
          'Share a feedback'}
          </Button>
          {/* Feeback Form */}

          {isFeedback ?
          <div className='relative bg-black h-72 w-72  mt-3 rounded-2xl '>
            <p className='font-mono text-center px-6 text-white my-3'>
                {message}</p>
        <form className='px-6 absolute z-10  top-14 right-0 left-5 my-3 ' 
        onSubmit={handleFeedback}>
          <Textarea
          className='border border-black px-1 text-start '
          value={feedback}
          name='feedback'
          placeholder='Share your feedback'
          onChange={(e)=>setFeedback(e.target.value)}
           required /><br/>
           <Button type='submit' className=' ' variant='default'>
            Submit Feedback</Button>
        </form>
        </div>:null
        }

      </div>
      </div>
    )
  

}

  export default FeedbackPage