"use client";
import clsx from "clsx";

type Props = {
  text: string;
  color: string;
  width?: string;
};

export function HoverButton({ text, color, width }: Props) {
  // Define a custom style object with the width
  const buttonStyle = {
    width: width,
  };

  return (
    <button
      className={clsx("p-5", "border border-red-500", color, [
        "shadow-black",
        "shadow-sm",
      ])}
      style={buttonStyle} // Apply the custom style object here
    >
      {text}
    </button>
  );
}
