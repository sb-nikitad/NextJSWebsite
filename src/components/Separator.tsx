"use client";
import { useMediaQuery } from "react-responsive";

type Props = {
  width?: number;
  height?: number;
  mobileWidth?: number;
  mobileHeight?: number;
};

export const Separator = ({
  width = 0,
  height = 0,
  mobileWidth = 0,
  mobileHeight = 0,
}: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  return (
    <div
      style={{
        width: isMobile
          ? `${mobileWidth ? mobileWidth : width}px`
          : `${width}px`,
        height: isMobile
          ? `${mobileHeight ? mobileHeight : height}px`
          : `${height}px`,
      }}
    ></div>
  );
};
