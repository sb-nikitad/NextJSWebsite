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

export function TabButton({ text, width, height, subTabs = [] }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (state: boolean) => {
    if (subTabs.length) {
      setIsHovered(state);
    }
  };

  return (
    <div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
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
          "text-[19px]",
          "z-50"
        )}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        {/* <div>rerqweqw</div> */}
        {subTabs}
      </div>
    </div>
  );
}
