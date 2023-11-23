import { Anton } from "next/font/google";
import { Separator } from "@/components/Separator";
import { lazy } from "react";
import { HoverButton } from "../../../components/HoverButton/HoverButton";
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
        <span className={`text-xs text-white ${anton.className} mb-4`}>
          AUG 4{" "}
        </span>
        <span className={`text-[18px] text-white mb-4`}>
          Check out our photo gallery of helpful tips for ensuring good captures
          and analyses in the app and when importing existing slo-mo videos.
        </span>
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
        <a
          className="flex gap-x-4 justify-center items-center"
          href="https://help.sportsbox.ai/what-is-a-tracker-in-the-sportsbox-3dgolf-app"
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
