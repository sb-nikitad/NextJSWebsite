import { Anton } from "next/font/google";
import { Separator } from "@/components/Separator";
import { lazy } from "react";
import thirdImg from "../../../../public/images/learning/3.png";
import Image from "next/image";
import arrowImg from "../../../../public/images/arrow-icon.png";
import s from "../../../components/PersonInfCard/CardPersonInfo.module.css";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function LearningGolfVisuals() {
  return (
    <div className="p-16 w-full h-fit bg-sb-darkblue bg-center flex flex-col items-center">
      <Separator height={100} />
      <div className="w-[70%] h-fit bg-cover mb-8 flex flex-col items-start gap-y-8">
        <h1
          className={`font-bold text-[46px] text-white ${anton.className} mb-4`}
        >
          SPORTSBOX 3DGOLF: VISUALS AND TRACKER DEFINITIONS
        </h1>
        <span
          className={`font-bold text-xs text-white ${anton.className} mb-4`}
        >
          AUG 4{" "}
        </span>
        <Image
          className="mb-4"
          src={thirdImg}
          alt="YouTube Video 2"
          style={{ width: "100%", height: "600px", objectFit: "cover" }}
        />
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

      <div className="w-[70%] h-fit flex flex-col mb-8">
        <p className="mb-2 text-[20px]">RELATED POSTS:</p>
        <ul className="pl-8 list-disc text-[18px]">
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

      <div className="w-[100%] flex justify-between h-fit mt-36">
        <a
          className="flex gap-x-4 justify-center items-center"
          href="sportsbox-golf-six-degrees-of-freedom-primer"
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
        <a
          className="flex gap-x-4 justify-center items-center"
          href="sportsbox-golf-app-key-swing-positions"
        >
          <span
            className={`font-bold text-[26px] text-white ${anton.className}`}
          >
            SPORTSBOX GOLF: KEY SWING POSITIONS{" "}
          </span>
          <Image src={arrowImg} alt="Arrow" className="w-12 h-12" />
        </a>
      </div>
    </div>
  );
}
