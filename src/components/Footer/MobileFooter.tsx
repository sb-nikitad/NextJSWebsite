import { HoverButton } from "../HoverButton/HoverButton";
import { Anton } from "next/font/google";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "react-feather";

import appStore from "../../../public/images/footer/app-store.svg";
import playMarket from "../../../public/images/footer/play-market.svg";
import Image from "next/image";
import Link from "next/link";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export const MobileFooter = () => {
  return (
    <div
      suppressHydrationWarning
      className="flex flex-col items-center gap-10 p-10"
    >
      <HoverButton
        color="bg-sb-blue"
        text="Sign Up For Updates"
        link="https://share.hsforms.com/1RZI6wdeEQfK2DVwvyf_XOAcucdi?__hstc=120525143.51943252b308feda35ce5f507577e48e.1694781859480.1702917663702.1702999848044.52&__hssc=120525143.8.1702999848044&__hsfp=2851389664"
      />
      <div>
        <Link href="mailto:contact@sportsbox.ai">
          <div className={`${anton.className} underline-offset-1 text-2xl`}>
            CONTACT@SPORTSBOX.AI
          </div>
        </Link>
        <Link href="mailto:support@sportsbox.ai">
          <div className={`${anton.className} underline-offset-1 text-2xl`}>
            SUPPORT@SPORTSBOX.AI
          </div>
        </Link>
      </div>
      <div className="w-1/3 text-center">
        Sportsbox AI products are covered by one or more US patents, including,
        but not limited to: 11,640,725; 11,620,858; 11,615,648
      </div>
      <div className="flex gap-5">
        <Link href="https://twitter.com/sportsboxai">
          <Twitter />
        </Link>
        <Link href="https://www.facebook.com/SportsboxAI/">
          <Facebook />
        </Link>
        <Link href="https://www.instagram.com/sportsboxai/">
          <Instagram />
        </Link>
        <Link href="https://www.linkedin.com/company/sportsbox-ai">
          <Linkedin />
        </Link>
        <Link href="https://www.youtube.com/channel/UCFwvVj4P1DLph9oJlPN0MfQ">
          <Youtube />
        </Link>
      </div>
      <div className={`${anton.className} text-2xl`}>
        SPORTSBOX.AI INC., © {new Date().getFullYear()}
      </div>
      <div className="flex gap-5">
        <Link href="https://apps.apple.com/us/app/sportsbox-3d-golf/id1578921026">
          <Image src={appStore} width={120} height={40} alt="app-store" />
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=com.sportsbox.golfai&pli=1">
          <Image src={playMarket} width={135} height={40} alt="app-store" />
        </Link>
      </div>
    </div>
  );
};
