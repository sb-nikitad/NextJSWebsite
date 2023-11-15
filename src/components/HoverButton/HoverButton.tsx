"use client";
import clsx from "clsx";

import s from "./HoverButton.module.css";
import { useState } from "react";

type Props = {
  text: string;
  color:
    | "bg-sb-blue"
    | "bg-sb-purple"
    | "bg-sb-lowpurple"
    | "bg-sb-lightpurple";
  width?: string;
  height?: string;
  shadowColor?: string;
};

export function HoverButton({
  text,
  color,
  width,
  height,
  shadowColor = "shadow-[0px_0px_10px_rgba(255,255,255,0.6)]",
}: Props) {
  return (
    <>
      <button
        className={clsx(
          "p-5",
          "flex",
          "justify-center",
          "items-center",
          "relative",
          "transition-bg duration-300",
          "rounded-[5px]",
          "font-bold",
          "tracking-wider",
          s.hoverButton,
          color,
          width,
          height,
          shadowColor,
          "text-white"
        )}
      >
        {text}
      </button>
    </>
  );
}
