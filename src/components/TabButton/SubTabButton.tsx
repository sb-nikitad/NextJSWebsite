"use client";
import clsx from "clsx";
import s from "./SabButton.module.css";
import { log } from "console";
import { usePathname } from "next/navigation";

type Props = {
  text: string;
  href: string;
};

export function SubTabButton({ text, href }: Props) {
  const pathname = usePathname();

  return (
    <div>
      <a href={href}>
        <button
          className={clsx(
            "relative",
            "block",
            s.tabButton,
            "mb-2",
            pathname === href ? "underline" : "no-underline"
          )}
        >
          {text}
        </button>
      </a>
    </div>
  );
}
