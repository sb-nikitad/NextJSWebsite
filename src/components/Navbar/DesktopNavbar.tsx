"use client";

import Image from "next/image";
import clsx from "clsx";
import React, { useState } from "react";
import Link from "next/link";

import { TabButton } from "../TabButton/TabButton";
import { HoverButton } from "../HoverButton/HoverButton";
import LogoImage from "../../../public/images/Sportsbox3DGolf_logo_white.png";
import { SubTabButton } from "../TabButton/SubTabButton";
import { usePathname } from "next/navigation";
import { X } from "react-feather";

export const DesktopNavbar = () => {
  const [showBanner, setShowBanner] = useState(true);

  const subTabsAbout = [
    <div key={1} className={clsx("relative", "block")}>
      <SubTabButton text={"Company Info"} href={"/about"}></SubTabButton>
      <SubTabButton text={"Product Demo"} href={"/demo"}></SubTabButton>
      <SubTabButton text={"Meet The Teem"} href={"/meet-team"}></SubTabButton>
      <SubTabButton text={"Ambassadors"} href={"/ambassadors"}></SubTabButton>
      <SubTabButton text={"In the News"} href={"/in-the-news"}></SubTabButton>
      <SubTabButton
        text={"Press Releases"}
        href={"/press-releases"}
      ></SubTabButton>
    </div>,
  ];

  const subTabsFindCoach = [
    <div key={1} className={clsx("relative", "block")}>
      <SubTabButton
        text={"All 3D Coaches"}
        href={"/find-coach/all-coaches"}
      ></SubTabButton>
      <SubTabButton
        text={"Official Staff Members"}
        href={"/find-coach/staff-coaches"}
      ></SubTabButton>
    </div>,
  ];

  const subTabsSupport = [
    <div key={1} className={clsx("relative", "block")}>
      <SubTabButton
        text={"Help Center"}
        href={"https://help.sportsbox.ai/"}
      ></SubTabButton>
      <SubTabButton
        text={"Webinar Series"}
        href={"https://app.hubspot.com"}
      ></SubTabButton>
      <SubTabButton text={"Learning"} href={"/learning"}></SubTabButton>
      <SubTabButton text={"Contact"} href={"/contact"}></SubTabButton>
    </div>,
  ];

  const subTabsMore = [
    <div key={1} className={clsx("relative", "block")}>
      <SubTabButton text={"For Coaches"} href={"/coach"}></SubTabButton>
      <SubTabButton text={"For Students"} href={"/student"}></SubTabButton>
    </div>,
  ];

  const path = usePathname();

  return (
    <div>
      {showBanner ? (
        <div className="flex justify-between items-center w-full bg-sb-blue px-10 py-3 relative z-20">
          <div></div>
          <Link
            href={
              "https://sportsbox-21571110.hs-sites.com/3dstudio?__hstc=120525143.4fef867f6150e3eb0c496cca45a2185a.1703079104662.1703079104662.1703079104662.1&__hssc=120525143.1.1703079104662&__hsfp=467677067"
            }
          >
            <div>SPORTSBOX STUDIO IS HERE! CLICK HERE TO BOOK A DEMO</div>
          </Link>
          <X onClick={() => setShowBanner(false)} />
        </div>
      ) : (
        <></>
      )}

      <header suppressHydrationWarning>
        <nav
          className={`flex box-border justify-between py-10 px-12 w-[100%] text-white absolute top-0 ${
            showBanner ? "mt-10" : ""
          }`}
        >
          <div
            className={clsx(
              "flex",
              "flex-nowrap",
              "gap-x-12",
              "items-center",
              "text-sm"
            )}
          >
            <Link href="/">
              <Image
                src={LogoImage}
                alt="Sportsbox3DGolf Logo"
                width={300}
                height={50}
              />
            </Link>
            <div className="flex flex-wrap gap-x-4  text-[18px]">
              <TabButton text="About" subTabs={subTabsAbout} />
              <Link href="/education">
                <TabButton text="Education" />
              </Link>
              <Link href="https://3dgolf.sportsbox.ai/sign-up">
                <TabButton text="Pricing" />
              </Link>
              <TabButton text="Find a Coach" subTabs={subTabsFindCoach} />
              <Link href="https://shop.sportsbox.ai/">
                <TabButton text="Pro Shop" />
              </Link>

              <TabButton text="Support" subTabs={subTabsSupport} />
              <TabButton text="More" subTabs={subTabsMore} />
            </div>
          </div>
          <div
            className={clsx(
              "flex",
              "gap-x-8",
              "justify-center",
              "items-center",
              "text-[16px]"
            )}
          >
            <Link href={"https://meetings.hubspot.com/rcrawley/product-demo"}>
              <HoverButton
                text="Book A Demo"
                color="bg-sb-lightpurple"
                height="h-[50px]"
                width="w-[180px]"
                link="https://meetings.hubspot.com/edwin-fuh/product-demo"
              />
            </Link>
            <Link href={"https://3dgolf.sportsbox.ai/sign-up"}>
              <HoverButton
                text="Start your free trial"
                color="bg-sb-blue"
                height="h-[50px]"
                width="w-[220px]"
                link="https://3dgolf.sportsbox.ai/sign-up"
              />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};
