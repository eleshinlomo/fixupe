"use client";
import {useState, useEffect} from 'react'
import Link from "next/link";
import Image from 'next/image'
import { Montserrat} from "next/font/google";
import { cn } from "@/lib/utils";
import { ArrowBigDown, ArrowBigRight, ArrowDown, Code, CodeIcon, EyeIcon,
   ImageIcon, LayoutDashboard, LogOutIcon, MenuIcon, 
   MessageSquare, Music2Icon, Settings, VideoIcon } from "lucide-react";
import {usePathname, useRouter} from 'next/navigation'
import { Button } from "../ui/button";
// AI Tools
import { Tools} from '@/components/tools'
// import { ConversationTools} from '@/components/tools'
// import { DocumentTools} from '@/components/tools'
// import { MediaTools} from '@/components/tools'
import { OtherDashButtons } from '../otherdashbuttons';



const montserrat = Montserrat({
    weight: "600",
    subsets:["latin"]
})

interface toolisOpenProps{
  [key: string] : boolean;
}
  
  const DashSidebar = () => {
    const [isOpenConversation, setIsOpenConversation] = useState<boolean>(false);
    const [isOpenWriting, setIsOpenWriting] = useState<boolean>(false);
    const [isOpenMedia, setIsOpenMedia] = useState<boolean>(false);
    const [isOpenDashboard, setIsOpenDashboard] = useState<boolean>(false);
    const [toolIsOpen, setToolIsOpen] = useState<boolean>(false);
    const [toolItemIsOpen, setToolItemIsOpen] = useState(false);
    const [isOpenSettings, setIsOpenSettings] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<null | any>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false)
  
    const handleSideBarClick = (category: any) => {
      setSelectedItem(category);
    };
  
    const router = useRouter();
    const pathname = usePathname();
  
    return (
      <div>
        <div className='w-full flex flex-col  text-white pt-14 md:pt-2 px-2'>
          <div className=" py-2 flex-1">
            <Link href="/" className="flex items-center pl-3 mb-14">
              <div className="relative w-8 h-8 mr-4">
                <Image fill alt="logo" src="/logos/logo.png" />
              </div>
              <h3 className={cn("text-sm font-bold", montserrat.className)}>
                MYAFROS CRM
              </h3>
            </Link>
  
            <div className=" w-full pt-12 shadow-2xl">
              {/* Start of Tools */}
              <div className=''>
                {Tools.map((category: any, index: any) => (
                  <div key={index}>
                    <div className=''>
                      {category.category === 'CRM' || 
                      category.category === 'Settings' || 
                      category.category === 'Home' 
                        ?
                      <Button
                      onClick= {()=>router.push(category.href)}
                      className='w-full my-1'
                      >
                       <div className='flex flex-1 justify-between items-start text-sm'>
                          <p>{category.category}</p>
                          {pathname === category.href ? <ArrowBigRight /> : <ArrowBigDown />}
                        </div>
                      </Button>:
                      <Button
                        className='w-full my-1'
                        onClick={()=>handleSideBarClick(category)}
                      >
                        <div className='flex flex-1 justify-between items-start'>
                          <p>{category.category}</p>
                          {pathname === category.id ? <ArrowBigRight className='' /> : <ArrowBigDown />}
                        </div>
                      </Button>}
                    </div>
  
                    <div>
                      {selectedItem === category ?
                        selectedItem.tools.map((category: any, index: any) => (
                          <Link
                            href={category.href}
                            key={index}
                            className={cn(`text-sm group flex p-3 w-full justify-start
                            font-medium cursor-pointer hover:text-white hover:bg-white/10
                            rounded-lg transition
                            `,
                              pathname === category.href ? "text-white bg-white/10" : "text-zinc-400"
                            )}
                          >
                            <div className="flex items-center flex-1">
                              <category.icon className={cn("h-5 w-5 mr-3", category.color)} />
                              {category.label}
                            </div>
                          </Link>
                        )) : null
                      }
                    </div>
                  </div>
                ))}
                {/* End of Tools */}
              </div>
            </div>
          </div>
        </div>
        {/* Other Sidebar buttons */}
        <div>
        <OtherDashButtons />
        </div>
      </div>
    );
  };
  
  export default DashSidebar;
  