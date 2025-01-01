import Image from "next/image";
import { Button } from "@/components/ui/button";
import Epicycle from "@/components/epicycle";

export default function Home() {
  let points = [
    [0,0],
    [1,1],
    [0,2],
    [0,5],
    [3,1],
    [2,-2],
  ];
  return (
    <div className="h-screen w-full flex justify-center items-center text-5xl font-operatorItalic">
      <h1 className="text-5xl font-operatorItalic">Fourier Transforms</h1>
      <Epicycle points={points} speed={0.01} width={600} height={600} />
    </div>
  );
}
