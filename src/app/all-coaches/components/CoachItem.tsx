"use client";

import React, { ReactNode, useState } from "react";
import { Lato, Anton } from "next/font/google";
import { MapPin, Plus } from "react-feather";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });

type Props = {
  nameText: string;
  infoText: string;
  labelParts: ReactNode;
  place: string;
  placeLink: string;
  sendEmailBlock: any[];
};

export function CoachItem({
  nameText,
  infoText,
  labelParts,
  place,
  placeLink,
  sendEmailBlock,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-start min-h-[500px] w-[200wh] text-center">
      <button>
        <span className="font-bold text-xl">{nameText}</span>
      </button>
      <span className="font-bold text-l text-gray-500	 whitespace-pre-wrap">
        {infoText}
      </span>
      {labelParts}
      <a
        className="flex text-gray-400 text-l font-medium"
        href={placeLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MapPin />
        {place}
      </a>
      <div className="bg-blue-500 flex w-fit text-white p-1 rounded-md">
        <div>Connect</div>
        <Plus />
      </div>
    </div>
  );
}
