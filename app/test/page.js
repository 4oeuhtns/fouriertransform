"use client";

import React, { useState } from 'react';

function Slider() {
  const [value, setValue] = useState(50); // Initial value of the slider

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className='w-[300] p-5 rounded-full bg-[#F4FFF8]'>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className='w-full'
      />
    </div>
  );
}

export default Slider;
