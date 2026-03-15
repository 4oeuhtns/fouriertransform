import { complex, lusolve, cos, sin, atan2 } from "mathjs";

export function solver(points) {
  const N = points.length;
  if (N === 0) {
    return {
      freq: 0,
      amp: 0,
      phase: 0
    };
  }

  let start;
  if (N % 2 === 1) {
    start = -1 * Math.floor((N - 1) / 2);
  } else {
    start = -1 * Math.floor(N / 2) + 1;
  }

  const result = [];
  for (let j = 0; j < N; j++) {
    const k = start + j;
    let sumRe = 0;
    let sumIm = 0;
    for (let i = 0; i < N; i++) {
      const angle = -2 * Math.PI * i * k / N;
      const c = Math.cos(angle);
      const s = Math.sin(angle);
      const pRe = points[i][0];
      const pIm = points[i][1];
      sumRe += pRe * c - pIm * s;
      sumIm += pRe * s + pIm * c;
    }
    const re = sumRe / N;
    const im = sumIm / N;
    
    let frequency = j - Math.floor((N - 1) / 2);
    result.push({
      freq: frequency,
      amp: Math.sqrt(re * re + im * im),
      phase: Math.atan2(im, re),
    });
  }

  return result.sort((a, b) => b.amp - a.amp);
  
  
    
  // });
}