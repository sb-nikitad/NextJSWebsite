"use client";

import clsx from "clsx";
import { Lato, Anton } from "next/font/google";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });

export function TitleBlock() {
  return (
    <div className="w-[100%] h-[500px] bg-sb-lightpurple justify-content items-center">
      <span
        className={clsx("text-white", "text-5xl", anton.className, "w-[10%]")}
      >
        THE LATEST NEWS FROM SPORTSBOX AI
      </span>
    </div>
  );
}
