import ReactMarkdown from 'react-markdown';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface TransferButtonProps {
    markdown: string
}

const DownloadTrades = ({markdown} : TransferButtonProps) => {

const downloadTransfer = ()=>{

  if (markdown.length === 0) {
    console.error('No markdown content found');
    return;
  }

  // Convert Markdown to HTML
  const markdownHtml = (
    <ReactMarkdown>
      {markdown}
    </ReactMarkdown>
  );

  // Create a temporary div to render the Markdown HTML
  const tempDiv = document.createElement('div');
  tempDiv.style.position = 'absolute';
  tempDiv.style.left = '-9999px';
  tempDiv.innerHTML = markdownHtml.props.children;
  document.body.appendChild(tempDiv);

  // Use html2canvas to convert HTML to an image
  html2canvas(tempDiv).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');

    // Use jsPDF to create a PDF
    const pdf = new jsPDF('p', 'mm', 'a4'); // Portrait, millimeters, A4 size
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate height to maintain aspect ratio

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('myafros_crypto.pdf'); // Save the PDF

    // Clean up the temporary div
    document.body.removeChild(tempDiv);
  });
}

  return (
    <div>
        <button className='bg-blue-500 rounded-2xl p-2' 
        onClick={downloadTransfer}
        >Download</button>
    </div>
  )
};

export default DownloadTrades