import clsx from "clsx";
import s from "./HoverButton.module.css";
import Link from "next/link";
import { UrlObject } from "url";
import { ReactNode } from "react";

type Props = {
  className?: string;
  text: string;
  hoverTextColor?: "hover:text-white" | "hover:text-black";
  fontColor?: "text-white" | "text-black";
  color:
    | "bg-sb-blue"
    | "bg-sb-purple"
    | "bg-sb-lowpurple"
    | "bg-sb-lightpurple";
  width?: string;
  height?: string;
  shadowColor?: string;
  link?: string | UrlObject;
};

export function HoverButton({
  text,
  color,
  fontColor = "text-white",
  width,
  height,
  className,
  shadowColor = "shadow-sb-blue",
  link,
  hoverTextColor = "hover:text-white",
}: Props) {
  const buttonContent = (
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
        "tracking-normalr",
        s.hoverButton,
        hoverTextColor,
        color,
        width,
        height,
        shadowColor,
        fontColor,
        className
      )}
    >
      {text}
    </button>
  );

  return link ? (
    <Link href={link} passHref>
      {buttonContent as ReactNode}
    </Link>
  ) : (
    buttonContent
  );
}
