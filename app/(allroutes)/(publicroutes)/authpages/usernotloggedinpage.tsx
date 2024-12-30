'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface UserNotLoggedPageProps {
  message: string | React.ReactNode
}

const UserNotLoggedPage = ({message}: UserNotLoggedPageProps) =>{

return (

<div>

<div className='w-full pt-12 flex flex-col justify-center items-center
    font-extrabold gap-4 text-black'>

  <p className='text-lg font-extrabold py-2'>{message}</p>

    <div className='relative w-72 h-72 md:w-96 md:h-96 mb-4'>
    <Image src='/images/ai_girl2.png' alt='computer keypad pics' fill />
    </div>

    </div>
    </div>
        
        )
        }

export default UserNotLoggedPage