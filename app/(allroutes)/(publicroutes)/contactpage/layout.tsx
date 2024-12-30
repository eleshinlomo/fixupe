
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Page for Myafros',
}


export default function ContactLayout({
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
