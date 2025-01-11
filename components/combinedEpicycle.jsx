"use client";
import { solver } from "@/components/algorithm";
import Canvas from "@/components/canvas";
import { useRef, useEffect } from "react";

export default function CombinedEpicycle({ points, speed, colour, ...props }) {
  let circles = [];
  for (let i = 0; i < points.length; i++) {
    circles[i] = solver(points[i]);
  }

  const curPoint = useRef([]);
  const prevPoint = useRef([]);

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

    prevPoint.current = { ...curPoint.current };
    for (let j = 0; j < circles.length; j++) {
      // Draw vector
      ctx.beginPath();
      let prev = [0, 0];
      let cur = [];

      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(26,143,227)";
      for (let i = 0; i < circles[j].length; i++) {
        cur = [
          prev[0] +
            circles[j][i].amp *
              Math.cos(circles[j][i].freq * frame + circles[j][i].phase),
          prev[1] +
            circles[j][i].amp *
              Math.sin(circles[j][i].freq * frame + circles[j][i].phase),
        ];

        if (!(i === 0 && circles[j][i].freq === 0)) {
          ctx.moveTo(prev[0], prev[1]);
          ctx.lineTo(cur[0], cur[1]);
        }
        prev = cur;
      }
      ctx.stroke();

      curPoint.current[j] = {
        x: cur[0],
        y: cur[1],
      };
    }

    for (let j = 0; j < circles.length; j++) {
      let prev = [0, 0];
      let cur = [];
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(150,255,50,0.3)";
      for (let i = 0; i < circles[j].length; i++) {
        cur = [
          prev[0] +
            circles[j][i].amp *
              Math.cos(circles[j][i].freq * frame + circles[j][i].phase),
          prev[1] +
            circles[j][i].amp *
              Math.sin(circles[j][i].freq * frame + circles[j][i].phase),
        ];

        if (!(i === 0 && circles[j][i].freq === 0)) {
          ctx.beginPath();
          ctx.arc(prev[0], prev[1], circles[j][i].amp, 0, 2 * Math.PI);
          ctx.stroke();
        }
        prev = cur;
      }
    }
  };

  const shouldClearPath = useRef(false);

  useEffect(() => {
    shouldClearPath.current = true;
  }, [props]);

  const clearing = useRef(false);

  const drawPath = (ctx, frame) => {
    if (frame === 0) {
      clearing.current = !clearing.current;
    }
    ctx.resetTransform();
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.scale(1, -1); // Flip vertically

    if (clearing.current) {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = 6;
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.lineWidth = 3;
    }

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    
    ctx.strokeStyle = colour;
    ctx.shadowBlur = 2;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = `${colour}50`;

    for (let i = 0; i < curPoint.current.length; i++) {
      if (prevPoint.current[i] && curPoint.current[i]) {
        ctx.beginPath();
        ctx.moveTo(prevPoint.current[i].x, prevPoint.current[i].y);
        ctx.lineTo(curPoint.current[i].x, curPoint.current[i].y);
        ctx.stroke();
      }
    }

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
        className="absolute left-0 top-0 z-0"
      />
    </div>
  );
}
