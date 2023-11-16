"use client";

import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import React, { useState } from "react";
import { Lato, Anton } from "next/font/google";
import s from "./CoachIteam.module.css";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });

type Props = {
  nameText?: string;
  infoText?: string;
  labelParts?: any[];
  place?: string;
  sendEmailBlock?: any[];
};

export function CoachItem({
  nameText,
  infoText,
  labelParts,
  place,
  sendEmailBlock,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-[200wh]">
      <button>
        <span>{nameText}</span>
      </button>
      <span>{infoText}</span>
      {labelParts}
      <button>
        <span></span>
        <Image
          src="your-image-source"
          alt="your-image-alt-text"
          width={50}
          height={50}
        />
      </button>{" "}
      <button className="bg-blue rounded-[50%]">
        <span></span>
        <Image
          src="your-image-source"
          alt="your-image-alt-text"
          width={50}
          height={50}
        />
      </button>{" "}
    </div>
  );
}
