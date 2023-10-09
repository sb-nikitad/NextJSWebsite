"use client";

import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import React, { useState } from "react";

import "../../../../app/globals.css";
import { Lato, Anton } from "next/font/google";
import s from "./CardAmbassador.module.css";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });

type Props = {
  imageSrc?: StaticImageData;
  mainText?: string;
  secondText?: string;
  thirdText?: string;
};

export function CardAmbassador({
  imageSrc,
  mainText,
  secondText,
  thirdText,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={clsx(
        "w-[22rem]",
        "h-100%",
        "custom-hsl-background",
        "rounded-[25px]",
        "p-8",
        "flex",
        "flex-col",
        "gap-y-4",
        "items-center",
        "text-center"
      )}
    >
      <div className="h-[190px] w-[190px] rounded-full object-cover border-radius-[50%] display-block">
        <Image
          src={imageSrc ? imageSrc.src : ""}
          alt="Image Description"
          className=""
          fill
        />
      </div>

      <div
        className={clsx(
          "font-bold",
          "text-2xl",
          "text-white ",
          anton.className
        )}
      >
        {mainText}
      </div>
      <div
        className={clsx("font-bold", "text-xl", "text-white", anton.className)}
      >
        {secondText}
      </div>
      <div
        className={clsx(
          "text-white",
          "text-md",
          "mb-8",
          "text-justify",
          "overflow-hidden",
          isExpanded ? "max-h-64" : "max-h-24",
          "transition-max-height ease-in-out duration-300"
        )}
      >
        {thirdText}
      </div>

      <button
        className={`${s.cardButton} self-start`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Read more
      </button>
    </div>
  );
}
