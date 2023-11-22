import { Anton } from "next/font/google";
import { Separator } from "@/components/Separator";
import { lazy } from "react";
import { HoverButton } from "../../../components/HoverButton/HoverButton";
import Image from "next/image";
import s from "../../../components/PersonInfCard/CardPersonInfo.module.css";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function LearningGolfVisuals() {
  return (
    <div className="p-16 w-full h-fit bg-sb-darkblue bg-center flex flex-col items-center">
      <Separator height={100} />
      <div className="w-[70%] h-fit bg-cover mb-8 flex flex-col items-start gap-y-8">
        <h1 className={`font-bold text-4xl text-white ${anton.className} mb-4`}>
          SPORTSBOX 3DGOLF: VISUALS AND TRACKER DEFINITIONS
        </h1>
        <span
          className={`font-bold text-xs text-white ${anton.className} mb-4`}
        >
          AUG 4{" "}
        </span>
        <span className={`text-[18px] text-white mb-4`}>
          Please{" "}
          <a
            href="https://help.sportsbox.ai/what-is-a-tracker-in-the-sportsbox-3dgolf-app"
            className={`${s.cardButton}`}
          >
            visit our Knowledge Base
          </a>{" "}
          for definitions of our measurements and what the numbers mean.
        </span>
      </div>

      <div className="w-[70%] h-fit flex border-b-2 border-white mb-8 "></div>

      <div className="w-[70%] h-fit flex flex-col">
        <p className="mb-2 text-[20px]">RELATED POSTS:</p>
        <ul className="pl-4 list-disc text-[18px]">
          <li className="pb-4">
            {" "}
            <a
              href="https://help.sportsbox.ai/what-is-a-tracker-in-the-sportsbox-3dgolf-app"
              className={`${s.cardButton}`}
            >
              Key Swing Positions{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="https://help.sportsbox.ai/what-is-a-tracker-in-the-sportsbox-3dgolf-app"
              className={`${s.cardButton}`}
            >
              Six Degrees of Freedom Primer
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
