"use client";
import clsx from "clsx";

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
        "transition-all",
        "shadow-[0px_0px_10px_rgba(255,255,255,0.6)]",
        "hover:bg-transparent",
        "hover:border-b-4",
        "hover:border-sb-blue",
        "hover:shadow-none",
        color,
        width,
        height
      )}
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
