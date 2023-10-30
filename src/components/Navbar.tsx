"use client";

import Image from "next/image";
import clsx from "clsx";
import React from "react";
import Link from "next/link";

import { TabButton } from "././TabButton/TabButton";
import { HoverButton } from "././HoverButton/HoverButton";
import LogoImage from "../../public/images/Sportsbox3DGolf_logo_white.png";
import { SubTabButton } from "././TabButton/SubTabButton";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const subTabsAbout = [
    <div key={1} className={clsx("relative", "block")}>
      <SubTabButton text={"Company Info"} href={"/about"}></SubTabButton>
      <SubTabButton text={"Product Demo"} href={"/demo"}></SubTabButton>
      <SubTabButton text={"Meet The Teem"} href={"/meet-team"}></SubTabButton>
      <SubTabButton text={"Ambassadors"} href={"/ambassadors"}></SubTabButton>
      <SubTabButton text={"In the News"} href={"/in-the-news"}></SubTabButton>
      <SubTabButton
        text={"Press Releases"}
        href={"/ambassadors"}
      ></SubTabButton>
    </div>,
  ];

  const path = usePathname();

  return (
    <header className="">
      <nav
        className={
          "flex box-border items-center justify-between py-10 px-12 w-[100%] text-white absolute top-0"
        }
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
          <Image
            src={LogoImage}
            alt="Sportsbox3DGolf Logo"
            width={300}
            height={50}
          />
          <div className="flex flex-wrap gap-x-4 justify-center items-center text-[18px]">
            <TabButton text="About" subTabs={subTabsAbout} />
            <TabButton text="Education" subTabs={subTabsAbout} />
            <TabButton text="Pricing" subTabs={subTabsAbout} />
            <TabButton text="Find a Coach" subTabs={subTabsAbout} />
            <TabButton text="Pro Shop" subTabs={subTabsAbout} />
            <TabButton text="Support" subTabs={subTabsAbout} />
            <TabButton text="More" subTabs={subTabsAbout} />
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
          <HoverButton
            text="Book A Demo"
            color="bg-sb-lightpurple"
            height="h-[50px]"
            width="w-[180px]"
          />
          <HoverButton
            text="Start your free trial"
            color="bg-sb-blue"
            height="h-[50px]"
            width="w-[220px]"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
