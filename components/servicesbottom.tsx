import Link from "next/link"
import { Button } from "./ui/button"
import Image from 'next/image'

export const ServicesBottom = ()=>{
    return (
        <div className="flex flex-col justify-center items-center">

            <div className=" grid grid-flow-row md:grid-cols-4
             gap-5 font-mono
             py-8 px-4   text-lg mx-0 w-full">

              

                    {/* ColOne */}
                    <div className="text-center ">

                {/* <div className="relative hidden h-72 w-full md:w-1/2">
                 <Image src='/images/ai_girl2.png' alt='Creator image' fill />
                 </div> */}

                <div className="">
                <p className="text-2xl font-extrabold py-4 text-green-500 "> 
                HD Image Generator
                </p>
                <p className=" py-4">
                 Use Generative AI to generate copyright free images for your business, 
                 sales campaigns, and more. Large HD images are 
                 generated at a click.
                 </p>
                 <Button className="bg-green-500">
                    <Link href='/dashboard/sales/imagepage'>Try Now</Link>
                 </Button>
                 </div>
                  
                  
                
                </div>

                    {/* ColTwo */}
                <div className="text-center  md:flex  justify-between items-center">
                
                <div className="">
               <p className="text-2xl font-extrabold py-4 text-red-500 "> 
                Voice Chat
                </p>
                <p className=" py-4 ">
                 Visually Impaired friendly voice chat with low latency allows anyone to chat 
                 with LLM by just talking to their device saving a ton of time.
                 </p>
                 <Button className="bg-red-500">
                    <Link href='/dashboard/mediatools/voicechat'>Try Now</Link>
                 </Button>
                 </div>

                 {/* <div className="relative hidden  h-72 w-fulls md:w-1/2">
                 <Image src='/images/ai_girl2.png' alt='Creator image' fill />
                 </div> */}
                
                </div>

                {/* Col Three */}
                <div className="text-center md:flex justify-center items-center">
                
                <div className="relative hidden h-72 w-full md:w-1/2">
                 <Image src='/images/ai_girl2.png' alt='Creator image' fill />
                 </div>

                <div className="">
                <p className="text-2xl font-extrabold py-4 text-green-500 "> 
                Transcriber
                </p>
                <p className=" py-4 ">Our ultra fast Transcriber saves a ton of 
                time at meetings, conferences, and vacation. Record, convert to 
                text, and share with your team real-time.
                </p>
                <Button className="bg-green-500">
                    <Link href='/dashboard/aitranscriber'>Try Now</Link>
                 </Button>
                 </div>

                </div>


                {/* Col Four */}
                <div className="text-center">
                <div className="">
                <p className="text-2xl font-extrabold py-4 "> 
                Voice Recorder
                </p>
                <p className=" py-4 ">
                Capture your meetings, events on the go with crystal 
                clear Voice Recorder. Record and convert to 
                text in 1 minute. An essential to for every business.
                </p>
                <Button className="bg-gray-500">
                    <Link href='/dashboard/mediatools/voicerecorder'>Try Now</Link>
                 </Button>
                </div>

                <div className="relative hidden h-72 w-full md:w-1/2">
                 <Image src='/images/ai_girl2.png' alt='Creator image' fill />
                 </div>
                </div>
               
            
            </div>

            
        </div>
    )
}