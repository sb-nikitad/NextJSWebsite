import { Separator } from "../../components/Separator";
import { ImageCarousel } from "./components/ImageCarousel";
import { WhatIs } from "./components/WhatIs";
import { Technology } from "././components/Technology";

export default function About() {
  return (
    // <div className="px-4 sm:px-10 md:px-20 lg:p-36">
    <div className="p-4">
      <Separator height={200} />

      <WhatIs />
      <Separator height={100} />
      <ImageCarousel />
      <Separator height={100} />
      <Technology />
    </div>
  );
}
