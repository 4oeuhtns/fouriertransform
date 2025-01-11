"use client";

import React, { useState } from "react";
import "@/components/styles.css";

function Slider() {

  return (
    <button 
      className={`
        rainbow-animation
        p-2 rounded-lg border-2 border-[#293b39]
        shadow-[-1px_-1px_6px_rgba(244,255,248,0.25),3px_3px_8px_rgba(0,0,0,0.75)]
      `}
    >
      Rainbow
    </button>
  );
}

export default Slider;
