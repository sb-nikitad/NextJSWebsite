"use client";

import Image from "next/image";
import clsx from "clsx";
import "../../../app/globals.css";
import { Lato, Anton } from "next/font/google";
import firstImg from "../../../../public/images/ambassadors/Sean-Foley-Headshot.jpg";
import { CardAmbassador } from "./CardAmbassador/CardAmbassador";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });
const ambassadors = [
  {
    imageSrc: firstImg,
    mainText: "SEAN FOLEY",
    secondText: "NO. 5 ON GOLF DIGEST'S 50 BEST TEACHERS, GOLF.COM TOP 100",
    thirdText:
      "Proprietary 2D and 3D models using over 30 key points on the body, club and ball, which allows us to accurately detect comprehensive joints and body segments in motion without any markers from a single video",
  },
];

export function Ambassadors() {
  return (
    <div className="flex gap-x-8 gap-y-4 w-[300px] flex-wrap items-stretch">
      {ambassadors.map((ambassador) => (
        <CardAmbassador
          imageSrc={ambassador.imageSrc}
          mainText={ambassador.mainText}
          secondText={ambassador.secondText}
          thirdText={ambassador.thirdText}
        />
      ))}
    </div>
  );
}
