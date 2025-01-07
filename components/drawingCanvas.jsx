"use client";
import { useRef, useState, useEffect } from "react";

export default function DrawingCanvas({ onPointsUpdate }) {
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
      setPoints((prevPoints) => [...prevPoints, [offsetX, -1 * offsetY]]);
    }
    setPointsDraw((prevPoints) => [...prevPoints, [offsetX, offsetY]]);

    const ctx = canvasRef.current.getContext("2d");
    const lastPoint = pointsDraw[pointsDraw.length - 1];
    if (lastPoint) {
      ctx.beginPath();
      ctx.moveTo(lastPoint[0], lastPoint[1]);
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
    }
  };

  const stopDrawing = (e) => {
    e.preventDefault();
    isDrawingRef.current = false;
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
        width="600"
        height="600"
        style={{ border: "1px solid black", cursor: "crosshair" }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />
      <button onClick={clearCanvas}>Clear</button>
    </div>
  );
}