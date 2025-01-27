"use client";

import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [lWidth, setLWidth] = useState<number>(2);
  const [lColor, setLColor] = useState<string>('black')
  const [bgColor, setBgColor] = useState<string>('white')
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [isDate, setIsDate] = useState(false)
  const [date, setDate] = useState('')
  const [isWritingName, setIsWritingName] = useState(false)
  const [name, setName] = useState('')
  const [selectedName, setSelectedName] = useState('')
  const [error , setError] = useState('')

  // Increase line width
  const increaseLineWidth = () => {
    setLWidth((prevWidth) => prevWidth + 1);
  };

  // Decrease line width
  const decreaseLineWidth = () => {
    setLWidth((prevWidth) => (prevWidth > 1 ? prevWidth - 1 : 1));
  };

  

  // Set up canvas context when the component is mounted
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log("No canvas object found");
      return;
    }

    const c = canvas.getContext("2d");
    setCtx(c);

    // Set the canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (c) {
      c.lineWidth = lWidth; 
      c.lineCap = "round"; // Smooth curves
      c.strokeStyle = lColor; 
      c.fillStyle = bgColor; // Set initial background color
      c.fillRect(0, 0, canvas.width, canvas.height); // Fill the canvas background
      
    }
  }, [ctx, bgColor, lColor]); 

  // Clear canvas but preserve context
  const clearDrawing = () => {
 
    if (ctx && canvasRef.current) {
      const canvas = canvasRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas content
      setBgColor('white')
      setLColor('black')
      setCtx(null)
    }else{
      setError('No drawing to clear')
    }
   
  };

  // Update line width in context when it changes
  useEffect(() => {
    if (ctx) {
      ctx.lineWidth = lWidth; 
    }
  }, [lWidth, ctx]); 

  // Start drawing
  const startDrawing = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    setLastPos({ x: offsetX, y: offsetY });
  };

  // Draw on the canvas
  const draw = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDrawing || !ctx) return;

    const { offsetX, offsetY } = e.nativeEvent;
    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
    setLastPos({ x: offsetX, y: offsetY });
  };

  // Stop drawing
  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // Download the canvas as a PNG image
  const downloadCanvas = () => {
    if(!canvasRef.current){
        setError('Canvas is empty')
        return
    }
    if (canvasRef.current) {
      setError('')
      const canvas = canvasRef.current;
      const dataUrl = canvas.toDataURL("image/png"); // Convert canvas to PNG image URL
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "myafros.png"; // Set the download filename
      link.click(); // Trigger the download
    }
  };




//   Name Functions
const addName = ()=>{
    setIsWritingName(false)
    if(!name) {
        setError('Name cannot be empty')
        setIsWritingName(true)
        return
    }

    setError('')
    setSelectedName(name)
    setIsWritingName(false)
    
}

const removeName = ()=>{

    console.log('Remove function')
    setSelectedName('')
    setName('')
    setIsWritingName(false)
    
}



//   Toggle Name
  const showNameEditor = ()=>{
    setIsWritingName(true)
  }

  const closeNameEditor = ()=>{
    setIsWritingName(false)
  }
 
//   Change BG color
  const changeCanvasBGColor = (e: React.ChangeEvent<HTMLSelectElement>)=>{
    setBgColor(e.target.value)

  }

