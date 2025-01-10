"use client";

import Epicycle from "@/components/epicycle";
import DrawingCanvas from "@/components/drawingCanvas";
import useWindowDimensions from "@/components/windowDimensions";
import { useState } from "react";
import Slider from '@mui/material/Slider';

export default function Sandbox() {
  const [points, setPoints] = useState([]);

  const handlePointsUpdate = (updatedPoints) => {
    // do we need
    if (arrayEquals(updatedPoints, [])) {
    }
    setPoints(updatedPoints);
  };

  const { width, height } = useWindowDimensions();

  function arrayEquals(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  }

  return (
    <div className="flex h-screen w-full">
      <aside className="w-72 flex-shrink-0 m-5 text-[#F4FFF8] font-mono">
        <h1 className="text-4xl font-bold">Fourier Transforms</h1>
        <p className="text-l mt-5">
          Any path drawn on the canvas is approximated using a sequence of
          rotating circles based on the Fourier Transform. Each circle has a
          different radius, phase, and frequency, which, when combined,
          recreates the original path.
        </p>
        <Slider/>
        {/* Sidebar content here */}
      </aside>

      <main className="relative flex-grow">
        <div
          className="h-screen w-full flex flex-col items-center bg-[length:30px_30px]
             bg-[linear-gradient(to_right,#293b39_1px,transparent_1px),linear-gradient(to_bottom,#293b39_1px,transparent_1px)]"
        >
          <Epicycle
            points={points}
            speed={0.01}
            width={width}
            height={height}
            colour="rainbow"
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
        </div>
      </main>
    </div>
  );
}
