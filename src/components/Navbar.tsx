"use client";

import React from "react";
import Link from "next/link";
import { TabButton } from "././TabButton/TabButton";

const Navbar = () => {
  return (
    <nav className={""}>
      <Link href={`/demo`}>
        <img src="*" />
      </Link>
      <div className={""}>
        <Link href={`/demo`}>
          <TabButton text="Company Info" height="h-[20px]" />
        </Link>
      </div>
      <div className={""}>
        <Link href={`//contact-us`}>
          <button className={""}>{}</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
