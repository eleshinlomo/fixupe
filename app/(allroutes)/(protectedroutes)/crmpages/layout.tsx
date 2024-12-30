

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'



export const metadata: Metadata = {
  title: 'CRM',
  description: 'Fixupe is a platform that provides Business Tools for a quick task completion',
}


export default function CRMLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <div>
        {children}
    </div>
     
    
    
  )
}
