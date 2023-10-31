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
          "p-5",
          "bg-sb-darkblue",
          "justify-self-start",
          "text-[19px]"
        )}
        onMouseEnter={() => setIsHovered(true)} // Keep the dropdown open when hovering it
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* <div>rerqweqw</div> */}
        {subTabs}
      </div>
    </div>
  );
}
