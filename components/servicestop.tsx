
import Link from "next/link"
import { Button } from "./ui/button"
import { BotIcon, ComputerIcon, DatabaseIcon, FileImageIcon } from "lucide-react"
import Image from 'next/image'


export const ServicesTop = ()=>{
    return (
        <div>
            <div className="text-center grid grid-row-flow md:grid-cols-4 
            bg-black
             text-white font-mono 
             gap-5
             py-8 px-6 place-items-center text-sm">


                    {/* ColOne */}
                    <div>
                <div className="flex flex-col justify-center items-center text-2xl">
                <p className=" font-extrabold py-4 "> 
                ADVANCE CRM
                </p>
                <BotIcon className="w-12 h-12 text-blue-700" />
                
                <p className=" py-4 px-4 text-sm flex flex-wrap">
                 Leverage on our state-of-the-art CRM to keep track of your clients,
                 contract, invoices, team, and follow-up.
                 </p>
                 <Button className="bg-blue-700">
                    <Link href='/dashboard/crm'>Try Now</Link>
                 </Button>

                 <div className="relative h-72 w-72">
                 <Image src='/images/3D/pexels-daniel-putzer-633409.jpg' alt='biz dev image' fill />
                 </div>

                 </div>
                
                </div>

                {/* Col Two */}
                <div>
                <div className="flex flex-col justify-center items-center text-2xl">
                <p className="text-2xl font-extrabold py-4 "> 
                MAILSHOT
                </p>
                <DatabaseIcon className="w-12 h-12 text-yellow-700" />
                
                <p className=" py-4 px-4 text-sm flex flex-wrap">
               Send mass email and scale 
               your business development faster with impressive delivery rate. </p>
                <Button className="bg-yellow-700">
                    <Link href='/crm'>Try Now</Link>
                 </Button>
                 
                 <div className="relative h-72 w-72">
                 <Image src='/images/3D/computer_keypad.jpg' alt='biz dev image' fill />
                 </div>

                 </div>
                </div>
               
               {/* Col Three */}
                <div>
                <div className="flex flex-col justify-center items-center text-2xl">
                <p className="font-extrabold py-4 "> 
                CUSTOMIZED SLM
                </p>
                <ComputerIcon className="w-12 h-12 text-green-700" />
                
                <p className=" py-4 px-4 text-sm flex flex-wrap">Small Language Models are
                 top notch, inexpensive, faster, and get the job done. 
                 Get your SLM ruuning on Fixupe. 
                </p>
                <Button className="bg-green-700">
                    <Link href='/aiwriter'>Try Now</Link>
                 </Button>

                 <div className="relative h-72 w-72">
                 <Image src='/images/3D/world-1582347_1920.jpg' alt='biz dev image' fill />
                 </div>

                 </div>
                
                </div>

                 {/* Col3 */}
                <div>
                <div className="flex flex-col justify-center items-center text-2xl">
                <p className="text-2xl font-extrabold py-4 "> 
                VIRTUAL ASSISTANT
                </p>
                <FileImageIcon className="w-12 h-12 text-red-700" />
                
                <p className=" py-4 px-4 text-sm flex flex-wrap">
                Get a Virtual Assistant that runs your business 24/7 even 
                when you sleep or go on vacation.</p>
                <Button className="bg-red-700">
                    <Link href='/'>Try Now</Link>
                 </Button>
                

                <div className="relative h-72 w-72">
                 <Image src='/images/ai_girl2.png' alt='biz dev image' fill />
                 </div>
                
                </div>
                 </div>

        </div> 
        </div>
    )
}