'use client'
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Metadata } from "next";
import TestimonialPage from "@/components/Testimonials";
import Brands from "@/components/Brands";
import TopProjects from "@/components/topprojects";
import TopSlanted from "@/components/topslanted";
import ThreeColsSlanted from "@/components/threecolslanted";
import GetStartedButton from "@/components/getstartedbtn";




export default function Home() {

  // const urlParams = new URLSearchParams(location.search)
  // console.log(location.search)
  // const product = urlParams.get('productpage')

  return (
    <>
      
      <Hero />
      <Brands />
      <TopSlanted />
      <ThreeColsSlanted />
      <TopProjects />
      <div className="flex flex-wrap flex-col justify-center items-center   py-8 px-2 ">
      <p className=" text-center pt-6 mb-3 text-2xl font-bold text-green-500">
                VALIDATE YOUR IDEA BEFORE COMMITTING YOUR TIME.
      </p>

      <GetStartedButton />
      </div>
      
   
      <TestimonialPage />
      <Video />
      
     
      <ScrollUp />
      
    </>
  );
}