//   Change Line Color 
 const changeLineColor = (e: React.ChangeEvent<HTMLSelectElement>)=>{
    setLColor(e.target.value)
 }


 

 

  return (

    <div className="flex flex-col bg-black text-white text-center overflow-hidden">

      <h1 className="text-2xl font-extrabold">
        CREATE A QUICK SKETCH OR E-SIGNATURE. 
      </h1>

    
    {/* Menu Control buttons */}
    <div className="flex flex-col justify-center w-full items-center pt-6 px-4">

    {/*Add Name input  */}
    {isWritingName  ? 
    <div className=" gap-2 mb-4">
        <input 
        onChange={(e)=>setName(e.target.value)}
        placeholder="Write name here"
        value={name}
        className="border border-blue-500 text-black px-2 rounded-2xl mb-2 " />
        <button 
        onClick={addName}
        className='bg-blue-500 roundex-2xl text-white px-2 rounded-2xl'>{selectedName ? 'Modify Name' : 'Add Name'}</button>
    </div>: null
    }
        
    {/* Start of control buttons*/}
    <div className="flex  flex-col justify-center items-center w-full gap-3  font-extrabold mx-4">

    <div className="flex ">
          <button onClick={decreaseLineWidth}>
            <ArrowBigDown className="text-blue-500 text-2xl" />
          </button>
          <p>Line Width: {lWidth}</p>
          <button onClick={increaseLineWidth}>
            <ArrowBigUp className="text-blue-500 text-2xl" />
          </button>
        </div>

        {/* First button Column */}
        <div className="flex gap-6">
        
        {/* Clear */}
        <button
          className="bg-blue-500 text-white rounded-2xl px-2"
          onClick={clearDrawing}
        >
          Clear
        </button>
        
        {/* Date */}
        {/* <button
         onClick={toggleDate}
         className="bg-blue-500 text-white rounded-2xl px-2"
        >{isDate ? 'Remove Date' : 'Add Date'}</button> */}

        {/* Name */}
        {/* Shows the name editor */}
        {/* {!selectedName ? <button
         onClick={isWritingName ? closeNameEditor : showNameEditor}
         className="bg-blue-500 text-white rounded-2xl px-2"
        >{isWritingName ? 'Close Editor': 'Add name'}</button>: null}
        
        {/* The Name modification button only shows when name has been set. */}
        {/* {selectedName ? 
        <button
         onClick={selectedName ? showNameEditor : closeNameEditor}
         className="bg-blue-500 text-white rounded-2xl px-2"
        >{isWritingName ? 'Close Editor' : 'Modify Name'}</button>: null}

        {/* The Name removal button only shows when name has been set. */}
        {/* {selectedName ? 
        <button
         onClick={removeName}
         className="bg-blue-500 text-white rounded-2xl px-2"
        >Remove Name</button>: null} */} 
        
        {/* Download */}
        <button 
        className="bg-blue-500 text-white rounded-2xl px-2"
        onClick={downloadCanvas}>Download</button>
      </div>

{/* 2nd Button Column */}
  <div className="flex gap-6">
      {/* Change Line Color */}
      <div className="">
         <p>Line Color</p>
         <select
         className="bg-white text-black rounded-2xl px-2"
         value={lColor}
         onChange={changeLineColor}
         >
            <option value='black'>Black</option>
            <option value='blue'>Blue</option>
            <option value='red'>Red</option>

         </select>
      </div>

        {/* Change BG Color */}
      <div>
        <p>BG Color</p>
        <select
        className="bg-white text-black rounded-2xl px-2"
        onChange={changeCanvasBGColor}
        value={bgColor}
        >
            <option value='transparent'>Transparent</option>
            <option value='white'>White</option>
            <option value='red'>Red</option>
            <option value='green'>Green</option>
            <option value='pink'>Pink</option>
            <option value='yellow'>Yellow</option>
        </select>
        </div>

        </div>
        {/* //Endolumn of 2nd button */}
      
      </div>
      </div>

      
    {/* Canvas */}
       <div className="w-full   shadow-2xl">
      {/* Error */}
      <p className="text-red-500 font-extrabold pt-5 text-xl">{error ? error : null}</p>
      {/* Show Name */}
      <p className="">{selectedName ? selectedName : null}</p>

      <div
        style={{ cursor: "crosshair" }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      >
        <canvas ref={canvasRef} className="" />
        {/* Date */}
        <p>{date ? date : null}</p>

        
      {/* Error */}
      <p className="text-red-500 font-extrabold pt-5 text-xl">{error ? error : null}</p>
      </div>
      </div>

      

    </div>
  );
};

export default Canvas;
