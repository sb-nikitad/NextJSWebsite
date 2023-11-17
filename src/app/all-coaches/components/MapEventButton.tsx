"use client";

import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import React, { ReactNode, useState } from "react";
import { Lato, Anton } from "next/font/google";
import s from "./CoachItem.module.css";
import { MapPin, Plus } from "react-feather";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });

type Props = {
  buttonText: string;
  clickAction?: () => void;
};

export function MapEventButton({ buttonText, clickAction }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-blue-500 flex w-fit text-white p-1 text-s">
      <div>{buttonText}</div>
    </div>
  );
}
