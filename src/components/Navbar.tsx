"use client";

import Image from "next/image";
import clsx from "clsx";
import React from "react";
import Link from "next/link";
import { TabButton } from "././TabButton/TabButton";
import { HoverButton } from "././HoverButton/HoverButton";
import LogoImage from "../../public/images/Sportsbox3DGolf_logo_white.png";

const Navbar = () => {
  return (
    <nav
      className={clsx(
        "flex",
        "box-border",
        "items-center",
        "justify-between",
        "py-10",
        "px-12",
        "relative",
        "w-[100%]"
      )}
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
        <div
          className={clsx(
            "flex",
            "flex-wrap",
            "gap-x-4",
            "justify-center",
            "items-center",
            "text-[18px]"
          )}
        >
          <Link href={`/demo`}>
            <TabButton text="About" />
          </Link>
          <Link href={`/demo`}>
            <TabButton text="Education" />
          </Link>
          <Link href={`/demo`}>
            <TabButton text="Pricing" />
          </Link>
          <Link href={`/demo`}>
            <TabButton text="Need a Coach" />
          </Link>
          <Link href={`/demo`}>
            <TabButton text="Pro Shop" />
          </Link>
          <Link href={`/demo`}>
            <TabButton text="Support" />
          </Link>
          <Link href={`/demo`}>
            <TabButton text="More" />
          </Link>
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
  );
};

export default Navbar;
