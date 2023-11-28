"use client";
import { useMediaQuery } from "react-responsive";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleWindowSizeChange = () => {
    console.log(window.innerWidth);
    setIsMobile(window.innerWidth <= 800);
  };

  useEffect(() => {
    console.log("gwere");
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div suppressHydrationWarning>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </div>
  );
};
