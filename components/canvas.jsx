"use client";

import { useRef, useEffect } from "react";

export default function Canvas({ speed, draw, ...props }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // gets animation frame
    let frame = 0;
    let animationFrameId;

    // draws each frame according to frame rate by requestAnimationFrame
    const render = () => {
      frame += speed;
      draw(ctx, frame);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    // cleanup
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...props}></canvas>;
}
