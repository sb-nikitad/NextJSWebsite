"use client";
import { useMediaQuery } from "react-responsive";
import { MobileFooter } from "./MobileFooter";
import { DesktopFooter } from "./DesktopFooter";

export const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return <div>{isMobile ? <MobileFooter /> : <DesktopFooter />}</div>;
};
