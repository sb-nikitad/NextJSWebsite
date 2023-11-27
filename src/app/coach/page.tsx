import { HoverButton } from "../../components/HoverButton/HoverButton";
import clsx from "clsx";
import ImageSlider from ".././components/ImageSlider";
import { CoachThumbnail } from "./components/CoachThumbnail";
import { MainVideoFlow } from ".././components/MainVideoFlow";
import { MainCoachPlayerRedirect } from ".././components/MainCoachPlayerRedirect";
import { WhatIs } from ".././about/components/WhatIs";
import { Separator } from "../../components/Separator";
import { Technology } from ".././about/components/Technology";
import { MainTeam } from ".././components/MainTeam";
import { MainTestimonialsCarousel } from ".././components/MainTestimonialsCarousel";

export default function HomePage() {
  return (
    <div className="">
      <CoachThumbnail />
      <ImageSlider />
      <MainVideoFlow />
      <MainCoachPlayerRedirect />
      <div className="px-[250px]">
        <WhatIs />
      </div>
      <Separator height={100} />
      <Technology />
      <MainTeam />
      {/* <MainTestimonialsCarousel /> */}
    </div>
  );
}
