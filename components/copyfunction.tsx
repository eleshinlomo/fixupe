import { Button } from "./ui/button"
import {useState} from 'react'

interface CopyProps {
    textToCopy : string
}

const CopyFunctionComponent = ({textToCopy} : CopyProps)=>{
    const [message, setMessage] = useState<string>('');
    const copyFunction = ()=>{
        navigator.clipboard.writeText(textToCopy)
        setMessage('Prompt copied')
       }

    return (
        <div className="flex justify-between items-center gap-5">
            <p className="font-extrabold text-blue-500">{message}</p>
            <Button className="bg-blue-500 hover:bg-blue-500" onClick={copyFunction}>
                Copy
            </Button>
        </div>
    )
}

export default CopyFunctionComponent