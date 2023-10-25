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
      className={clsx(
        "p-8",
        "flex",
        "flex-col",
        "gap-y-4",
        "items-center",
        "text-center"
      )}
    >
      <Link href={link ?? "/"}>
        <Image
          src={imageSrc ? imageSrc.src : ""}
          alt="Image Description"
          className="h-[190px] w-[190px] rounded-[60%]"
          width={190}
          height={190}
        />
      </Link>
      <span>
        <span className={clsx("text-2xl", "text-black ")}>{mainText}</span>
      </span>
    </div>
  );
}
