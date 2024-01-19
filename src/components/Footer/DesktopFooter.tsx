import Image from "next/image";
import React from "react";
import s from "../../components/PersonInfCard/CardPersonInfo.module.css";

import { HoverButton } from "../HoverButton/HoverButton";
import { Anton } from "next/font/google";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "react-feather";

import appStore from "../../../public/images/footer/app-store.svg";
import playMarket from "../../../public/images/footer/play-market.svg";
import { Separator } from "../Separator";
import linkStyle from "../Footer/footer.module.css";
import Link from "next/link";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export const DesktopFooter = () => {
  return (
    <div suppressHydrationWarning className="flex flex-col items-center">
      <Separator height={50} />
      <HoverButton
        color="bg-sb-blue"
        text="Sign Up For Updates"
        link="https://share.hsforms.com/1RZI6wdeEQfK2DVwvyf_XOAcucdi?__hstc=120525143.51943252b308feda35ce5f507577e48e.1694781859480.1702917663702.1702999848044.52&__hssc=120525143.8.1702999848044&__hsfp=2851389664"
      />
      <div className="flex gap-[200px] p-10">
        <div className="flex flex-col gap-y-[4px]">
          <div className={`${anton.className} text-2xl`}>
            <a
              href="mailto:contact@sportsbox.ai"
              target="_blank"
              rel="noopener noreferrer"
              className={`${s.cardButton}`}
            >
              CONTACT@SPORTSBOX.AI{" "}
            </a>
          </div>
          <div className={`${anton.className} text-2xl`}>
            <a href="mailto:support@sportsbox.ai" className={`${s.cardButton}`}>
              SUPPORT@SPORTSBOX.AI
            </a>
          </div>
        </div>
        <div className="flex gap-5">
          <a
            href="https://twitter.com/sportsboxai"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkStyle.iconLink}`}
          >
            <Twitter />
          </a>
          <a
            href="https://www.facebook.com/SportsboxAI/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkStyle.iconLink}`}
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/sportsboxai/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkStyle.iconLink}`}
          >
            <Instagram />
          </a>
          <a
            href="https://www.linkedin.com/company/sportsbox-ai"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkStyle.iconLink}`}
          >
            <Linkedin />
          </a>
          <a
            href="https://www.youtube.com/channel/UCFwvVj4P1DLph9oJlPN0MfQ"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkStyle.iconLink}`}
          >
            <Youtube />
          </a>
        </div>
        <div className={`${anton.className} text-2xl`}>
          SPORTSBOX.AI INC., © 2023
        </div>
      </div>
      <div className="flex w-1/2 justify-between">
        <div className="w-1/3 text-center">
          Sportsbox AI products are covered by one or more US patents,
          including, but not limited to: 11,640,725; 11,620,858; 11,615,648
        </div>
        <div className="flex gap-5">
          <a
            href="https://apps.apple.com/us/app/sportsbox-3d-golf/id1578921026"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image src={appStore} width={180} height={30} alt="app-store" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.sportsbox.golfai&pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image src={playMarket} width={180} height={30} alt="app-store" />
          </a>
        </div>
      </div>
    </div>
  );
};
