import { HoverButton } from "../HoverButton/HoverButton";
import { Anton } from "next/font/google";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "react-feather";

import appStore from "../../../public/images/footer/app-store.svg";
import playMarket from "../../../public/images/footer/play-market.svg";
import Image from "next/image";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export const MobileFooter = () => {
  return (
    <div
      suppressHydrationWarning
      className="flex flex-col items-center gap-10 p-10"
    >
      <HoverButton color="bg-sb-blue" text="Sign Up For Updates" />
      <div>
        <div className={`${anton.className} underline-offset-1 text-2xl`}>
          CONTACT@SPORTSBOX.AI
        </div>
        <div className={`${anton.className} underline-offset-1 text-2xl`}>
          SUPPORT@SPORTSBOX.AI
        </div>
      </div>
      <div className="w-1/3 text-center">
        Sportsbox AI products are covered by one or more US patents, including,
        but not limited to: 11,640,725; 11,620,858; 11,615,648
      </div>
      <div className="flex gap-5">
        <Twitter />
        <Facebook />
        <Instagram />
        <Linkedin />
        <Youtube />
      </div>
      <div className={`${anton.className} text-2xl`}>
        SPORTSBOX.AI INC., © 2023
      </div>
      <div className="flex gap-5">
        <Image src={appStore} width={120} height={40} alt="app-store" />
        <Image src={playMarket} width={135} height={40} alt="app-store" />
      </div>
    </div>
  );
};
