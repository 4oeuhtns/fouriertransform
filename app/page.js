"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Epicycle from "@/components/epicycle";
import DrawingCanvas from "@/components/drawingCanvas";
import { useState } from "react";

export default function Home() {
  // let pointsTest = [
  //   [-2, 2],
  //   [-1.5, 2],
  //   [-1, 2],
  //   [-0.5, 2],
  //   [0, 2],
  //   [0.5, 2],
  //   [1, 2],
  //   [1.5, 2],
  //   [2, 2],
  //   [2, 1.5],
  //   [2, 1],
  //   [2, 0.5],
  //   [2, 0],
  //   [2, -0.5],
  //   [2, -1],
  //   [2, -1.5],
  //   [2, -2],
  //   [1.5, -2],
  //   [1, -2],
  //   [0.5, -2],
  //   [0, -2],
  //   [-0.5, -2],
  //   [-1, -2],
  //   [-1.5, -2],
  //   [-2, -2],
  //   [-2, -1.5],
  //   [-2, -1],
  //   [-2, -0.5],
  //   [-2, 0],
  //   [-2, 0.5],
  //   [-2, 1],
  //   [-2, 1.5],
  // ];
  // let pointsTest=[
  //   [0, 0], [1.0, 0], [2, 0], [3.0, 0], [4, 0], [4, 1.0], [4, 2], [4, 3.0], [4, 4], [3.0, 4], [2, 4], [1.0, 4], [0, 4], [0, 3.0], [0, 2], [0, 1.0]
  // ]

  let pointsTest =[
    [0, 0], [1.0, 0], [2, 0]
  ]

  // let pointsTest=[
  //   [0, 0], [2.0, 0], [4, 0], [6.0, 0], [8, 0], [8, 2.0], [8, 4], [8, 6.0], [8, 8], [6.0, 8], [4, 8], [2.0, 8], [0, 8], [0, 6.0], [0, 4], [0, 2.0]  
  // ]

  const [points, setPoints] = useState(
    []
  );

  const handlePointsUpdate = (updatedPoints) => {
    setPoints(updatedPoints);
  };

  


  return (
<div className="h-screen w-full flex flex-col  items-center text-5xl font-operatorItalic">
<h1 className="text-5xl font-operatorItalic">Fourier Transforms</h1>
      <div className="w-[600px] h-[600px]"><Epicycle points={points} speed={0.001} width={600} height={600}/></div>
      <div><DrawingCanvas onPointsUpdate={handlePointsUpdate}></DrawingCanvas></div>
      <div>
        <h3>Points Received in Parent:</h3>
        <pre>{JSON.stringify(points, null, 2)}</pre>
      </div>
     
    </div>
  );
}
