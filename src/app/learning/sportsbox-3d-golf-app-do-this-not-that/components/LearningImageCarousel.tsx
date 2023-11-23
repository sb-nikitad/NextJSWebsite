"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import img1 from "../../../../../public/images/learning/corousel/1.png";
import img2 from "../../../../../public/images/learning/corousel/2.png";
import img3 from "../../../../../public/images/learning/corousel/3.png";
import img4 from "../../../../../public/images/learning/corousel/4.png";
import img5 from "../../../../../public/images/learning/corousel/5.png";

import arrowImg from "../../../../../public/images/arrow-icon.png";

export function ImageCarousel() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const imageArray = [img1, img2, img3, img4, img5];

  const handleImageChange = (direction: "forward" | "backward") => {
    setIsTransitioning(true);

    setTimeout(() => {
      setSelectedImage((prev) => {
        let nextIndex;

        if (direction === "forward") {
          nextIndex = prev < imageArray.length - 1 ? prev + 1 : 0;
        } else {
          nextIndex = prev > 0 ? prev - 1 : imageArray.length - 1;
        }

        setIsTransitioning(false);
        return nextIndex;
      });
    }, 500); // Adjust the timeout to match the transition duration
  };

  const handlePreviewClick = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedImage(index);
      setIsTransitioning(false);
    }, 500); // Adjust the timeout to match the transition duration
  };

  // Automatically switch image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleImageChange("forward");
    }, 3000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [selectedImage]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center relative">
        <Image
          src={arrowImg}
          alt="Arrow"
          className="w-12 h-12 transform rotate-180 absolute left-0 cursor-pointer"
          onClick={() => handleImageChange("backward")}
        />
        <Image
          src={imageArray[selectedImage]}
          alt="YouTube Video 2"
          style={{
            width: "100%",
            height: "950px",
            objectFit: "cover",
            transition: "opacity 0.5s ease-in-out",
            opacity: isTransitioning ? 0 : 1,
          }}
        />
        <Image
          src={arrowImg}
          alt="Arrow"
          className="w-12 h-12 absolute right-0 cursor-pointer"
          onClick={() => handleImageChange("forward")}
        />
      </div>

      <div className="flex mt-4">
        {imageArray.map((img, index) => (
          <div
            key={index}
            className={`cursor-pointer mx-2 ${
              selectedImage === index
                ? "border-2 border-blue-500"
                : "opacity-50"
            }`}
            onClick={() => handlePreviewClick(index)}
          >
            <Image
              src={img}
              alt={`Preview ${index + 1}`}
              width={100}
              height={60}
              className="rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
