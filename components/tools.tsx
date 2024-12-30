"use client"
import { AreaChartIcon, BookIcon, BotIcon, DatabaseIcon, 
    ImageIcon,
    MailIcon,
    ZapIcon, 
   
} from "lucide-react";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, EyeIcon} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link'




interface ToolsProps {
  id: string;
  category: string;
  href: string;
  tools: {
    label: string;
    icon: React.ElementType;
    href: string;
    color: string;
    bgColor: string;
  }[];
}



export const Tools = [

  { 
    id: 'home',
    category: 'Home',
    href: "/",
    tools: [{   
      label: "Viewing Home",
      icon: AreaChartIcon,
      href: "/",
      color: "text-pink-500",
      bgColor: "text-grey-500"
    }]
  },
  
  { 
    id: 'dash',
    category: 'CRM',
    href: "/dashboard/dashboardpage",
    tools: [{   
      label: "Viewing Dashboard",
      icon: AreaChartIcon,
      href: "/dashboard/dashboardpage",
      color: "text-pink-500",
      bgColor: "text-grey-500"
    }]
  },
  {
    id:'3',
    category: 'GenAI Tools',
    tools: [

          {   
        
            label: "Transcriber",
            icon: BotIcon,
            href: "/dashboard/genai/aitranscriber",
            color: "text-pink-500",
            bgColor: "text-grey-500"
            },

            {
      
              label: "Content Writer",
              icon: ImageIcon,
              href: "/dashboard/genai/contentwriter",
              color: "text-blue-500",
              bgColor: "text-grey-500"
              },
            {
            
              label: "Voice Recorder",
              icon: ImageIcon,
              href: "/dashboard/genai/voicerecorder",
              color: "text-blue-500",
              bgColor: "text-grey-500"
              },
              {
                label: "Text Reader",
                icon: ImageIcon,
                href: "/dashboard/genai/textreaderpage",
                color: "text-blue-500",
                bgColor: "text-grey-500"
                },
              // {
            
              //   label: "Voice Chat",
              //   icon: ImageIcon,
              //   href: "/dashboard/genai/voicechat",
              //   color: "text-blue-500",
              //   bgColor: "text-grey-500"
              //   },     
            ]},
            {
              id:'4',
              category: 'Other Tools',
              tools: [
          
                    {   
                  
                      label: "VC Calculator",
                      icon: ZapIcon,
                      href: "/vccalculator",
                      color: "text-pink-500",
                      bgColor: "text-grey-500"
                      },
                    ]}
    ]

    const DashboardTools = ()=> {

      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [user, setUser] = useState(null);
      const [selectedToolIndex, setSelectedToolIndex] = useState<any | null>();
      const [isSelectedTool, setIsSelectedTool]= useState<boolean>(false)
      const [showTool, setShowTool] = useState(false)
      const router = useRouter();
    
      
    
      const handleToolClick = (tool: any) => {
        setShowTool(true)
        setSelectedToolIndex(tool);
      };

      const closeShowTools = (tool: any)=>{
        setShowTool(false)
      }

      return (
        <div className='relative bg-white text-black'>
          
              
            {/* Start of Tools */}
            <div>
              
              <div className="px-4 md:px-32 pb-8">
                {Tools.map((tool: any, index: any) => (
                  <div key={index} className=''>
                    
                    {/* Dashboard, CRM and Settings are directly forwarded to href */}
                      { 
                      
                      tool.category === 'Dashboard' || 
                      tool.category === 'Home'? null 
                     :
    
                      <div className='flex flex-1 justify-between rounded-2xl
                      shadow-2xl py-4'>
                        <p className="text-center text-md px-4 py-4 
                        font-extrabold">
                      {tool.category}</p>
                      <Button size='icon'
                      onClick={handleToolClick ? () => handleToolClick(tool):
                         ()=>closeShowTools}
                      >
                        <EyeIcon />
                      </Button>
                      
                    
                      
                      </div>
                    }
                    
                    {selectedToolIndex === tool ?
                    selectedToolIndex.tools.map((tool: any, index: any) => (
                      <div key={index}>

                      {/* Display Tools */}
                      {showTool ?
                      <Card
                        
                        className='p-4 border-black/50 flex items-center
                         justify-between hover:shadow-md transition 
                         cursor-pointer'
                      >
                        
                        
                        <div className="flex justify-between 
                        items-center gap-x-4">
                          <div className={cn(`w-p-2 w-fit rounded-md`, 
                          tool.bgColor)}>
                            <tool.icon className={cn('w-8 h-8', tool.color)} />
                          </div>
                          <div className="font-semibold">{tool.label === null ? 
                          <div>
                            <Button><Link href='/ideapage'>Create Idea</Link></Button>
                            <p>Validate your idea by real people before investing time and resources</p>
                          </div>: tool.label}</div>
                        </div>
                        <Link href={tool.label === null ? <span>{tool.href}</span> : tool.href}>
                        <Button size='icon'>
                        <ArrowRight className="" />
                        </Button>
                        </Link>
                      </Card>:null
                    }
                    {/* End Display Tools */}
                    </div>
                    )):null}
                    {/* End Tools Mapping */}
                  </div>
                ))}
              </div>
                 
            </div>
          
    
        
        </div>
      );
    };
    
    export default DashboardTools;
    




