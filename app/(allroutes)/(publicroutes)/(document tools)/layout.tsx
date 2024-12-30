

import Footer  from "@/components/footer";
import { Button } from "@/components/ui/button";
import { FileIcon } from "lucide-react";
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Documents | Fixupe',
    description: 'Fixupe is a platform that provides AI Tools for task completion',
  }


const DocumentPageLayout = ({


    children
}: {
    children: React.ReactNode;
})=>{


    return(
         <div className='w-full h-full'>

           <main className="">
            <div className="text-center flex flex-1 flex-col justify-center items-center gap-3">
           <p className="font-extrabold my-4">CONVERTERS</p>
            <div className="flex flex-1 flex-wrap justify-center items-center gap-8">
                
                {/* PDFTOWORD */}
                <Link href='/pdftoword'>
                <p className="text-sm font-extrabold">PDFtoWord</p>
                <Button size='icon' className="text-2xl">
                <FileIcon className="text-2xl" /> 
                </Button>
                </Link>

                {/* PDFTOCSV */}
                <Link href='/pdftoword'>
                <p className="text-sm font-extrabold">PDFtoCSV</p>
                <Button size='icon' className="text-2xl">
                <FileIcon className="text-2xl" /> 
                </Button>
                </Link>

                {/* PDFTOTEXT */}
                <Link href='/pdftoword'>
                <p className="text-sm font-extrabold">PDFtoTEXT</p>
                <Button size='icon' className="text-2xl">
                <FileIcon className="text-2xl" /> 
                </Button>
                </Link>

                {/* WORDTOPDF */}
                <Link href='/pdftoword'>
                <p className="text-sm font-extrabold">WORDtoPDF</p>
                <Button size='icon' className="text-2xl">
                <FileIcon className="text-2xl" /> 
                </Button>
                </Link>

            </div>
            </div>
            
            {children}
            
           </main>

         {/* Footer */}
         
         <Footer />
         

        </div>
    )
}



export default DocumentPageLayout



