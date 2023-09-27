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
  const buttonStyle = {
    width: width,
    height: height,
    backgroundColor: color,
  };

  return (
    <button
      className={clsx(
        "p-5",
        "flex",
        "justify-center",
        "items-center",
        "shadow-yellow",
        "shadow-ls",
        "border border-red-500",
        color,
        ["shadow-yellow", "shadow-ls"]
      )}
      style={buttonStyle} // Apply the custom style object here
    >
      {text}
    </button>
  );
}
