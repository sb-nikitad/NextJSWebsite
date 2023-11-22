import { Anton } from "next/font/google";
import { Separator } from "@/components/Separator";
import { lazy } from "react";
import { HoverButton } from "../../../components/HoverButton/HoverButton";
import Image from "next/image";
import arrowImg from "../../../../public/images/arrow-icon.png";
import s from "../../../components/PersonInfCard/CardPersonInfo.module.css";

import firstImg from "../../../../public/images/learning/4.png";
import secondImg from "../../../../public/images/learning/3.png";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function LearningGolfVisuals() {
  return (
    <div className="p-12 w-full h-fit bg-sb-darkblue bg-center flex flex-col items-center">
      <Separator height={130} />
      <div className="w-[70%] h-fit bg-cover mb-8 flex flex-col items-start gap-y-4">
        <h1
          className={`font-bold text-[46px] text-white ${anton.className} mb-4`}
        >
          SPORTSBOX GOLF: KEY SWING POSITIONS
        </h1>

        <span
          className={`font-bold text-xs text-white ${anton.className} mb-4`}
        >
          AUG 6{" "}
        </span>
        <Image
          src={firstImg}
          alt="YouTube Video 2"
          style={{ width: "100%", height: "700px", objectFit: "cover" }}
        />

        <span className={`text-[18px] text-white mb-12`}>
          The seven key body positions that we track throughout the swing.
        </span>
        <span className={`text-[18px] text-white mb-2`}>
          To better understand what the golfer is doing at different key
          positions in the swing, we have divided it up into seven positions
          that we are tracking.
        </span>
        <span className={`text-[18px] text-white mb-2`}>
          In the Sportsbox Golf app (see image below), you will notice icons
          denoting the club head and ticks running across the slider — those
          represent the seven key swing positions:
        </span>
        <ul className="pl-8 list-disc text-[18px] mb-12">
          <li className="pb-4"> ADR: Address </li>
          <li className="pb-4"> BCH: Club parallel in the backswing </li>
          <li className="pb-4"> TOP: Top of the backswing </li>
          <li className="pb-4"> DCH: Club parallel in the downswing </li>
          <li className="pb-4"> IMP: Impact </li>
          <li className="pb-4"> FCH: Club parallel in the follow-through</li>
          <li className="pb-4"> FIN: Finish </li>
        </ul>
        <Image
          src={secondImg}
          alt="YouTube Video 2"
          style={{ width: "100%", height: "600px", objectFit: "cover" }}
        />
      </div>
      <div className="w-[70%] h-fit flex border-b-2 border-white mb-8 "></div>
      <div className="w-[70%] h-fit flex flex-col mb-8">
        <p className="mb-2 text-[20px]">RELATED POSTS:</p>
        <ul className="pl-8 list-disc text-[18px]">
          <li className="pb-4">
            {" "}
            <a
              href="https://help.sportsbox.ai/what-is-a-tracker-in-the-sportsbox-3dgolf-app"
              className={`${s.cardButton}`}
            >
              Sportsbox Golf: Visuals and Tracker Definitions{" "}
            </a>{" "}
          </li>
          <li className="pb-4">
            {" "}
            <a
              href="https://help.sportsbox.ai/what-is-a-tracker-in-the-sportsbox-3dgolf-app"
              className={`${s.cardButton}`}
            >
              Sportsbox Golf: Six Degrees of Freedom Primer
            </a>{" "}
          </li>
          <li className="pb-4">
            Sportsbox Golf: Guide to Tracker Ranges and Tolerances for Men and
            Women Professionals
          </li>
        </ul>
      </div>

      <div className="w-[100%] flex justify-between h-fit mt-36">
        <a
          className="flex gap-x-4 justify-center items-center"
          href="https://help.sportsbox.ai/what-is-a-tracker-in-the-sportsbox-3dgolf-app"
        >
          <Image
            src={arrowImg}
            alt="Arrow"
            className="w-12 h-12 transform rotate-180"
          />
          <span
            className={`font-bold text-[26px] text-white ${anton.className}`}
          >
            SPORTSBOX GOLF: SIX DEGREES OF FREEDOM PRIMER{" "}
          </span>
        </a>
      </div>
    </div>
  );
}
