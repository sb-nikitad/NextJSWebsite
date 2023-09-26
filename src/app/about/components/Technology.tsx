"use client";

import "../../../app/globals.css";

import { Lato, Anton } from "next/font/google";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });

export function Technology() {
  return (
    <div className="flex flex-col gap-y-16">
      <div className="flex flex-col gap-y-8 flex justify-center items-center">
        <div
          className={`font-bold text-white ${anton.className}`}
          style={{ fontSize: "3rem" }}
        >
          <span className="border-b-4 border-blue-500 inline-block">
            TECHNOLOGY
          </span>
        </div>
        <div className="text-white text-lg w-[55%]">
          Developed in-house by AI scientists and computer vision experts,
          Sportsbox AI utilizes the latest methods in Computer Vision and Deep
          Learning to provide 3D analysis of complex movements in real time —
          available for the first time in your back pocket.
        </div>
      </div>

      <div className={"flex gap-x-8 justify-center items-center"}>
        <div className="w-[22rem] h-[24rem] custom-hsl-background rounded-[25px] p-8 flex flex-col gap-y-4">
          <div className={`font-bold text-2xl text-white ${anton.className}`}>
            VIDEO TO 3D
          </div>
          <div className="text-white text-lg mb-8">
            Proprietary 2D and 3D models using over 30 key points on the body,
            club and ball, which allows us to accurately detect comprehensive
            joints and body segments in motion without any markers from a single
            video
          </div>
        </div>
        <div className="w-[22em] h-[24rem] custom-hsl-background rounded-[25px] p-8 flex flex-col gap-y-4">
          <div className={`font-bold text-2xl text-white ${anton.className}`}>
            VISUALIZE
          </div>
          <div className="text-white text-lg mb-8">
            Based on our highly accurate and robust 2D and 3D models, we’re able
            to animate the body motion in full 3D, which can be viewed from six
            different angles - Face-on, Down-the-Line, Behind, From Target,
            Above and Below
          </div>
        </div>
        <div className="w-[22rem] h-[24rem] custom-hsl-background rounded-[25px] p-8 flex flex-col gap-y-4">
          <div className={`font-bold text-2xl text-white ${anton.className}`}>
            HIGHLY ACCURATE 3D BIOMECHANICAL MEASUREMENTS{" "}
          </div>
          <div className="text-white text-lg mb-8">
            We’ve worked with one of the world’s leading biomechanical scientist
            to develop kinematic parameters and sequences critical to measuring
            and analyzing the body movement in sports
          </div>
        </div>
      </div>
    </div>
  );
}
