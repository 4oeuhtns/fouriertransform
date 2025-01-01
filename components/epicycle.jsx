"use client";
import { solver } from "@/components/algorithm";
import Canvas from "@/components/canvas";
import { useRef } from "react";

export default function Epicycle({ points, speed, ...props }) {
  let circles = solver(points);
  console.log(JSON.stringify(circles));

  const currentPoint = useRef([]);
  const prevPoint = useRef([]);

  const drawCycles = (ctx, frame) => {
    ctx.resetTransform();
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.clearRect(-ctx.canvas.width / 2, -ctx.canvas.height / 2, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeStyle = "rgba(0, 0, 255, 0.3)";
    ctx.lineWidth = 5;

    // Store previous point before calculating new one
    prevPoint.current = { ...currentPoint.current };

    // Calculate new point
    currentPoint.current = {
      x: circles[0].amp * 200 * Math.cos(circles[3].freq * frame + circles[3].phase),
      y: circles[0].amp * 200 * Math.sin(circles[3].freq * frame + circles[3].phase)
    };

    // Draw vector
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(currentPoint.current.x, currentPoint.current.y);
    ctx.stroke();
  };

  const drawPath = (ctx, frame) => {
    ctx.resetTransform();
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgba(255, 0, 0, 0.5)";
    
    // Draw path between previous and current points
    ctx.beginPath();
    ctx.moveTo(prevPoint.current.x, prevPoint.current.y);
    ctx.lineTo(currentPoint.current.x, currentPoint.current.y);
    ctx.stroke();
  };
  return (
    <div className="relative">
        <Canvas draw={drawCycles} speed={speed} {...props} className="absolute left-0 top-0 z-0"/>
        <Canvas draw={drawPath} speed={speed} {...props} className="absolute left-0 top-0 z-1"/>
    </div>
  

  );
}
