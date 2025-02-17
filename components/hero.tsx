"use client";
import { BotIcon, BriefcaseIcon, ComputerIcon, MailPlusIcon, PiIcon } from "lucide-react";
import Image from 'next/image';
import { CtaBlockPage } from "./ctablock";
import { Button } from "./ui/button";
import { useEffect, useState } from 'react';
import Typewriter from "@/components/typewriter";
import programImage from '@/public/images/program.jpg';
import ModalVideoPage from "@/app/(allroutes)/(publicroutes)/modalvideopage/page";

const Hero = () => {
  const [customText, setCustomText] = useState<string[]>([]);
  const MYAFROSAI_URL = process.env.NEXT_PUBLIC_MYAFROSAI_HOME;

  useEffect(() => {
    setCustomText([
      "AI-Integrated CRM",
      "Image GenAI",
      "AI Agents",
      "AI Powered Store"
    ]);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Typewriter Section */}
      <div className="py-8 bg-gradient-to-r from-blue-600 to-black text-white">
        
          <Typewriter textArray={customText} />
          
          <div className="py-4">
          <ModalVideoPage />
          </div>
        
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={programImage}
              alt="Programming Image"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <div className="border-b border-white pb-4">
              <h1 className="text-3xl font-bold font-arial">PORTFOLIO</h1>
            </div>

            <p className="text-lg text-gray-300">
              Explore world-class apps with integrated AI Agents. On a mission to make software solutions accessible, intuitive, and transformative for businesses. Whether you run an enterprise or a start-up, explore a diverse range of tools offering the best solutions for business scaling.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <a href={`${MYAFROSAI_URL}/voicerecorder`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300"
                >
                  VOICE RECORDER
                </Button>
              </a>
              <a href={`${MYAFROSAI_URL}/genai/image/texttoimgpage`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-300 shadow-blue-glow"
                >
                  GENERATE IMAGE
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;