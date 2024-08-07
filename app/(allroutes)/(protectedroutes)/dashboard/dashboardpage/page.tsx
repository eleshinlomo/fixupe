"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import ClientPage from '../../crmpages/crmpage/page';
import {motion} from 'framer-motion'
import WaitlistPage from '@/app/(allroutes)/(publicroutes)/waitlistpage/page';


interface DashboardPageProps{
  company: string
}

const DashboardPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedToolIndex, setSelectedToolIndex] = useState<any | null>();
  const [showTool, setShowTool] = useState(false)
  const router = useRouter();

  

  const handleToolClick = (tool: any) => {
    setSelectedToolIndex(tool);
    
    
  };

  return (
    <div className='relative bg-white text-black'>
      
      <div className="">
          

        <div className="mb-8 px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mt-3">
            DASHBOARD</h2>
          <p className="text-sm md:text-lg text-center font-semibold">
          Feel free to explore the features of the CRM.
          </p>
          <div className="flex justify-center ">
            <WaitlistPage />
          </div>
        </div>

        {/* Start of Tools */}
        
          <ClientPage />
             
      </div>
    </div>
  );
};

export default DashboardPage;
