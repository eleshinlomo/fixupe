import Link from "next/link"
import { Button } from "./ui/button"

export const ServicesMiddle = ()=>{
    return (
        <div>
            <div className="text-center grid grid-row-flow md:grid-cols-4 
            bg-black
             text-white font-mono 
             gap-5
             py-8 px-6 place-items-center text-sm">


                    {/* ColOne */}
                    <div>
                <p className="text-2xl font-extrabold py-4 "> 
                COLD CALL
                </p>
                <p className=" py-4 px-4 flex flex-wrap">
                 Turn your computer to a cold call machine 
                 and get multiple leads integrated with active CRM.
                 </p>
                 <Button className="bg-blue-700">
                    <Link href='/audiochat'>Try Now</Link>
                 </Button>
                
                </div>

                {/* Col Two */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                PDF TO WORD
                </p>
                <p className=" py-4 px-4 flex flex-wrap">
                This is essential for any business. Convert 
                your profiles, invoices, and lot more into WORD or 
                PDF in 1 minute.</p>
                <Button className="bg-yellow-800">
                    <Link href='/documentdash'>Try Now</Link>
                 </Button>
                </div>
               
               {/* Col Three */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                WORD TO PDF
                </p>
                <p className=" py-4 px-4 flex flex-wrap">
                This is essential for any business. Leverage on 
                Fixupe Tools to scale up your services and deliver much faster.
                </p>
                <Button className="bg-green-700">
                    <Link href='/documentdash'>Try Now</Link>
                 </Button>
                
                </div>

                 

                 {/* Col3 */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                SCREEN RECORDER
                </p>
                <p className=" py-4 px-4 flex flex-wrap">
                Fixupe Screen Recorder ensures concise and super 
                clear screen share during business communication.</p>
                <Button className="bg-red-700">
                    <Link href='/'>Try Now</Link>
                 </Button>
                </div>

            

                
            </div>

            
        </div>
    )
}