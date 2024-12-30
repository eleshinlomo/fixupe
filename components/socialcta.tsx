import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitchIcon } from "lucide-react"
import { Button } from "./ui/button"
import Link from 'next/link'

export const SocialCTA = ()=>{
    return (
        <div>

            <div className="text-center  flex flex-col justify-center items-center py-8">

                <p className="text-2xl font-extrabold px-4 ">
                    Post on top Social platforms in 1 minute</p>

                <div className="flex gap-10 mt-4">
                    <div className="text-blue-800">
                        <FacebookIcon />
                    </div>
                    <TwitchIcon />
                    <div className="text-blue-500">
                    <LinkedinIcon />
                    </div>
                    <div className="text-pink-800">
                    <InstagramIcon />
                    </div>
                </div>

                <p className="text-lg flex flex-wrap
                 text-center  mt-10 shadow-sm
                   py-2 px-6 ">
                    It takes 2 minutes to write an article on Fixupe. 
                    There is no reason you should not be posting at 
                    least 30 articles a day on your platform </p>
                
                

            </div>

        </div>
    )
}