import { Anton } from "next/font/google";
import { Separator } from "@/components/Separator";
import { lazy } from "react";
import { HoverButton } from "../../components/HoverButton/HoverButton";
import Image from "next/image";
import s from "../../components/PersonInfCard/CardPersonInfo.module.css";
import linkStyle from "../contact/contact.module.css";

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "react-feather";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Learning() {
  return (
    <div className="p-16 w-full h-fit bg-sb-darkblue bg-center flex flex-col items-center">
      <Separator height={250} />
      <div className="w-[80%] h-fit bg-cover mb-8 flex flex-col items-start gap-y-4">
        <h1
          className={`font-bold text-[46px] text-white ${anton.className} mb-4`}
        >
          CONTACT{" "}
        </h1>
        <span className={`text-[18px] text-white`}>
          For app support:{" "}
          <a href="https://help.sportsbox.ai/" className={`${s.cardButton}`}>
            visit our knowledge base{" "}
          </a>{" "}
        </span>
        <span className={`text-[18px] text-white `}>
          For general inquiries: email us at{" "}
          <a href="mailto:contact@sportsbox.ai" className={`${s.cardButton}`}>
            contact@sportsbox.ai{" "}
          </a>{" "}
        </span>
        <span className={`text-[18px] text-white`}>
          To nominate a coach: email us at{" "}
          <a href="mailto:sales@sportsbox.ai" className={`${s.cardButton}`}>
            sales@sportsbox.ai{" "}
          </a>{" "}
        </span>
        <span className={`text-[18px] text-white`}>
          For teams of two or more coaches, please contact us for enterprise
          offers{" "}
          <a
            href="https://sportsbox-21571110.hubspotpagebuilder.com/enterprise-pricing-lead-form?__hstc=120525143.51943252b308feda35ce5f507577e48e.1694781859480.1701078729963.1701080686156.30&__hssc=120525143.5.1701080686156&__hsfp=2851389664"
            className={`${s.cardButton}`}
          >
            HERE{" "}
          </a>{" "}
        </span>
        <div className="flex gap-5">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkStyle.iconLink}`}
          >
            <Twitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkStyle.iconLink}`}
          >
            <Facebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkStyle.iconLink}`}
          >
            <Instagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkStyle.iconLink}`}
          >
            <Linkedin />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkStyle.iconLink}`}
          >
            <Youtube />
          </a>
        </div>
      </div>
    </div>
  );
}
