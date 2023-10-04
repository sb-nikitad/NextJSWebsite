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
        "gap-x-36",
        "box-border",
        "items-center",
        "px-20",
        "py-16"
      )}
    >
      <Image
        src={LogoImage}
        alt="Sportsbox3DGolf Logo"
        width={300}
        height={50}
      />
      <div
        className={clsx("flex", "gap-x-8", "justify-center", "items-center")}
      >
        <Link href={`/demo`}>
          <TabButton text="About" height="h-[20px]" />
        </Link>
        <Link href={`/demo`}>
          <TabButton text="Education" height="h-[20px]" />
        </Link>
        <Link href={`/demo`}>
          <TabButton text="Pricing" height="h-[20px]" />
        </Link>
        <Link href={`/demo`}>
          <TabButton text="Need a Coach" height="h-[20px]" />
        </Link>
        <Link href={`/demo`}>
          <TabButton text="Pro Shop" height="h-[20px]" />
        </Link>
        <Link href={`/demo`}>
          <TabButton text="Support" height="h-[20px]" />
        </Link>
        <Link href={`/demo`}>
          <TabButton text="More" height="h-[20px]" />
        </Link>
      </div>

      <div
        className={clsx("flex", "gap-x-8", "justify-center", "items-center")}
      >
        <HoverButton
          text="Book A Demo"
          color="bg-sb-blue"
          height="h-[40px]"
          width="w-[150px]"
        />
        <HoverButton
          text="Start your free trial"
          color="bg-sb-blue"
          height="h-[40px]"
          width="w-[200px]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
