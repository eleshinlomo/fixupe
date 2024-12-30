import Link from "next/link"
import { Button } from "./ui/button"

export const Col3Bottom = ()=>{
    return (
        <div>
            <div className="text-center grid grid-row-flow md:grid-cols-3
            bg-black
             text-white font-mono 
             gap-5
             py-8 px-6 place-items-center text-sm ">
               
               {/* Col One */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Rated top 10 AIs 
                </p>
                <p className=" py-4 px-4"> Experience unmatched AI Solutions that 
                cut across 
                multiple use-cases</p>
                <Button className=""   asChild>
                <Link href='/dashboard' className="text text-blue-600 
                text-2xl py-4 ">
                Get Started
                </Link>
                </Button>
                </div>

                 {/* Col Two */}
                 <div>
                <p className="text-2xl font-extrabold  py-4 "> 
                Increase Productivity 20x
                </p>
                <p className=" py-4 px-4">We are constantly adding new AI tools
                 that solve real life problems</p>
                <Button className=""   asChild>
                <Link href='dashboard' className="text text-blue-600 text-2xl
                 py-4 ">
                Get Started
                </Link>
                </Button>
                </div>

                 {/* Col3 */}
                 <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Increase revenue by 150%
                </p>
                <p className=" py-4 px-4">We provide a state-of-the-art leverage for 
                businesses and start-ups to scale fast</p>
                <Button className=""   asChild>
                <Link href='dashboard' className="text text-blue-600 text-2xl py-4 ">
                Get Started
                </Link>
                </Button>
                </div>

            </div>
        </div>
    )
}