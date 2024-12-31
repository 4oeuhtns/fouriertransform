"use client";
import { solver } from "@/components/algorithm";
import Canvas from "@/components/canvas";

export default function Epicycle({points, speed, ...props}) {
    console.log(solver(points));
}
