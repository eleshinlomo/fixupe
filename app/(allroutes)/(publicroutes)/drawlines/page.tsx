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

  // Clear canvas but preserve context
  const clearDrawing = () => {
    if (ctx && canvasRef.current) {
      const canvas = canvasRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas content
    }
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
  }, []); 

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
      link.download = "canvas-drawing.png"; // Set the download filename
      link.click(); // Trigger the download
    }
  };

//   Toggle Date
  const toggleDate = ()=>{
    setIsDate(!isDate)
  }


//   Name Functions
const addName = ()=>{
    setIsWritingName(false)
    if(!name) {
        setError('Name cannot be empty')
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

  const changeCanvasBGColor = (e: React.ChangeEvent<HTMLSelectElement>)=>{
    setBgColor(e.target.value)

  }


  useEffect(()=>{
    
  }, [bgColor])

 

  return (

    <div className="flex flex-col bg-black text-white text-center">

      <h1 className="text-center text-2xl font-extrabold">
        CREATE A QUICK SKETCH OR E-SIGNATURE. 
      </h1>
    
    
    <div className="flex">

    {/* Controls */}
    <div>
    {/*Add Name */}
    {isWritingName  ? <div className="flex justify-center gap-2">
        <input 
        onChange={(e)=>setName(e.target.value)}
        placeholder="Write name here"
        value={name}
        className="border border-black text-black px-2" />
        <button 
        onClick={addName}
        className='bg-blue-500 roundex-2xl text-white px-2'>Add</button>
        </div>: null}
        
    {/* Start of controls */}
    <div className="flex flex-col gap-3 justify-center items-center font-extrabold ">
        <div className="flex justify-center">
          <button onClick={decreaseLineWidth}>
            <ArrowBigDown className="text-blue-500 text-2xl" />
          </button>
          <p>Line Width: {lWidth}</p>
          <button onClick={increaseLineWidth}>
            <ArrowBigUp className="text-blue-500 text-2xl" />
          </button>
        </div>
        
        {/* Clear */}
        <button
          className="bg-blue-500 text-white rounded-2xl px-2"
          onClick={clearDrawing}
        >
          Clear Draw
        </button>
        
        {/* Date */}
        <button
         onClick={toggleDate}
         className="bg-blue-500 text-white rounded-2xl px-2"
        >{isDate ? 'Remove Date' : 'Add Date'}</button>

        {/* Name */}
        {/* Shows the name editor */}
        {!selectedName ? <button
         onClick={isWritingName ? closeNameEditor : showNameEditor}
         className="bg-blue-500 text-white rounded-2xl px-2"
        >{isWritingName ? 'Close Editor': 'Add name'}</button>: null}
        
        {/* The Name modification button only shows when name has been set. */}
        {selectedName ? 
        <button
         onClick={selectedName ? showNameEditor : closeNameEditor}
         className="bg-blue-500 text-white rounded-2xl px-2"
        >{isWritingName ? 'Close Editor' : 'Modify Name'}</button>: null}

        {/* The Name removal button only shows when name has been set. */}
        {selectedName ? 
        <button
         onClick={removeName}
         className="bg-blue-500 text-white rounded-2xl px-2"
        >Remove Name</button>: null}
        

        
        
        {/* Download */}
        <button 
        className="bg-blue-500 text-white rounded-2xl px-2"
        onClick={downloadCanvas}>Download</button>

        {/* Change BG Color */}
      <div>
        Change background
        <select
        className="bg-blue-500 text-white rounded-2xl px-2"
        onChange={changeCanvasBGColor}
        value={bgColor}
        >
            <option value='transparent'>transparent</option>
            <option value='white'>White</option>
            <option value='red'>Red</option>
            <option value='red'>Green</option>
        </select>
        </div>
      
      </div>
      </div>

      
    {/* Canvas */}
       <div className="bg-white shadow-bg-green-500 shadow-2xl">
      {/* Error */}
      <p className="text-red-500 font-extrabold pt-5 text-xl">{error ? error : null}</p>
      {/* Show Name */}
      <p className="text-black">{selectedName ? selectedName : null}</p>

      <div
        style={{ cursor: "crosshair" }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      >
        <canvas ref={canvasRef} />
        {/* Date */}
        <p>{date ? date : null}</p>

        
      {/* Error */}
      <p className="text-red-500 font-extrabold pt-5 text-xl">{error ? error : null}</p>
      </div>
      </div>

      </div>

    </div>
  );
};

export default Canvas;
