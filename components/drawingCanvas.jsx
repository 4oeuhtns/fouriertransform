"use client";
import { useRef, useState, useEffect } from "react";

export default function DrawingCanvas({ onPointsUpdate, width, height }) {
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);
  const [pointsDraw, setPointsDraw] = useState([]);
  const lastUpdateRef = useRef(Date.now());
  const [points, setPoints] = useState([]);

  // Get offsetX/offsetY from touch
  const getTouchPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    return {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    };
  };

  const startDrawing = (e) => {
    e.preventDefault();
    let offsetX, offsetY;
    if (e.type === "touchstart") {
      const pos = getTouchPos(e);
      offsetX = pos.x;
      offsetY = pos.y;
    } else {
      const { offsetX: mx, offsetY: my } = e.nativeEvent;
      offsetX = mx;
      offsetY = my;
    }
    if (!isDrawingRef.current) clearCanvas();
    isDrawingRef.current = true;
    setPointsDraw([[offsetX, offsetY]]);
  };

  const draw = (e) => {
    if (!isDrawingRef.current) return;
    e.preventDefault();
    let offsetX, offsetY;
    if (e.type === "touchmove") {
      const pos = getTouchPos(e);
      offsetX = pos.x;
      offsetY = pos.y;
    } else {
      const { offsetX: mx, offsetY: my } = e.nativeEvent;
      offsetX = mx;
      offsetY = my;
    }
    const now = Date.now();
    if (now - lastUpdateRef.current >= 100) {
      lastUpdateRef.current = now;
      setPoints((prevPoints) => [...prevPoints, [offsetX - width / 2, -(offsetY - height / 2)]]);
    }
    setPointsDraw((prevPoints) => [...prevPoints, [offsetX, offsetY]]);

    const ctx = canvasRef.current.getContext("2d");
    const lastPoint = pointsDraw[pointsDraw.length - 1];
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "rgb(244, 255, 248)";
    if (lastPoint) {
      ctx.beginPath();
      ctx.moveTo(lastPoint[0], lastPoint[1]);
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
    }
  };

  const stopDrawing = (e) => {
    e.preventDefault(); 
    if (pointsDraw.length > 1) { 
      const firstPoint = pointsDraw[0]; 
      const lastPoint = pointsDraw[pointsDraw.length - 1]; 
      const distance = Math.sqrt(Math.pow(lastPoint[0] - firstPoint[0], 2) + Math.pow(lastPoint[1] - firstPoint[1], 2)); 
      const numIntermediatePoints = Math.floor(distance / 100); 
      for (let i = numIntermediatePoints; i >= 1; i--) { 
        const t = i / (numIntermediatePoints + 1); 
        const intermediatePoint = [(1 - t) * firstPoint[0] + t * lastPoint[0], (1 - t) * firstPoint[1] + t * lastPoint[1],]; 
        setPoints((prevPoints) => [...prevPoints, [intermediatePoint[0] - width / 2, -(intermediatePoint[1] - height / 2)],]); 
      } 
    } 
    isDrawingRef.current = false;
    console.log(JSON.stringify(points))
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setPointsDraw([]);
    setPoints([]);
  };

  useEffect(() => {
    onPointsUpdate(points);
  }, [points, onPointsUpdate]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ cursor: "crosshair" }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />
    </div>
  );
}