import { HoverButton } from "../components/HoverButton/HoverButton";
import clsx from "clsx";
import ImageSlider from "./components/ImageSlider";
import { MainThumbnail } from "./components/MainThumbnail";
import { MainVideoFlow } from "./components/MainVideoFlow";
import { MainCoachPlayerRedirect } from "./components/MainCoachPlayerRedirect";
import { WhatIs } from "./about/components/WhatIs";
import { Separator } from "../components/Separator";
import { Technology } from "./about/components/Technology";
import { MainTeam } from "./components/MainTeam";
import { MainWhatIs } from "./components/MainWhatIs";
import { MainTestimonialsCarousel } from "./components/MainTestimonialsCarousel";
import Image from "next/image";
import logo from "../../public/images/footer/logo.png";

export default function HomePage() {
  return (
    <div className="">
      <MainThumbnail />
      <ImageSlider />
      <MainVideoFlow />
      <MainCoachPlayerRedirect />
      <MainWhatIs />

      <Separator height={100} />
      <Technology />
      {/* <MainTeam /> */}
      <MainTestimonialsCarousel />
      <div className="flex justify-center py-[150px]">
        <Image src={logo} width={280} height={60} alt="logo" />
      </div>
    </div>
  );
}
