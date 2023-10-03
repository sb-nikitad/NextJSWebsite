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
        `${color}`,
        "hover:bg-transparent",
        "hover:border-b-4",
        "hover:border-blue-500"
      )}
      style={{
        width,
        height,
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
      }}
    >
      {text}
    </button>
  );
}
