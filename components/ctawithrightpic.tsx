import React from 'react'
import Image from 'next/image'
import { APILogos } from './aiapilogos'


function Ctawithrightpic() {
  return (
    <div>
         
         <div className='flex flex-col  md:mt-4'>
         <div className='text-center'>
                <p className='leading-8 text-2xl font-extrabold
                  py-8'>AI & MACHINE LEARNING</p>
            </div>
         
    <p className='font-extrabold text-xl px-4 mb-5 '>
        MODERN AND SCALABLE MODELS</p>
     <div className='md:flex flex-1 justify-around'>

     <div className='w-full md:w-1/2 px-4'>
        <p className='flex flex-wrap'>
        As a dedicated practitioner in the realm of artificial intelligence, 
        specializing in transforming complex problems into actionable insights. 
        This portfolio showcases a spectrum of projects, from cutting-edge 
        machine learning models to innovative AI applications.
        </p>
     <div className='grid grid-cols-3 md:grid-cols-3 gap-2  
     mt-5 font-extrabold text-sm'>
        <p>ADVANCE MODELS </p>
        <p>MACHINE LEARNING</p>
        <p>COMPUTER VISIONING</p>  
     </div>

     <div className='grid grid-cols-4  my-8'>
    {APILogos.map((api, index)=>
        <div key={index} className='relative w-12 md:w-24 h-12'>
        <Image src={api.url} alt='logo' fill />
        </div>
        )
     }
    </div>

     </div>
     
     <div className='relative w-full md:w-1/2 h-96 mr-2'>
     <Image src='/bubble.png' alt='computer software' fill />
     </div>
     </div>

    </div>
    
    </div>
  )
}

export default Ctawithrightpic