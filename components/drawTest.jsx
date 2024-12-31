"use client";

export const drawTest = (ctx, frame) => {
  console.log("inside draw");
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(50 + frame, 100 + frame, 120, 0, 2 * Math.PI);
  ctx.fill();
  console.log(frame);
};
