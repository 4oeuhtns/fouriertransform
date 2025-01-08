import { complex, lusolve, cos, sin, atan2 } from "mathjs";

export function solver(points) {
  // Calculate coefficients matrix
  const coefficients = [];
  for (let i = 0; i < points.length; i++) {
    const temp = [];
    if (points.length % 2 === 1) {
      for (
        let k = Math.round((-1 * (points.length - 1)) / 2);
        k <= Math.round((points.length - 1) / 2);
        k++
      ) {
        temp.push(
          complex(
            cos((2 * Math.PI * i * k) / points.length),
            sin((2 * Math.PI * i * k) / points.length)
          )
        );
      }
    } else {
      for (
        let k = Math.round((-1 * points.length) / 2 + 1);
        k <= Math.round(points.length / 2);
        k++
      ) {
        temp.push(
          complex(
            cos((2 * Math.PI * i * k) / points.length),
            sin((2 * Math.PI * i * k) / points.length)
          )
        );
      }
    }
    coefficients.push(temp);
  }
  
  // Convert points to complex numbers
  const complexPoints = points.map((point) => complex(point[0], point[1]));

  if (coefficients.length != 0){
    // Solve system
  const solution = lusolve(coefficients, complexPoints);

  // Calculate starting point
  let start;
  if (points.length % 2 === 1) {
    start = -1 * Math.floor((points.length - 1) / 2);
  } else {
    start = -1 * Math.floor(points.length / 2) + 1;
  }

  // Build solution string
  let out = "";
  for (let i = 0; i < points.length; i++) {
    out += `(${solution[i]})e^{\\frac{${2 * (i + start)}\\pi}{${
      points.length
    }}it}+`;
  }
  
  // Return json
  return solution
  .map((sol, index) => {
    let frequency = index - Math.floor((solution.length - 1) / 2);
    return {
      freq: frequency,
      amp: Math.sqrt((sol[0].re) ** 2 + (sol[0].im) ** 2), // Amplitude
      phase: Math.atan2(sol[0].im, sol[0].re),             // Phase angle
    };
  })
  .sort((a, b) => b.amp - a.amp);
  }
  else{
    return {
      freq: 0,
      amp: 0,
      phase: 0
    }
  }
  
  
    
  // });
}