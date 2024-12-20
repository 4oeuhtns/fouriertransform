import { useRef } from 'react';

export default function Canvas(props) {

    const canvasRef = useRef(null);


  return (
    <canvas canvasRef={canvasRef}>
        {...props}
    </canvas>
  );
}