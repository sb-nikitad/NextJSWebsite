"use client";

import "../../../app/globals.css";
import { Lato, Anton } from "next/font/google";

const videoSrc = "videos/test.mp4";
const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });

export function ProductDemo() {
  return (
    <div className="flex flex-col items-center gap-y-10">
      <div
        className={`${anton.className} border-b-4 border-sb-blue text-2xl lg:text-6xl `}
      >
        PRODUCT DEMO
      </div>
      <div className="text-2xl">Watch our detailed demo:</div>
      <video controls className="w-[700px]">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
