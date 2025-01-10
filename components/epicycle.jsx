"use client";
import { solver } from "@/components/algorithm";
import Canvas from "@/components/canvas";
import { useRef, useEffect } from "react";

export default function Epicycle({ points, speed, ...props }) {
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
    for (let i = 0; i < circles.length; i++) {
      cur = [
        prev[0] +
          circles[i].amp * Math.cos(circles[i].freq * frame + circles[i].phase),
        prev[1] +
          circles[i].amp * Math.sin(circles[i].freq * frame + circles[i].phase),
      ];

      if (!(i === 0 && circles[i].freq === 0)) {
        ctx.moveTo(prev[0], prev[1]);
        ctx.lineTo(cur[0], cur[1]);
      }

      prev = cur;
    }
    ctx.stroke();

    ctx.strokeStyle = "rgba(150,255,50,0.3)";
    prev = [0, 0];
    cur = [];
    for (let i = 0; i < circles.length; i++) {
      cur = [
        prev[0] +
          circles[i].amp * Math.cos(circles[i].freq * frame + circles[i].phase),
        prev[1] +
          circles[i].amp * Math.sin(circles[i].freq * frame + circles[i].phase),
      ];

      if (!(i === 0 && circles[i].freq === 0)) {
        ctx.beginPath();
        ctx.arc(prev[0], prev[1], circles[i].amp, 0, 2 * Math.PI);
        ctx.stroke();
      }

      prev = cur;
    }

    currentPoint.current = {
      x: cur[0],
      y: cur[1],
    };
  };
  const shouldClearPath = useRef(false);

  useEffect(() => {
    shouldClearPath.current = true;
  }, [points]);

  const hue = useRef(0);

  const drawPath = (ctx, frame) => {
    hue.current += 0.2;
    ctx.resetTransform();
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.scale(1, -1); // Flip vertically

    if (shouldClearPath.current) {
      ctx.clearRect(
        -ctx.canvas.width / 2,
        -ctx.canvas.height / 2,
        ctx.canvas.width,
        ctx.canvas.height
      );
      shouldClearPath.current = false;
    }


    ctx.fillStyle = 'rgba(12, 22, 24, 0.005)';
    ctx.fillRect(-ctx.canvas.width / 2,
      -ctx.canvas.height / 2, ctx.canvas.width,
      ctx.canvas.height);

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 5;
    ctx.strokeStyle = `hsl(${hue.current}, 100%, 50%)`;

    // Draw path between previous and current points
    ctx.beginPath();
    ctx.moveTo(prevPoint.current.x, prevPoint.current.y);
    ctx.lineTo(currentPoint.current.x, currentPoint.current.y);
    ctx.stroke();
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
