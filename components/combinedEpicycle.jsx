"use client";
import { solver } from "@/components/algorithm";
import Canvas from "@/components/canvas";
import { useRef, useEffect, useMemo } from "react";

export default function CombinedEpicycle({ points, speed, colour, ...props }) {
  const circles = useMemo(() => {
    let result = [];
    for (let i = 0; i < points.length; i++) {
      result[i] = solver(points[i]);
    }
    return result;
  }, [points]);

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
    const allSegments = [];

    for (let j = 0; j < circles.length; j++) {
      let prevX = 0;
      let prevY = 0;
      let curX = 0;
      let curY = 0;
      let segments = [];

      for (let i = 0; i < circles[j].length; i++) {
        const c = circles[j][i];
        const angle = c.freq * frame + c.phase;
        curX = prevX + c.amp * Math.cos(angle);
        curY = prevY + c.amp * Math.sin(angle);

        segments.push(prevX, prevY, curX, curY);
        prevX = curX;
        prevY = curY;
      }
      allSegments.push(segments);

      curPoint.current[j] = {
        x: curX,
        y: curY,
      };
    }

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 2;

    ctx.strokeStyle = "rgb(26,143,227)";
    for (let j = 0; j < allSegments.length; j++) {
      ctx.beginPath();
      const segments = allSegments[j];
      for (let i = 0; i < circles[j].length; i++) {
        const idx = i * 4;
        if (!(i === 0 && circles[j][i].freq === 0)) {
          ctx.moveTo(segments[idx], segments[idx + 1]);
          ctx.lineTo(segments[idx + 2], segments[idx + 3]);
        }
      }
      ctx.stroke();
    }

    ctx.strokeStyle = "rgba(150,255,50,0.3)";
    for (let j = 0; j < allSegments.length; j++) {
      const segments = allSegments[j];
      for (let i = 0; i < circles[j].length; i++) {
        const idx = i * 4;
        if (!(i === 0 && circles[j][i].freq === 0)) {
          ctx.beginPath();
          ctx.arc(segments[idx], segments[idx + 1], circles[j][i].amp, 0, 2 * Math.PI);
          ctx.stroke();
        }
      }
    }
  };

  const shouldClearPath = useRef(false);

  useEffect(() => {
    shouldClearPath.current = true;
  }, [props]);

  const clearing = useRef(1);

  const drawPath = (ctx, frame) => {
    if (frame === 0) {
      clearing.current += 1;
      clearing.current %= 3;
    }
    ctx.resetTransform();
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.scale(1, -1); // Flip vertically

    

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 3;

    ctx.strokeStyle = colour;
    ctx.shadowBlur = 2;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = `${colour}50`;

    if (clearing.current === 0) {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = 6;
    } else {
      ctx.globalCompositeOperation = "source-over";
    }

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
