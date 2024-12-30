'use client'

import {useState, useEffect} from 'react'
import ChatbotTemplate from './generalchatbottemplate'
import { generalChatbot } from './chatbotfunctions';



const ChatbotPage = ()=>{

    const [header, setHeader] = useState<string>('MyAfros Support')

    

    return (
    
        <div>
            <ChatbotTemplate />
           
          
        </div>
    )
}

export default ChatbotPage