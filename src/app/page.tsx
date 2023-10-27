import { Anton } from "next/font/google";
import { HoverButton } from "../components/HoverButton/HoverButton";
import clsx from "clsx";
import ImageSlider from "./components/ImageSlider";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function HomePage() {
  return (
    <div className="whitespace-pre-wrap">
      <div className="bg-[url('/images/main-bg.jpg')] bg-cover bg-center flex justify-between w-full px-[250px] py-[200px] ">
        <div className="flex flex-col gap-10">
          <div className={`${anton.className} text-6xl whitespace-pre-wrap `}>
            {"3D MOTION CAPTURE\nIN THE PALM\nOF YOUR HANDS"}
          </div>
          <div className="flex justify-between w-[300px]">
            <HoverButton color="bg-sb-blue" text="For Players" />
            <HoverButton color="bg-sb-blue" text="For Coaches" />
          </div>
        </div>
        <div>videos</div>
      </div>

      <ImageSlider />
    </div>
  );
}
