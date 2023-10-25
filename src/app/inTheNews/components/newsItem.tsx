"use client";

import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import React, { useState } from "react";
import { Lato, Anton } from "next/font/google";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });

type Props = {
  imageSrc?: StaticImageData;
  mainText?: string;
  link?: Url;
};

export function NewsItem({ imageSrc, mainText, link }: Props) {
  return (
    <div
      className={clsx("flex", "flex-col", "gap-y-4", "items-left", "w-[330px]")}
    >
      <Image
        src={imageSrc ? imageSrc.src : ""}
        alt="Image Description"
        className="h-[250px] w-[300px]"
        width={190}
        height={190}
      />

      <span
        className={clsx(
          "w-[100%]",
          "text-left",
          "font-bold",
          "text-xl",
          "text-black"
        )}
      >
        {mainText}
      </span>
    </div>
  );
}
