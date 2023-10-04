"use client";
import clsx from "clsx";

import s from "./HoverButton.module.css";

type Props = {
  text: string;
  color: string;
  width?: string;
  height?: string;
};

export function HoverButton({ text, color, width, height }: Props) {
  // Define a custom style object with the width

  return (
    <button
      className={clsx(
        "p-5",
        "flex",
        "justify-center",
        "items-center",
        "shadow-[0px_0px_10px_rgba(255,255,255,0.6)]",
        "relative",
        "transition-bg duration-300",
        s.hoverButton,
        color,
        width,
        height
      )}
    >
      {text}
    </button>
  );
}
