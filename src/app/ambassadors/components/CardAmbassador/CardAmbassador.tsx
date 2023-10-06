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
}: Props): JSX.Element {
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
      <Image
        src={imageSrc ? imageSrc.src : ""}
        alt="Image Description"
        className="rounded-full border-ra"
        width={450}
        height={450}
      />
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
          isExpanded ? "max-h-auto" : "max-h-24"
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
