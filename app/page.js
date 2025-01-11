"use client";
import Image from "next/image";
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


  let pointsFourier=
  [ [0, 1000], [100, 1000], [200, 900], [200, 0], [400, 0], [400, 900], [500, 1000], [600, 1000], [600, 0], [700, 0], [700, -100], [500, -100], [500, -900], [400, -1000], [300, -1000], [300, -900], [100, -900], [100, -1000], [0, -1000], [0, -900] ];  
  

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
    }
    setPoints(updatedPoints);
  };

  const { width, height } = useWindowDimensions();

  const [showMainApp, setShowMainApp] = useState(0);

  if (showMainApp === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-5xl font-mono font-bold text-black absolute top-0 left-1/2 transform -translate-x-1/2 mt-4">
          Fourier Series
        </h1>
        <button
          onClick={() => setShowMainApp(1)}
          className="mb-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Sandbox
        </button>
        <button
          onClick={() => setShowMainApp(3)}
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700"
        >
          Demo
        </button>
      </div>
    );
  }
  else if (showMainApp === 1) {
    return (
      <div>
        <div className="h-screen w-full flex flex-col  items-center text-5xl font-operatorItalic bg-[#0F1A19] bg-[length:30px_30px]
         bg-[linear-gradient(to_right,#293b39_1px,transparent_1px),linear-gradient(to_bottom,#293b39_1px,transparent_1px)]">
          <Epicycle
            points={points}
            speed={0.01}
            width={width}
            height={height}
            colour={"rainbow"}
            glow={true}
            className="absolute left-0 top-0"
          />
          <div className="relative">
            <DrawingCanvas
              onPointsUpdate={handlePointsUpdate}
              width={width}
              height={height}
              className="absolute left-0 top-0 z-50"
            />
          </div>
          <h1 className="text-5xl font-mono font-bold text-white absolute">Fourier Series</h1>

          <button
            onClick={() => setShowMainApp(0)}
            className="fixed bottom-4 right-4 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
          ></button>
        </div>
      </div>
    );
  }
  else {
    return (
      <div>
        <div className="h-screen w-full flex flex-col  items-center text-5xl font-operatorItalic bg-[#0F1A19]">
          <Epicycle
            points={pointsFourier}
            speed={0.01}
            width={width}
            height={height}
            className="absolute left-0 top-0"
          />
          <button
            onClick={() => setShowMainApp(0)}
            className="fixed bottom-4 right-4 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
          ></button>
        </div>
      </div>
    );
  }


}
