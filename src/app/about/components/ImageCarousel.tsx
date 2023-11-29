"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import img1 from "../../../../public/images/carousel-1.png";
import img2 from "../../../../public/images/carousel-2.png";
import img3 from "../../../../public/images/carousel-3.png";
import img4 from "../../../../public/images/carousel-4.png";
import arrowImg from "../../../../public/images/arrow-icon.png";

export function ImageCarousel() {
  const [selectedImage, setSelectedImage] = useState(0);

  const imageArray = [img1, img2, img3, img4];

  const handleImageChange = (direction: "forward" | "backward") => {
    setSelectedImage((prev) => {
      if (direction === "forward" && prev < imageArray.length - 1) {
        return prev + 1;
      }

      if (direction === "backward" && prev > 0) {
        return prev - 1;
      }

      return prev;
    });
  };

  return (
    <div className="flex justify-center items-center w-full lg:px-[200px]">
      <Image
        src={arrowImg}
        alt="Arrow"
        className="w-6 h-6 transform rotate-180"
        onClick={() => handleImageChange("backward")}
      />
      <div className="w-2/3 h-40 lg:h-[500px] relative">
        <Image src={imageArray[selectedImage]} alt="image" fill className="" />
      </div>

      <Image
        src={arrowImg}
        alt="Arrow"
        className="w-6 h-6 "
        onClick={() => handleImageChange("forward")}
      />
    </div>
  );
}
