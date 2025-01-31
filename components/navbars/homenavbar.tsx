"use client";

import {useState, useEffect} from 'react'
import Link from "next/link";
import ThemeChanger from "../darkswitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import Logo from '@/public/logos/logo.png'
import { Button } from '../ui/button';
import { loginChecker, userLogout } from '../auth';
import SigninLandingpage from '@/app/(allroutes)/(publicroutes)/authpages/signinlandingpage';
import { navigation } from './navigation';


interface HomeNavbarProps {
  isLoggedIn: boolean;
}

const HomeNavbar = ({isLoggedIn}: HomeNavbarProps) => {

  const [isChecking, setIsChecking] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('Sign in')
  const [links, setLinks] = useState<Array<any>>([])


  useEffect(()=>{
    if(navigation.length > 0){
      setLinks(navigation)
    }
  }, [])

 

  return (
    <div className="w-full bg-black/80 text-white">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between ">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-4xl font-medium  dark:text-gray-100">
                    <span>
                      <Image
                        src={Logo}
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    
                  </span>
                </Link>
                 {/* Start of Mobile View */}
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  
                  <>
                    {links.map((item, index) => (
                      <a key={index} href={item.link}  className="w-full px-4 py-2 -ml-4  rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                          {item.name}
                      </a>
                    ))}
                    {isLoggedIn? 
                     <Link href='/dashboard/dashboardpage'>
                      <Button>
                      Dashboard
                      </Button>
                      </Link>
                    :<SigninLandingpage  />}
                  </>
                </Disclosure.Panel>
                 {/* End of Mobile View */}

                
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden  text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {links.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={menu.link} target={menu.target}  className="inline-block  px-4 py-2 text-lg font-normal no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu.name}
                </Link>
              </li>
            ))}
              {/* <li className="mr-3 nav__item">
                <Link href='https://blog.myafros.com' target='_blank'  className="inline-block  px-4 py-2 text-lg font-normal no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    Blog
                </Link>
              </li> */}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
        <a href='/draw'><Button className='bg-blue-500 text-white rounded-2xl hover:bg-blue-500'>
            DRAW
        </Button>
        </a>
        {/* {isLoggedIn? 
          <div className='flex gap-3'>
          <Link href='/dashboard/dashboardpage'>
          <Button className='bg-blue-500 text-white rounded-2xl hover:bg-blue-500'>
            Dashboard
            </Button>
          </Link>
          <Button className='bg-blue-500 text-white rounded-2xl hover:bg-blue-500' onClick={userLogout}>
            Sign Out
            </Button>
          
          </div>
          :<SigninLandingpage />} */}

          {/* <ThemeChanger /> */}
        </div>
      </nav>
    </div>
  );
}

export default HomeNavbar
