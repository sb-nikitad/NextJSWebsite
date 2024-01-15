"use client";

import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import React, { useState } from "react";
import { Lato, Anton } from "next/font/google";
import s from "./CardPersonInfo.module.css";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });

type Props = {
  imageSrc?: StaticImageData;
  mainText?: string;
  secondText?: string;
  thirdText?: string;
  width?: string;
};

export function CardPersonInfo({
  imageSrc,
  mainText,
  secondText,
  thirdText,
  width,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={clsx(
        width,
        "bg-sb-lightdarkblue",
        "rounded-[25px]",
        "p-8",
        "flex",
        "flex-col",
        "gap-y-6",
        "items-center",
        "text-center"
      )}
    >
      <Image
        src={imageSrc ? imageSrc.src : ""}
        alt="Image Description"
        className="h-[190px] w-[190px] object-cover object-[80%] rounded-full border border-sb-purple"
        width={190}
        height={190}
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
      {thirdText && (
        <>
          <div
            className={clsx(
              "text-white",
              "text-md",
              "mb-8",
              "text-start",
              "tracking-wider",
              "overflow-hidden",
              "leading-normal",
              isExpanded ? "max-h-[1200px]" : "max-h-[150px]",
              "transition-max-height ease-in-out duration-300"
            )}
            dangerouslySetInnerHTML={{ __html: thirdText }}
          />

          {thirdText.length > 350 && (
            <button
              className={`${s.cardButton} self-start`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Read less" : "Read more"}{" "}
            </button>
          )}
        </>
      )}
    </div>
  );
}
