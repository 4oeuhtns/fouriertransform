import Image from "next/image";
import { Button } from "@/components/ui/button";
import Solver from "@/components/algorithm";
import Canvas from "@/components/canvas";
import { drawTest } from "@/components/drawTest";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center text-5xl font-operatorItalic">
      <Canvas width={600} height={600} speed={2} draw={drawTest} />
      <Solver />
      <h1 className="text-5xl font-operatorItalic">Fourier Transforms</h1>
    </div>
  );
}
