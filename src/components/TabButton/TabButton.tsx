"use client";
import clsx from "clsx";
import s from "./TabButton.module.css";

type Props = {
  text: string;
  width?: string;
  height?: string;
};

export function TabButton({ text, width, height }: Props) {
  // Define a custom style object with the width

  return (
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
  );
}
