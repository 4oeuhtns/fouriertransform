"use client";
import { solver } from "@/components/algorithm";
import Canvas from "@/components/canvas";
import { useRef, useEffect } from "react";

export default function Epicycle({ points, speed, ...props }) {
  let circles = solver(points);
  console.log(JSON.stringify(circles));

  const currentPoint = useRef([]);
  const prevPoint = useRef([]);

  useEffect(() => { circles = solver(points); currentPoint.current = []; prevPoint.current = [];}, [points]);
  
  const drawCycles = (ctx, frame) => {
    ctx.resetTransform();
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.scale(1, -1); // Flip vertically

    ctx.clearRect(-ctx.canvas.width / 2, -ctx.canvas.height / 2, ctx.canvas.width, ctx.canvas.height);
    ctx.lineWidth = 5;

    // Store previous point before calculating new one 
    prevPoint.current = { ...currentPoint.current };

    ctx.strokeStyle = "rgba(0, 0, 255, 0.3)";
    // Draw vector
    ctx.beginPath();
    let prev = [0, 0];
    let cur = [];
    for (let i = 1; i < circles.length; i++) {
        cur = [
            prev[0] + circles[i].amp * Math.cos(circles[i].freq * frame + circles[i].phase),
            prev[1] + circles[i].amp * Math.sin(circles[i].freq * frame + circles[i].phase)
        ];

        ctx.moveTo(prev[0], prev[1]);
        ctx.lineTo(cur[0], cur[1]);

        prev = cur;
    }
    ctx.stroke();

    ctx.strokeStyle = "rgba(0, 255, 0, 0.3)";
    prev = [0, 0];
    cur = [];
    for (let i = 1; i < circles.length; i++) {
        cur = [
            prev[0] + circles[i].amp * Math.cos(circles[i].freq * frame + circles[i].phase),
            prev[1] + circles[i].amp * Math.sin(circles[i].freq * frame + circles[i].phase)
        ];

        ctx.beginPath();
        ctx.arc(prev[0], prev[1], circles[i].amp, 0, 2 * Math.PI);
        ctx.stroke();

        prev = cur;
    }
    

    currentPoint.current = {
        x: cur[0],
        y: cur[1]
      };
  };
  const shouldClearPath = useRef(false);

  useEffect(() => {
    shouldClearPath.current = true;
  }, [points]);

  const drawPath = (ctx, frame) => {
    ctx.resetTransform();
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.scale(1, -1); // Flip vertically

    if (shouldClearPath.current) {
      ctx.clearRect(-ctx.canvas.width / 2, -ctx.canvas.height / 2, ctx.canvas.width, ctx.canvas.height);
      shouldClearPath.current = false;
    }
    
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
        <Canvas draw={drawPath} speed={speed} {...props} className="absolute left-0 top-0 z-0"/>
        <Canvas draw={drawCycles} speed={speed} {...props} className="absolute left-0 top-0 z-1"/>
        
    </div>
  

  );
}
