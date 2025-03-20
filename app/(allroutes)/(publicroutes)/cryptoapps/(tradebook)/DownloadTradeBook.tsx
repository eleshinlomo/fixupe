
import ReactMarkdown from 'react-markdown';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { ReactNode, useRef , useState, useEffect} from 'react';
import TradeBook from './TradeBook';


interface GenerateTradeBookProps {
  tradeBookRef: React.RefObject<HTMLDivElement>;
}

const DownloadTradeBook = ({tradeBookRef}: GenerateTradeBookProps) => {

   
const generate = async ()=>{


  // Create a temporary div to render the Markdown HTML
  if(tradeBookRef && !tradeBookRef.current){
      console.log('No trade book ref found')
      return
  }

  // Use html2canvas to convert HTML to an image


    // Use jsPDF to create a PDF
    const pdf = new jsPDF('p', 'mm', 'a4'); // Portrait, millimeters, A4 size
    pdf.html(tradeBookRef.current as HTMLElement, {
      callback: function (pdf) {
        pdf.save("myafrosTrades('0E12345JFH78').pdf");
      },
      x: 10,
      y: 10,
    });

   

}

  return (
    <div className='text-white'>

        
      
        <button className='bg-blue-500 rounded-2xl p-2' onClick={generate}>
          Download TradeBook
        </button>
      
    </div>
  )
};

export default DownloadTradeBook