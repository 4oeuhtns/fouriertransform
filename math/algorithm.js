const math = require('mathjs');

// points

const points=[[0,0],[0.5,0],[1,0],[1.5,0],[2,0],[2,0.5],[2,1],[2,1.5],[2,2],[1.5,2],[1,2],[0.5,2],[0,2],[0,1.5],[0,1],[0,0.5]];

// Coefficient matrix for system of equations
const coefficients=[];

for (let i = 0; i < points.length; i++) {
    const temp = [];
    if (points.length % 2 === 1) {
        for (let k = Math.round(-1 * (points.length - 1) / 2); k <= Math.round((points.length - 1) / 2); k++) {
            temp.push(
                math.complex(
                    Math.cos((2 * Math.PI * i * k) / points.length),
                    Math.sin((2 * Math.PI * i * k) / points.length)
                )
            );
        }
    } else {
        for (let k = Math.round(-1 * points.length / 2 + 1); k <= Math.round(points.length / 2); k++) {
            temp.push(
                math.complex(
                    Math.cos((2 * Math.PI * i * k) / points.length),
                    Math.sin((2 * Math.PI * i * k) / points.length)
                )
            );
        }
    }
    coefficients.push(temp);
}

const complexPoints = [];

for (let i = 0; i < points.length; i++) {
    const point = math.complex(points[i][0], points[i][1]); // Create a complex number
    complexPoints.push(point); // Add to the array
}

const solution = math.lusolve(coefficients, complexPoints);

let start;
if (points.length % 2 === 1) {
    start = -1 * Math.floor((points.length - 1) / 2);
} else {
    start = -1 * Math.floor(points.length / 2) + 1;
}

let out = "";

// Build the output string
for (let i = 0; i < points.length; i++) {
    out += `(${solution[i]})e^{\\frac{${2 * (i + start)}\\pi}{${points.length}}it}+`;
}

console.log(out.slice(0, -1));