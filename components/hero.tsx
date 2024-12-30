"use client"
import { BotIcon, BriefcaseIcon, ComputerIcon, MailPlusIcon, PiIcon } from "lucide-react"
import Image from 'next/image'
import { CtaBlockPage } from "./ctablock"
import { Button } from "./ui/button"
import {useEffect, useState} from 'react'
import  Typewriter  from "@/components/typewriter"
import programImage from '@/public/images/program.jpg'

const Hero = ()=>{

    const [customText, setCustomText] = useState<string[]>([])
    const MYAFROSAI_URL = process.env.NEXT_PUBLIC_MYAFROSAI_HOME

  useEffect(()=>{
    setCustomText(
      [
        "AI-Integrated CRM",
        "Image GenAI",
        "AI Agents",
        "AI Powered store"
      ]
    )
  }, [])

    return (
        <div>

<div className="">
<Typewriter textArray={customText} />
</div>


<div className="h-auto flex flex-col justify-between   
            bg-black text-white ">

<div className="md:h-96 w-full  grid grid-rows-2 
 md:grid-cols-2  mx-0 ">



<div className="relative  w-full h-auto md:h-96">
<Image src={programImage} alt='programming image' fill />
</div>

<div className="px-3 pb-2">

<div className="border-b border-white w-1/6 my-3">
<h1 className="py-4 font-arial font-extrabold w-1/6">PORTFOLIO</h1>
</div>


<p className="flex-wrap text-start  pr-8 ">
Explore world class apps with integrated AI Agents. 
On a mission to make software solutions accessible, intuitive, 
and transformative for businesses. Whether you run an enterprise or 
a start-up, explore diverse range of tools offering the best solutions for business scaling.</p>


<div className="flex flex-col md:flex-row pt-8 gap-3 text-white">
<a href={`${MYAFROSAI_URL}/voicerecorder`}>
<Button variant='outline' size='sm'
className="  bg-blue-500 rounded-full  w-full" 
  >VOICE RECORDER</Button>
  </a>
<a href='https://imgbot.myafros.com/'>
<Button variant='outline' size='sm' className=" bg-blue-500 rounded-full  w-full  ">
    GENERATE IMAGE
</Button>
</a>
</div> 
</div>
 
           


    </div>


           </div>

        </div>
    )
}

export default Hero