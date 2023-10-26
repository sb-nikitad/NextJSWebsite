"use client";

import clsx from "clsx";
import { Lato, Anton } from "next/font/google";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });

export function TitleBlock() {
  return (
    <div className="flex w-[100%] h-[500px] bg-blue justify-center items-center">
      <div className={clsx("w-[25%]", "text-center")}>
        <span className={clsx("text-white", "text-5xl", anton.className)}>
          THE LATEST NEWS FROM SPORTSBOX AI
        </span>
      </div>
    </div>
  );
}
