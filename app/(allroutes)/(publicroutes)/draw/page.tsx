"use client";

import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [lWidth, setLWidth] = useState<number>(2);
  const [lColor, setLColor] = useState<string>('black');
  const [bgColor, setBgColor] = useState<string>('white');
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [isDate, setIsDate] = useState(false);
  const [date, setDate] = useState('');
  const [isWritingName, setIsWritingName] = useState(false);
  const [name, setName] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const [error, setError] = useState('');

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
      c.fillStyle = bgColor;
      c.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, [ctx, bgColor, lColor]);

  // Clear canvas but preserve context
  const clearDrawing = () => {
    if (ctx && canvasRef.current) {
      const canvas = canvasRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setBgColor('white');
      setLColor('black');
      setCtx(null);
    } else {
      setError('No drawing to clear');
    }
  };

  // Update line width in context when it changes
  useEffect(() => {
    if (ctx) {
      ctx.lineWidth = lWidth;
    }
  }, [lWidth, ctx]);

  // Get the position of the mouse or touch
  const getPosition = (e: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    if (e instanceof MouseEvent) {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    } else if (e instanceof TouchEvent) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    return { x: 0, y: 0 };
  };

  // Start drawing
  const startDrawing = (e: MouseEvent | TouchEvent) => {
    setIsDrawing(true);
    const pos = getPosition(e);
    setLastPos(pos);
  };

  // Draw on the canvas
  const draw = (e: MouseEvent | TouchEvent) => {
    if (!isDrawing || !ctx) return;

    const pos = getPosition(e);
    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    setLastPos(pos);
  };

  // Stop drawing
  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // Name Functions
  const addName = () => {
    setIsWritingName(false);
    if (!name) {
      setError('Name cannot be empty');
      setIsWritingName(true);
      return;
    }
    setError('');
    setSelectedName(name);
    setIsWritingName(false);
  };

  const removeName = () => {
    setSelectedName('');
    setName('');
    setIsWritingName(false);
  };

  // Toggle Name
  const showNameEditor = () => {
    setIsWritingName(true);
  };

  const closeNameEditor = () => {
    setIsWritingName(false);
  };

  // Change BG color
  const changeCanvasBGColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if(bgColor === 'black' || bgColor === 'transparent'){
      setLColor('blue')
    }else{
    setBgColor(e.target.value);
    }
  };

  

 

  // Change Line Color
  const changeLineColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLColor(e.target.value);
  };



  
  // Download the canvas as a PNG image
  const downloadCanvas = () => {
    if (!canvasRef.current || !ctx) {
      setError('Canvas is empty');
      return;
    }
    setError('');
    
    const canvas = canvasRef.current;
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    
    if (!tempCtx) return;
  
    // Get the bounding box of the drawn content
    const {left, top, width, height} = getDrawnContentBoundingBox(canvas, ctx);
    
    // Set the temporary canvas size to match the drawn content
    tempCanvas.width = width;
    tempCanvas.height = height;
    
    // Fill with white background (or transparent if that's what you want)
    tempCtx.fillStyle = bgColor === 'transparent' ? 'rgba(0,0,0,0)' : bgColor;
    tempCtx.fillRect(0, 0, width, height);
    
    // Draw only the relevant portion from the main canvas
    tempCtx.drawImage(
      canvas,
      left, top, width, height, // source rectangle
      0, 0, width, height      // destination rectangle
    );
    
    // Download the cropped image
    const dataUrl = tempCanvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "myafros_signature.png";
    link.click();
  };
  
  // Helper function to find the bounding box of drawn content
  const getDrawnContentBoundingBox = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const {width, height} = canvas;
    const imageData = ctx.getImageData(0, 0, width, height);
    const pixels = imageData.data;
    
    let minX = width;
    let minY = height;
    let maxX = 0;
    let maxY = 0;
    
    // Loop through all pixels to find the boundaries of non-transparent content
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const alpha = pixels[(y * width + x) * 4 + 3];
        if (alpha > 0) { // If pixel is not transparent
          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxX = Math.max(maxX, x);
          maxY = Math.max(maxY, y);
        }
      }
    }
    
    // Add some padding (10px) around the content
    const padding = 10;
    return {
      left: Math.max(0, minX - padding),
      top: Math.max(0, minY - padding),
      width: Math.min(width, maxX - minX + padding * 2),
      height: Math.min(height, maxY - minY + padding * 2)
    };
  };

  return (
    <div className="flex flex-col bg-black text-white text-center overflow-hidden">
      <h1 className="text-2xl font-extrabold px-4">
        CREATE A QUICK SKETCH OR E-SIGNATURE
      </h1>

      {/* Menu Control buttons */}
      <div className="flex flex-col justify-center w-full items-center pt-6 px-4">
        {/* Add Name input */}
        {isWritingName ? (
          <div className="gap-2 mb-4">
            <input
              onChange={(e) => setName(e.target.value)}
              placeholder="Write name here"
              value={name}
              className="border border-blue-500 text-black px-2 rounded-2xl mb-2"
            />
            <button
              onClick={addName}
              className="bg-blue-500 rounded-2xl text-white px-2"
            >
              {selectedName ? 'Modify Name' : 'Add Name'}
            </button>
          </div>
        ) : null}

        {/* Start of control buttons */}
        <div className="flex flex-col justify-center items-center w-full gap-3 font-extrabold mx-4">
          <div className="flex">
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

            {/* Download */}
            <button
              className="bg-blue-500 text-white rounded-2xl px-2"
              onClick={downloadCanvas}
            >
              Download
            </button>
          </div>

          {/* 2nd Button Column */}
          <div className="flex gap-6">
            {/* Change Line Color */}
            <div>
              <p>Line Color</p>
              <select
                className="bg-white text-black rounded-2xl px-2"
                value={lColor}
                onChange={changeLineColor}
              >
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
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
                <option value="transparent">Transparent</option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="pink">Pink</option>
                <option value="yellow">Yellow</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Canvas */}
      <div className="w-full shadow-2xl">
        {/* Error */}
        <p className="text-red-500 font-extrabold pt-5 text-xl">{error ? error : null}</p>
        {/* Show Name */}
        <p className="">{selectedName ? selectedName : null}</p>

        <div
          style={{ cursor: "crosshair" }}
          onMouseDown={(e) => startDrawing(e.nativeEvent)}
          onMouseMove={(e) => draw(e.nativeEvent)}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={(e) => startDrawing(e.nativeEvent)}
          onTouchMove={(e) => draw(e.nativeEvent)}
          onTouchEnd={stopDrawing}
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