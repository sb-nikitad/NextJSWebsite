"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import img1 from "../../../../public/images/carousel-1.png";
import img2 from "../../../../public/images/carousel-2.png";
import img3 from "../../../../public/images/carousel-3.png";
import img4 from "../../../../public/images/carousel-4.png";

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
    <div className="flex justify-between items-center">
      <div className="bg-white" onClick={() => handleImageChange("backward")}>
        {"<"}
      </div>
      <Image
        src={imageArray[selectedImage]}
        alt="image"
        width="500"
        height="500"
      />
      <div className="bg-white" onClick={() => handleImageChange("forward")}>
        {">"}
      </div>
    </div>
  );
}
