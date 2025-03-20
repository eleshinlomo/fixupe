"use client";
import React, { useState } from "react";
import { jsPDF } from "jspdf";
import mammoth from "mammoth";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";

const WordToPdfConverter = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("Upload Your Word Document");
  const [docxContent, setDocxContent] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const convertWordToPdf = async () => {
    setMessage("Converting Word to PDF...");
    if (!file) {
      alert("Please upload a DOCX file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      if (!event.target) return;
      const arrayBuffer = event.target.result as ArrayBuffer;

      try {
        const result = await mammoth.convertToHtml({ arrayBuffer });
        const customStyles = `
          body { font-family: Arial, sans-serif; }
          h1, h2, h3, h4, h5, h6 { color: #333; }
          p { margin: 10px 0; }
        `;
        const styledHtmlContent = `
          <style>${customStyles}</style>
          ${result.value}
        `;
        setDocxContent(styledHtmlContent);

        // Wait for the DOM update, then generate the PDF
        setTimeout(() => generatePDF(), 1000);
      } catch (error) {
        console.error("Error converting DOCX to PDF:", error);
        alert("Failed to convert the file.");
      }
    };

    reader.readAsArrayBuffer(file);
  };

  const generatePDF = async () => {
    const element = document.getElementById("docx-preview");
    if (!element) {
      alert("Failed to find content to convert.");
      return;
    }

    // Ensure the preview is visible
    element.style.display = "block";

    html2canvas(element, { scale: 3, useCORS: true }).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pageHeight = 297;
      let heightLeft = imgHeight;
      let position = 0;

      while (heightLeft > 0) {
        pdf.addImage(canvas, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        position -= pageHeight;
        if (heightLeft > 0) {
          pdf.addPage();
        }
      }

      pdf.save(file?.name.replace(".docx", ".pdf"));
      setMessage("Document has been converted");

      // Hide preview after capturing
      element.style.display = "none";
    });
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 bg-gray-100 rounded-lg shadow-md w-96 mx-auto text-black">
      <h2 className="text-lg font-semibold mb-4">DOCX to PDF Converter</h2>

      <input type="file" accept=".docx" onChange={handleFileChange} className="text-black" />
      <button
        onClick={convertWordToPdf}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Convert to PDF
      </button>

      {/* Keep preview visible for rendering, but set small */}
      <div
        id="docx-preview"
        style={{
          width: "800px",
          padding: "10px",
          background: "white",
          border: "1px solid black",
          overflow: "auto",
        }}
        dangerouslySetInnerHTML={{ __html: docxContent }}
      />
    </div>
  );
};

export default WordToPdfConverter;