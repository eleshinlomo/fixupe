import {useState} from 'react'
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Link from 'next/link'
import {  MinusIcon, PlusIcon } from 'lucide-react'

export const PolicyAgreePopup = ()=>{
    const [policyPopUpIsVisible, setPolicyPopUpIsVisible] = useState(true)
    const [importantCookies, setImportantCookies] = useState<boolean>(false)
    
    const closePolicyPopUp = ()=>{
        setPolicyPopUpIsVisible(false)
    }

    const closeImportantCookies = ()=>{
        setImportantCookies(false)
    }

    const openImportantCookies = ()=>{
        setImportantCookies(true)
    }

//   Icons
    const importantIcon = (<PlusIcon className='bg-blue-500' />)
    const closeIcon = (< MinusIcon className='bg-blue-500' />)

    return (
       <div>
        {policyPopUpIsVisible ?
        <div className="space-y-4 flex flex-col md:flex md:flex-row gap-2 
        px-2  py-2 z-10
        justify-center items-center  text-black">
        
         <p>
         We value your privacy
         Websites use cookies all the time. GlobalLogic, a Hitachi Group Company uses it to make our websites secure, functional, and accessible (Necessary Cookies), to understand how you use our website to improve your experience (Analytics Cookies), and to present you with personalized content (Marketing Cookies - this includes reaching out to you through our campaigns). Also, the buttons “Share” and “Like” communicate with your social media accounts - this involves sharing some of your data for technical and security reasons with your social media. For more detailed information and to manage 
         your preferences later, please see our Cookies Policy.
         </p>
         <Sheet>
            <SheetTrigger>
            <Button variant='link' className="text-blue">
                Customize Settings
                </Button>
            </SheetTrigger>
         <SheetContent side='bottom' className="bg-black text-white">
            <div>
            <h2>Privacy Information</h2>
          <p>
          When you visit any website, it may store or retrieve information on 
          your browser, mostly in the form of cookies. 
          This information might be about you, your preferences or your device 
          and is mostly used to make the site work as you expect it to. 
          The information does not usually directly identify you, but it can give 
          you a more personalized web experience. Because we respect your right to 
          privacy, you can choose not to allow some types of cookies. Click on the 
          different category headings to find out more and change our default 
          settings. However, blocking some types of cookies may impact your 
          experience of the site and the services we are able to offer.
          <Button className='my-3' asChild><Link href='/privacy'>Read Privacy Policy</Link></Button>
          </p>
          <h3>Manage Consent</h3>
          <div>

            {/* Important Cookies */}
            <div className='flex gap-2 py-4'>
            <Button variant='outline' size='icon'>
            {importantCookies? closeIcon : importantIcon }
            </Button>
            <Button onClick={importantCookies? closeImportantCookies :
                 openImportantCookies}> {importantCookies? "Close" :
                  "Important Cookies"}</Button>
            </div>
            {importantCookies?
            <p>
            These cookies are necessary for the website to function and cannot 
            be switched off in our systems. They are usually only set in response to 
            actions made by you which amount to a request for services, such as setting 
            your privacy preferences, logging in or filling in forms.    
            You can set your browser to block or alert you about these cookies, 
            but some parts of the site will not then work. 
            These cookies do not store any personally identifiable information.
            </p>:null
            }
          </div>
          </div>
         </SheetContent>
         </Sheet>
         
         <div className="flex py-2 gap-2">
         <Button variant='default' onClick={closePolicyPopUp}>Disable All</Button>
         <Button variant='default' onClick={closePolicyPopUp}>Accept All</Button>
         </div>
            
        </div>:null
            }
        </div>
    )
}