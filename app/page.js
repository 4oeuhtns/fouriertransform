"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Epicycle from "@/components/epicycle";
import DrawingCanvas from "@/components/drawingCanvas";
import { useState } from "react";
import useWindowDimensions from "@/components/windowDimensions";

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

  let pointsTest = [
    [0, 0],
    [1.0, 0],
    [2, 0],
  ];

  // let pointsTest=[
  //   [0, 0], [2.0, 0], [4, 0], [6.0, 0], [8, 0], [8, 2.0], [8, 4], [8, 6.0], [8, 8], [6.0, 8], [4, 8], [2.0, 8], [0, 8], [0, 6.0], [0, 4], [0, 2.0]
  // ]

  const [points, setPoints] = useState([]);

  function arrayEquals(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  }

  const handlePointsUpdate = (updatedPoints) => {
    // do we need
    if (arrayEquals(updatedPoints, [])) {
      console.log("aaaaaaaaaaaaaaaaa");
    }

    setPoints(updatedPoints);
  };

  const { width, height } = useWindowDimensions();

  return (
    <div className="h-screen w-full flex flex-col  items-center text-5xl font-operatorItalic">
        <Epicycle points={points} speed={0.01} width={width} height={height} className="absolute left-0 top-0" />
        <div className="relative">
        <DrawingCanvas
          onPointsUpdate={handlePointsUpdate}
          width={width}
          height={height}
          className="absolute left-0 top-0  z-50"
        />
      </div>
    </div>
  );
}
