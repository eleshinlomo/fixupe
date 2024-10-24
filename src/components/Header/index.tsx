"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { GeneralContext } from "@/contextproviders/generalcontext";
import { logoutApi } from "../auth";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/contextproviders/authprovider";
import { SettingsIcon } from "lucide-react";


const HeaderPage = () => {
  
  const [logoutBtnTxt, setLogoutBtnTxt] = useState('Logout')
  const generalContext = useContext(GeneralContext)
  const authContext = useContext(AuthContext)
  const {isLoggedIn} = authContext

  const router = useRouter()

  const handleLogout = async ()=>{
    setLogoutBtnTxt('Wait...')
    const response = await logoutApi()

    console.log(response)
  }

  useEffect(()=>{

  },[isLoggedIn])


  

  // Pathname
  const pathname = usePathname()

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header  z-[9999] flex justify-center items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="">
          {/* Logo */}
          <div className="relative -mx-4 flex justify-start">
            <div className="w-[70px] max-w-full px-4 ">
              <Link
                href="/"
                className={`header-logo block w-full  ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <Image
                  src="/images/logo/petrolage_logo.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-12 "
                />
              
              </Link>
            </div>
            
            {/* Mobile. Hidden on widescreen */}
            <div className="relative -mx-4 ">
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 
                    duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none 
                    lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  </nav>
                </div>

                  {/* MenuItems Container */}
                  <div className="hidden md:flex justify-center items-center  space-x-12">
                    
                    {menuData.map((menuItem, index) => (


                      <div key={index} className=" my-4 relative ">
                        
                          <Link
                           target={menuItem.target}
                            href={`${menuItem.path}`}
                            
                            // className="ease-in-up shadow-btn hover:shadow-btn-hover  bg-green-600 
                            // px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 
                            // md:block md:px-9 lg:px-6 xl:px-9 rounded-2xl"
                          >
                           
                            <div className={`text-${menuItem.iconColor}-300 }`}>{menuItem.icon}</div>
                          </Link>
                
                      </div>
                    ))}
                    <div className="flex gap-4">
                    <ThemeToggler />

                      {isLoggedIn ?
                      <button className="mx-4 px-8 py-2 bg-green-700 text-white rounded-2xl"
                      onClick={handleLogout}
                      >{logoutBtnTxt}</button> :
                      <Link href='/authpages/signinpage'><button className="mx-4 px-8 py-2 bg-green-700 text-white  rounded-2xl"
                      >Login</button></Link>}

                     

                    
                    </div>
              </div>
               {/* MenuItems Container End */}

               
              
            </div>
          </div>
        
      </header>
    </>
  );
};

export default HeaderPage;
