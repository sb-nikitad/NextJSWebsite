"use client";
import clsx from "clsx";
import s from "./SabButton.module.css";

type Props = {
  text: string;
  href: string;
};

export function SubTabButton({ text, href }: Props) {
  return (
    <div>
      <a href={href}>
        <button className={clsx("relative", "block", s.tabButton, "mb-2")}>
          {text}
        </button>
      </a>
    </div>
  );
}
