"use client";
import { useMediaQuery } from "react-responsive";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return <div>{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</div>;
};
