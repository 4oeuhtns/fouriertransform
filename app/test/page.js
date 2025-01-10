"use client";

import React, { useState } from "react";
import "@/components/slider.css";

function Slider() {
  const [value, setValue] = useState(50); // Initial value of the slider

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div
      className="w-[300px] p-2 flex m-10 bg-[#0F1A19] justify-center items-center rounded-full border-2 border-[#293b39] shadow-[-1px_-1px_6px_rgba(244,255,248,0.25),3px_3px_8px_rgba(0,0,0,0.75)]"
    >
      <input
        type="range"
        min="0"
        max="500"
        value={value}
        onChange={handleChange}
        className="w-full"
      />
    </div>
  );
}

export default Slider;
