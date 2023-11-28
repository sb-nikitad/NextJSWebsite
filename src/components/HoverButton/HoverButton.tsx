"use client";
import clsx from "clsx";

import s from "./HoverButton.module.css";
import { useState } from "react";

type Props = {
  className?: string;
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
  className,
  shadowColor = "shadow-sb-blue",
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
          "text-white",
          className
        )}
      >
        {text}
      </button>
    </>
  );
}
