"use client";
import { solver } from "@/components/algorithm";
import Canvas from "@/components/canvas";
import { useRef, useEffect } from "react";

export default function Epicycle({ points, speed, colour, glow, ...props }) {
  console.log(points);
  let circles = solver(points);

  const currentPoint = useRef([]);
  const prevPoint = useRef([]);

  useEffect(() => {
    circles = solver(points);
    currentPoint.current = [];
    prevPoint.current = [];
  }, [points]);

  const drawCycles = (ctx, frame) => {
    ctx.resetTransform();
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.scale(1, -1); // Flip vertically

    ctx.clearRect(
      -ctx.canvas.width / 2,
      -ctx.canvas.height / 2,
      ctx.canvas.width,
      ctx.canvas.height
    );
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 2;

    // Store previous point before calculating new one
    prevPoint.current = { ...currentPoint.current };

    ctx.strokeStyle = "rgb(26,143,227)";
    // Draw vector
    ctx.beginPath();
    let prev = [0, 0];
    let cur = [];
    const cyclePoints = [];
    for (let i = 0; i < circles.length; i++) {
      const c = circles[i];
      const angle = c.freq * frame + c.phase;
      cur = [
        prev[0] + c.amp * Math.cos(angle),
        prev[1] + c.amp * Math.sin(angle),
      ];

      if (!(i === 0 && c.freq === 0)) {
        ctx.moveTo(prev[0], prev[1]);
        ctx.lineTo(cur[0], cur[1]);
      }

      cyclePoints.push({ x: prev[0], y: prev[1], amp: c.amp, freq: c.freq });
      prev = cur;
    }
    ctx.stroke();

    ctx.strokeStyle = "rgba(150,255,50,0.3)";
    ctx.beginPath();
    for (let i = 0; i < cyclePoints.length; i++) {
      const p = cyclePoints[i];
      if (!(i === 0 && p.freq === 0)) {
        ctx.moveTo(p.x + p.amp, p.y);
        ctx.arc(p.x, p.y, p.amp, 0, 2 * Math.PI);
      }
    }
    ctx.stroke();

    currentPoint.current = {
      x: cur[0],
      y: cur[1],
    };
  };
  const shouldClearPath = useRef(false);

  useEffect(() => {
    shouldClearPath.current = true;
  }, [points, speed, colour, glow, props]);

  const hue = useRef(0);

  const drawPath = (ctx, frame) => {
    hue.current += 0.2;
    ctx.resetTransform();
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.scale(1, -1); // Flip vertically

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 5;
    ctx.strokeStyle = colour === "Rainbow" ? `hsl(${hue.current}, 100%, 50%)` : colour;
    ctx.shadowBlur = 0;
    
    // Draw path between previous and current points
    ctx.beginPath();
    ctx.moveTo(prevPoint.current.x, prevPoint.current.y);
    ctx.lineTo(currentPoint.current.x, currentPoint.current.y);

    if (glow === true) {
      ctx.lineWidth = 9;
      ctx.globalAlpha = 0.2;
      ctx.stroke();
      
      ctx.lineWidth = 7;
      ctx.globalAlpha = 0.4;
      ctx.stroke();
    }
    
    ctx.lineWidth = 5;
    ctx.globalAlpha = 1.0;
    ctx.stroke();
    

    if (shouldClearPath.current) {
      ctx.clearRect(
        -ctx.canvas.width / 2,
        -ctx.canvas.height / 2,
        ctx.canvas.width,
        ctx.canvas.height
      );
      shouldClearPath.current = false;
    }
  };
  return (
    <div>
      <Canvas
        draw={drawPath}
        speed={speed}
        {...props}
        className="absolute left-0 top-0 z-0"
      />
      <Canvas
        draw={drawCycles}
        speed={speed}
        {...props}
        className="absolute left-0 top-0 z-1"
      />
    </div>
  );
}
