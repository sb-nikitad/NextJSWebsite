import { Anton } from "next/font/google";
import { Separator } from "@/components/Separator";
import { lazy } from "react";
import { HoverButton } from "../../../components/HoverButton/HoverButton";
import Image from "next/image";
import arrowImg from "../../../../public/images/arrow-icon.png";
import s from "../../../components/PersonInfCard/CardPersonInfo.module.css";

import firstImg from "../../../../public/images/learning/5.png";
import secondImg from "../../../../public/images/learning/6.png";
import thirdImg from "../../../../public/images/learning/7.png";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function LearningSixDegrees() {
  return (
    <div className="p-12 w-full h-fit bg-sb-darkblue bg-center flex flex-col items-center">
      <Separator height={130} />
      <div className="w-[70%] h-fit bg-cover mb-8 flex flex-col items-start gap-y-4">
        <h1
          className={`font-bold text-[46px] text-white ${anton.className} mb-4`}
        >
          SPORTSBOX GOLF: SIX DEGREES OF FREEDOM PRIMER
        </h1>

        <span
          className={`font-bold text-xs text-white ${anton.className} mb-4`}
        >
          AUG 6{" "}
        </span>

        <span className={`text-[18px] text-white mb-2`}>
          In the Sportsbox Golf app, we use the “Six Degrees of Freedom” — all
          motion can be measured in six different ways.
        </span>

        <Image
          className="mb-4"
          src={firstImg}
          alt="YouTube Video 2"
          style={{ width: "100%", height: "600px", objectFit: "cover" }}
        />

        <span className={`text-[18px] text-white mb-2`}>
          First, there are linear movements: Forward/backward, left/right,
          up/down — which are measured in feet, inches and meters, etc.
        </span>

        <span className={`text-[18px] text-white mb-2`}>
          Next, there are angular movements: Turn, bend forward/backward or
          side-to-side — which are measured in degrees.
        </span>

        <span className={`text-[18px] text-white mb-2`}>
          The linear motions apply to the golfer’s position in terms of lift,
          thrust and sway. Lift is movement up and down; thrust is forward and
          backward; and sway is left and right.
        </span>

        <Image
          className="mb-4"
          src={secondImg}
          alt="YouTube Video 2"
          style={{ width: "100%", height: "600px", objectFit: "cover" }}
        />

        <span className={`text-[18px] text-white mb-2`}>
          Meanwhile, the angular movements measure rotations, like turn, bend
          and side bend.
        </span>

        <Image
          className="mb-4"
          src={thirdImg}
          alt="YouTube Video 2"
          style={{ width: "100%", height: "600px", objectFit: "cover" }}
        />

        <span className={`text-[18px] text-white mb-2`}>
          For example, your pelvis (hips) when the golfer is at address will
          have a certain position and orientation that will change throughout
          the swing. At the top of the backswing, the golfer’s hips will have
          turned, tipped sideways and tilted backwards, and they may also have
          swayed sideways, thrust forward and lifted up compared to where they
          were at address.
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
              Sportsbox Golf: Key Swing Positions{" "}
            </a>{" "}
          </li>
          <li className="pb-4">
            {" "}
            <a
              href="https://help.sportsbox.ai/what-is-a-tracker-in-the-sportsbox-3dgolf-app"
              className={`${s.cardButton}`}
            >
              Sportsbox Golf: Visuals and Tracker Definitions
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
          href="sportsbox-3d-golf-app-do-this-not-that"
        >
          <Image
            src={arrowImg}
            alt="Arrow"
            className="w-12 h-12 transform rotate-180"
          />
          <span
            className={`font-bold text-[26px] text-white ${anton.className}`}
          >
            SPORTSBOX 3D GOLF APP: DO THIS, NOT THAT{" "}
          </span>
        </a>
        <a
          className="flex gap-x-4 justify-center items-center"
          href="sportsbox-golf-visuals"
        >
          <span
            className={`font-bold text-[26px] text-white ${anton.className}`}
          >
            SPORTSBOX 3DGOLF: VISUALS AND TRACKER DEFINITIONS{" "}
          </span>
          <Image src={arrowImg} alt="Arrow" className="w-12 h-12" />
        </a>
      </div>
    </div>
  );
}
