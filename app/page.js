import Image from "next/image";
import { Button } from "@/components/ui/button";
import Solver from "@/components/algorithm";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center text-5xl font-operatorItalic">
      <Solver />
      <h1 className="text-5xl font-operatorItalic">Fourier Transforms</h1>
      </div>
  );
}
