
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Metadata } from "next";
import SigninPage from "../authpages/signinpage/page";

export const metadata: Metadata = {
  title: "Petrolage recruitment",
  description: "This is Home for Petrolage",
  // other metadata
};

export default function Home() {
  return (
    <>
     
      <Hero />
      <Contact />
      <Video />
      <ScrollUp />
  
      
    </>
  );
}
