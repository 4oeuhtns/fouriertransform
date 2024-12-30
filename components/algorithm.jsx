"use client";

import React, { useState, useEffect } from "react";
import { complex, lusolve, cos, sin } from "mathjs";

export default function Solver() {
  const [points, setPoints] = useState([
    [0, 0],
    [0.5, 0],
    [1, 0],
    [1.5, 0],
    [2, 0],
    [2, 0.5],
    [2, 1],
    [2, 1.5],
    [2, 2],
    [1.5, 2],
    [1, 2],
    [0.5, 2],
    [0, 2],
    [0, 1.5],
    [0, 1],
    [0, 0.5],
  ]);

  useEffect(() => {
    const tempCoefficients = [];
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
      tempCoefficients.push(temp);
    }
    setCoefficients(tempCoefficients);

    const tempComplexPoints = points.map(point => complex(point[0], point[1]));
    setComplexPoints(tempComplexPoints);
  }, [points]);

  const [coefficients, setCoefficients] = useState([]);
  const [complexPoints, setComplexPoints] = useState([]);

  useEffect(() => {
    if (coefficients.length > 0 && complexPoints.length > 0) {
      const solution = lusolve(coefficients, complexPoints);

      let start;
      if (points.length % 2 === 1) {
        start = -1 * Math.floor((points.length - 1) / 2);
      } else {
        start = -1 * Math.floor(points.length / 2) + 1;
      }

      let out = "";
      for (let i = 0; i < points.length; i++) {
        out += `(${solution[i]})e^{\\frac{${2 * (i + start)}\\pi}{${points.length}}it}+`;
      }
      console.log(out.slice(0, -1));
    }
  }, [coefficients, complexPoints, points]);

  return <p>{JSON.stringify(coefficients)}</p>;
}