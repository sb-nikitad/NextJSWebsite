"use client";
import clsx from "clsx";
import s from "./TabButton.module.css";
import { useState } from "react";

type Props = {
  text: string;
  width?: string;
  height?: string;
  subTabs?: any[];
};

export function TabButton({ text, width, height, subTabs }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={clsx("relative", "block", s.tabButton, width, height)}
        style={
          {
            //boxShadow: "0 0 10px rgba(255, 255, 255, 0.6)",
          }
        }
      >
        {text}
      </button>
      <div
        className={clsx(
          isHovered ? "block" : "hidden",
          "absolute",
          "top-[100px]"
        )}
      >
        {/* <div>rerqweqw</div> */}
        {subTabs}
      </div>
    </div>
  );
}
