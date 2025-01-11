"use client";

import Epicycle from "@/components/epicycle";
import DrawingCanvas from "@/components/drawingCanvas";
import useWindowDimensions from "@/components/windowDimensions";
import { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import "@/components/styles.css";
import "@/components/colorPicker.css";

export default function Sandbox() {
  const [speed, setSpeed] = useState(0.01);
  const [colour, setColour] = useState("#ff0000");
  const [glow, setGlow] = useState(true);

  const handleChange = (event) => {
    setSpeed(parseFloat(event.target.value));
  };

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
      <aside className="w-72 flex-shrink-0 text-[#F4FFF8] font-mono p-2">
        <h1 className="text-4xl font-bold">Fourier Transforms</h1>
        <p className="text-l mt-2 text-[#F4FFF8] text-opacity-75">
          Any path drawn on the canvas is approximated using a sequence of
          rotating circles based on the Fourier Transform. Each circle has a
          different radius, phase, and frequency, which, when combined,
          recreates the original path.
        </p>

        {/* Speed slider */}
        <div className="mt-5 bg-[#0F1A19] rounded-lg border-2 border-[#293b39] shadow-[-1px_-1px_6px_rgba(244,255,248,0.25),3px_3px_8px_rgba(0,0,0,0.75)] p-3">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Speed</h2>
            <p className="text-xl font">{speed}</p>
          </div>
          <p className="text-md pb-2 text-[#F4FFF8] text-opacity-50">
            Adjust the speed of the epicycle animation.
          </p>

          <div className="p-2 flex bg-[#0F1A19] justify-center items-center rounded-full border-2 border-[#293b39] shadow-[-1px_-1px_6px_rgba(244,255,248,0.25),3px_3px_8px_rgba(0,0,0,0.75)]">
            <input
              type="range"
              min="0.001"
              max="0.02"
              step="0.001"
              value={speed}
              onChange={handleChange}
              className="w-full"
            />
          </div>
        </div>

        {/* Colour picker */}
        <div className="mt-5 bg-[#0F1A19] rounded-lg border-2 border-[#293b39] shadow-[-1px_-1px_6px_rgba(244,255,248,0.25),3px_3px_8px_rgba(0,0,0,0.75)] p-3">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Colour</h2>
            <p className="text-xl font">{colour}</p>
          </div>
          <p className="text-md pb-2 text-[#F4FFF8] text-opacity-50">
            Change the colour of the drawn path.
          </p>

          <HexColorPicker
            color={colour}
            onChange={setColour}
            style={{ width: "100%", height: "100px" }}
            className="border-2 border-[#293b39] shadow-[-1px_-1px_6px_rgba(244,255,248,0.25),3px_3px_8px_rgba(0,0,0,0.75)] rounded-[10px]"
          />

          <div className="h-[48px] mt-2 flex items-center justify-center">
            <button
              className={`bg-[#0F1A19] rounded-lg border-2 border-[#293b39] shadow-[-1px_-1px_6px_rgba(244,255,248,0.25),3px_3px_8px_rgba(0,0,0,0.75)] p-3 w-full rainbow transition-transform ${
                colour === "Rainbow"
                  ? "opacity-75 cursor-not-allowed pointer-events-none rainbow-animation"
                  : "hover:scale-105"
              }`}
              onClick={() => setColour("Rainbow")}
              disabled={colour === "Rainbow"}
            >
              Rainbow
            </button>
          </div>
        </div>

        {/* Glow toggle */}
        <div className="mt-5 bg-[#0F1A19] rounded-lg border-2 border-[#293b39] shadow-[-1px_-1px_6px_rgba(244,255,248,0.25),3px_3px_8px_rgba(0,0,0,0.75)] p-3">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Glow</h2>
            <div className="flex justify-center items-center">
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={glow}
                onChange={() => setGlow(!glow)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
          </div>
          <p className="text-md text-[#F4FFF8] text-opacity-50">
            Turn glow on or off.
          </p>
        </div>
      </aside>

      <main className="relative flex-grow">
        <div
          className="h-screen w-full flex flex-col items-center bg-[length:30px_30px]
             bg-[linear-gradient(to_right,#293b39_1px,transparent_1px),linear-gradient(to_bottom,#293b39_1px,transparent_1px)]"
        >
          <Epicycle
            points={points}
            speed={speed}
            width={width}
            height={height}
            colour={colour}
            glow={glow}
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
