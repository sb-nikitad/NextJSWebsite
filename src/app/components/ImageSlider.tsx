"use client";

import { useState } from "react";

import { Anton } from "next/font/google";
import img from "../../../public/images/ambassadors/Sean+Foley-Headshot.jpg";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "react-feather";
import clsx from "clsx";
const anton = Anton({ weight: "400", subsets: ["latin"] });

const ImageSlider = () => {
  const [slideAmount, setSlideAmount] = useState(0);

  const IMAGE_DIMENSIONS = 330;
  const MAX_SCROLL = 13;

  const handleSlideRight = () => {
    setSlideAmount((prev) => (prev <= 0 ? prev : prev - 1));
  };

  const handleSlideLeft = () => {
    setSlideAmount((prev) => (prev >= MAX_SCROLL ? prev : prev + 1));
  };

  console.log((slideAmount / MAX_SCROLL) * 100);

  const genPictures = () => {
    const arr = [];
    for (let i = 0; i < 15; i++) {
      arr.push(img);
    }

    return arr.map((el, i) => (
      <div className="">
        <div className="relative h-[330px] w-[330px] overflow-hidden">
          <Image
            className=" object-cover object-center "
            src={el}
            fill
            alt="img"
          />
        </div>
      </div>
    ));
  };

  return (
    <div className="flex justify-between px-[230px] py-[100px]">
      <div>
        <div className="h-[5px] w-full bg-sb-blue" />
        <div
          className={clsx(anton.className, "whitespace-pre-wrap text-4xl py-7")}
        >
          {"HOW THE BEST\nINSTRUCTORS ARE\nLEVELING UP"}
        </div>
        <div className="text-xl">
          {
            "The Sportsbox 3DGolf community is\nrevolutionizing golf instruction.\nDon't get left behind."
          }
        </div>
      </div>
      <div>
        <div className="relative w-[50vw] overflow-hidden h-full">
          <div
            className="flex transition-transform duration-300 gap-5"
            style={{
              transform: `translateX(${slideAmount * -IMAGE_DIMENSIONS}px)`,
            }}
          >
            {genPictures()}
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="bg-gray-400 w-full h-1 rounded">
            <div
              className="bg-white h-full rounded"
              style={{ width: `${(slideAmount / MAX_SCROLL) * 100}%` }}
            ></div>
          </div>
          <div className="w-[70px]">
            {slideAmount + 1} / {MAX_SCROLL + 1}
          </div>

          <ArrowLeft onClick={handleSlideRight} />
          <ArrowRight onClick={handleSlideLeft} />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
