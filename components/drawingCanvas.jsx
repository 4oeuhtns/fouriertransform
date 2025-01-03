"use client";
import { useRef, useState, useEffect  } from 'react';

export default function DrawingCanvas({ onPointsUpdate }){
    const canvasRef = useRef(null); 
    const isDrawingRef = useRef(false); 
    const [pointsDraw, setPointsDraw] = useState([]); // Stores the list of points to draw
    const lastUpdateRef = useRef(Date.now()); // Tracks the last time a point was added
    const [points, setPoints] = useState([]); // Stores the list of points to calculate with
  
    const startDrawing = (e) => {
      const { offsetX, offsetY } = e.nativeEvent;
      isDrawingRef.current = true;
      setPointsDraw([[offsetX, offsetY]]); // Start with the first point
    };
  
    const draw = (e) => {
      if (!isDrawingRef.current) return;
      const { offsetX, offsetY } = e.nativeEvent;
  
      const now = Date.now();
      if (now - lastUpdateRef.current >= 100) {
        lastUpdateRef.current = now;
        setPoints((prevPoints) => [...prevPoints, [offsetX, offsetY]]);
      }
      setPointsDraw((prevPoints) => [...prevPoints, [offsetX, offsetY]]);
  
      // Draw on the canvas
      const ctx = canvasRef.current.getContext('2d');
      const lastPoint = pointsDraw[pointsDraw.length - 1];
      
      if (lastPoint) {
            ctx.beginPath();
            ctx.moveTo(lastPoint[0], lastPoint[1]);
            ctx.lineTo(offsetX, offsetY);
            ctx.stroke();
      }
    };
  
    const stopDrawing = () => {
      isDrawingRef.current = false;
    };
  
    const clearCanvas = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setPointsDraw([]);
    };

    useEffect(() => {
        onPointsUpdate(points);
      }, [points, onPointsUpdate]);
  
    return (
      <div>
        <canvas
          ref={canvasRef}
          width="600"
          height="600"
          style={{ border: '1px solid black', cursor: 'crosshair' }}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
        <button onClick={clearCanvas}>Clear</button>
      </div>
    );
  };