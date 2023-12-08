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
  secondText?: string;
  dateText?: string;
  link?: Url;
  customContent?: any[];
};

export function PressItem({
  imageSrc,
  mainText,
  secondText,
  dateText,
  link,
  customContent,
}: Props) {
  return (
    // <Link href={link ? link.toString() : ""}>
    <div className="flex flex-col justify-center items-center h-fit gap-y-4 text-black">
      <a
        className="flex justify-center items-center"
        href={link ? link.toString() : ""}
        target="_self"
        rel="noopener noreferrer"
      >
        <Image
          src={imageSrc ? imageSrc.src : ""}
          alt="YouTube Video 2"
          height={700}
          width={10000}
          className="object-cover w-[900px] h-[400px]"
        />
      </a>

      <div className="flex flex-col justify-center text-center items-center gap-y-4">
        <p className={`flex text-xs ${anton.className}`}>
          {customContent?.map((content, index) => (
            <div>
              <a key={index} href={content.redirect}>
                {content.title}
              </a>

              <span> &#8226; </span>
            </div>
          ))}
          {dateText}
        </p>

        <p className={`text-2xl ${anton.className}`}>
          <a
            href={link ? link.toString() : ""}
            target="_self"
            rel="noopener noreferrer"
          >
            {mainText}
          </a>
        </p>

        <p className={`text-l font-normal`}>
          <a
            href={link ? link.toString() : ""}
            target="_self"
            rel="noopener noreferrer"
          >
            {secondText}
          </a>
        </p>

        <p className="text-m border-b-[1px] border-white inline-block">
          <a
            href={link ? link.toString() : ""}
            target="_self"
            rel="noopener noreferrer"
          >
            Read More{" "}
          </a>
        </p>
      </div>
    </div>
  );
}
