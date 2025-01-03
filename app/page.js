import Image from "next/image";
import { Button } from "@/components/ui/button";
import Epicycle from "@/components/epicycle";

export default function Home() {
  // let points = [
  //   [-2, 2],
  //   [-1.5, 2],
  //   [-1, 2],
  //   [-0.5, 2],
  //   [0, 2],
  //   [0.5, 2],
  //   [1, 2],
  //   [1.5, 2],
  //   [2, 2],
  //   [2, 1.5],
  //   [2, 1],
  //   [2, 0.5],
  //   [2, 0],
  //   [2, -0.5],
  //   [2, -1],
  //   [2, -1.5],
  //   [2, -2],
  //   [1.5, -2],
  //   [1, -2],
  //   [0.5, -2],
  //   [0, -2],
  //   [-0.5, -2],
  //   [-1, -2],
  //   [-1.5, -2],
  //   [-2, -2],
  //   [-2, -1.5],
  //   [-2, -1],
  //   [-2, -0.5],
  //   [-2, 0],
  //   [-2, 0.5],
  //   [-2, 1],
  //   [-2, 1.5],
  // ];
  let points=[
    [0, 0], [1.0, 0], [2, 0], [3.0, 0], [4, 0], [4, 1.0], [4, 2], [4, 3.0], [4, 4], [3.0, 4], [2, 4], [1.0, 4], [0, 4], [0, 3.0], [0, 2], [0, 1.0]
  ]

  // let points =[
  //   [0, 0], [1.0, 0], [2, 0]
  // ]

  // let points=[
  //   [0, 0], [2.0, 0], [4, 0], [6.0, 0], [8, 0], [8, 2.0], [8, 4], [8, 6.0], [8, 8], [6.0, 8], [4, 8], [2.0, 8], [0, 8], [0, 6.0], [0, 4], [0, 2.0]  
  // ]
  return (
    <div className="h-screen w-full flex justify-center items-center text-5xl font-operatorItalic">
      <h1 className="text-5xl font-operatorItalic">Fourier Transforms</h1>
      <p></p>
      <br>
      </br>
      <Epicycle points={points} speed={0.001} width={600} height={600} />
    </div>
  );
}
