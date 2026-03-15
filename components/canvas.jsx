"use client";

import { useRef, useEffect } from "react";

export default function Canvas({ speed, draw, ...props }) {
  const canvasRef = useRef(null);
  const drawRef = useRef(draw);
  const speedRef = useRef(speed);

  useEffect(() => {
    drawRef.current = draw;
    speedRef.current = speed;
  }, [draw, speed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // gets animation frame
    let frame = 0;
    let animationFrameId;

    // draws each frame according to frame rate by requestAnimationFrame
    const render = () => {
      frame += speedRef.current;
      if (frame >= (2 * Math.PI)) frame = 0;
      drawRef.current(ctx, frame);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    // cleanup
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} {...props}></canvas>;
}
