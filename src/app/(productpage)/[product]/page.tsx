
'use client'
import {useState, useEffect, useContext} from 'react'
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Metadata } from "next";
import { GeneralContext } from "@/contextproviders/generalcontext";
import { useParams } from "next/navigation";
import ProductHero from '../producthero';
import ProductContact from '../(productform)';
import ProductVideoPage from '../productvideopage';
import PageNotFound from '../pagenotfound';
import ProductTestimonialPage from '../(producttestimonials)';
import Brands from '@/components/Brands';


// export const metadata: Metadata = {
//   title: "Petrolage recruitment",
//   description: "This is Home for Petrolage",
//   // other metadata
// };

const ProductPage = ()=> {
  
 
  const generalContext = useContext(GeneralContext)
  const {username, validProducts, pageName, setPageName} = generalContext
  const searchParams = useParams()
  const getPageName = searchParams.product.toString().toLowerCase()
  console.log(getPageName)
  const [pageNameExist, setPageNameExist] = useState(false)

  useEffect(()=>{
    if (validProducts.includes(getPageName)){
      setPageNameExist(true)
      setPageName(getPageName)
    }
  },[])
  
  // const size = new URLSearchParams(searchParams.toString())

  





      return (
        <>
         
      
          {pageNameExist ? 
          <div>
          
          <ProductHero pageName={pageName} />
          <Brands />
          <ProductContact />
          <ProductTestimonialPage />
          <ScrollUp />
          </div>:
          <div>
           <PageNotFound pageName={pageName}  />
          </div>
          }
      
        </>
      );
    }
    
    
  

    export default ProductPage
  
  



  
 