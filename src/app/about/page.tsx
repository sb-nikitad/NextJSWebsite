import { Separator } from "../../components/Separator";
import { ImageCarousel } from "./components/ImageCarousel";
import { WhatIs } from "./components/WhatIs";
import { Technology } from "././components/Technology";

export default function About() {
  return (
    <div className="px-4 lg:px-36">
      <Separator height={250} mobileHeight={100} />
      <WhatIs />
      <Separator height={100} />
      <ImageCarousel />
      <Separator height={100} />
      <Technology />
    </div>
  );
}
