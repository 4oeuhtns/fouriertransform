"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Epicycle from "@/components/epicycle";
import DrawingCanvas from "@/components/drawingCanvas";
import { useState } from "react";

export default function Test() {


  return (
<div className="h-screen w-full flex flex-col  items-center text-5xl font-operatorItalic">
<h1 className="text-5xl font-operatorItalic">Fourier Transforms</h1>
      {/* <div className="w-[600px] h-[600px]"><Epicycle points={points} speed={0.001} width={600} height={600}/></div> */}
      <div><DrawingCanvas onPointsUpdate={handlePointsUpdate} width={400} height={600}></DrawingCanvas></div>
      <div>
        <h3>Points Received in Parent:</h3>
        <pre>{JSON.stringify(points, null, 2)}</pre>
      </div>
     
    </div>
  );
}
