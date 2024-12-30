import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export const TeamPage = ()=>{

    const Chatbots = [

        {
            chatbotname: "Teema",
            role: 'Public Relations',
            info: "Answers general questions on all topis",
            image: '/images/girl1.png',
            route: '/general',
            button: 'Chat'
        },

        {
            chatbotname: "Enoch",
            role: 'Technical Writer',
            info: "Answers general questions on all topis",
            image: '/images/coder.png',
            route: '/code',
            button: 'Generate'
        },

        {
            chatbotname: "Eleshin",
            role: 'Machine Learning Analyst',
            info: "Answers general questions on all topis",
            image: '/images/image_guy.png',
            route: '/image',
            button: 'Generate'
        },

        {
            chatbotname: "Emerald",
            role: 'Data Manager',
            info: "You intimate AI excapades",
            image: '/images/girl2.png',
            route: '/aiwriter',
            button: 'Chat'
        },
        
       
    ]
    return (
        <div className=''>


<div className='py-4 text-center '>
    <p className='leading-8 py-2 text-2xl font-extrabold'>
        MEET OUR AI TEAM</p>
   
    
</div>

<div className='flex flex-col
         py-2 px-5 gap-2 justify-center items-center'>

<div className=' 
            grid grid-flow-row md:grid-cols-4 gap-3 w-full '>
            
          {
            Chatbots.map((chatbot, index)=>

            <div key={index} className=''>
         <div className='h-72 w-full 
          relative'>
            <Image src={chatbot.image} alt='member profile' fill  />  
            </div>
            <div className=' w-full flex flex-col justify-center items-center gap-2'>
            <p className='text-l font-extrabold'>Name: {chatbot.chatbotname}</p>
            <p className='text-l '>Role: {chatbot.role}</p>
            {/* <p className='text-l text-black'>Project Info: {team.info}</p>  */}
            {/* <Button className=' text-lg w-full h-full'>
                <Link href={chatbot.route}>{chatbot.button}</Link>
            </Button> */}

       

            </div>

            
            </div>
            
    
            )
         } 
         </div>
       {/* End of grid */}

         
          

         </div>
        </div>
    )
}