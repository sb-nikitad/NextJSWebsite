"use client";
import clsx from "clsx";
import "../../../app/globals.css";
import { Lato, Anton } from "next/font/google";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });

export function Ambassadors() {
  return (
    <div
      className={clsx(
        "w-[22rem]",
        "h-[24rem]",
        "custom-hsl-background",
        "rounded-[25px]",
        "p-8",
        "flex",
        "flex-col",
        "gap-y-4",
        "items-center"
      )}
    >
      <div
        className={clsx("font-bold", "text-2xl", "text-white", anton.className)}
      >
        SEAN FOLEY
      </div>
      <div
        className={clsx("font-bold", "text-2xl", "text-white", anton.className)}
      >
        NO. 5 ON GOLF DIGEST'S 50 BEST TEACHERS, GOLF.COM TOP 100{" "}
      </div>
      <div className={clsx("text-white", "text-lg", "mb-8")}>
        Proprietary 2D and 3D models using over 30 key points on the body, club
        and ball, which allows us to accurately detect comprehensive joints and
        body segments in motion without any markers from a single video
      </div>
    </div>
  );
}
