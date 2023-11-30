"use client";

import clsx from "clsx";
import { Lato, Anton } from "next/font/google";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });

export function TitleBlock() {
  return (
    <div className="flex w-[100%] h-[500px] bg-sb-lowpurple justify-center items-center">
      <div className={clsx("text-center")}>
        <span
          className={clsx(
            "text-white",
            "text-3xl",
            "lg:text-5xl",
            "whitespace-pre-wrap",
            anton.className
          )}
        >
          {"THE LATEST NEWS\n\nFROM SPORTSBOX AI"}
        </span>
      </div>
    </div>
  );
}
