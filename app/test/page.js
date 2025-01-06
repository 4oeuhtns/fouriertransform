"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Epicycle from "@/components/epicycle";
import DrawingCanvas from "@/components/drawingCanvas";
import { useState } from "react";

export default function Test() {
    let points = [
        [
          -119,
          -105
        ],
        [
          -119,
          -105
        ],
        [
          -18,
          5
        ],
        [
          82,
          98
        ]
      ]

  return (
<div className="h-screen w-full flex flex-col  items-center text-5xl font-operatorItalic">
<h1 className="text-5xl font-operatorItalic">Fourier Transforms</h1>
      <div className="w-[600px] h-[600px]"><Epicycle points={points} speed={0.001} width={1000} height={1000}/></div>
     
    </div>
  );
}
