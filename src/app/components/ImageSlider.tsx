"use client";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Anton } from "next/font/google";
import img1 from "../../../public/images/ambassadors/Sean+Foley-Headshot.jpg";
import img2 from "../../../public/images/ambassadors/Erika+Larkin.jpeg";
import img3 from "../../../public/images/ambassadors/Mike+Adams.jpeg";
import img4 from "../../../public/images/ambassadors/David+Leadbetter.png";
import img5 from "../../../public/images/ambassadors/Dana+Dahlquist.jpeg";
import img6 from "../../../public/images/main/testimonials/Terry_Rowles.png";
import img7 from "../../../public/images/ambassadors/Jeff+Smith.jpeg";
import img8 from "../../../public/images/ambassadors/Chris+Mayson.png";
import img9 from "../../../public/images/ambassadors/Suzy+Whaley.jpeg";
import img10 from "../../../public/images/ambassadors/James+OH.jpg";
import img11 from "../../../public/images/ambassadors/Jorge+Parada.jpg";
import img12 from "../../../public/images/ambassadors/Austin+Na.jpg";
import img13 from "../../../public/images/ambassadors/Scott+Cowx+2.jpeg";
import img14 from "../../../public/images/ambassadors/TJM_0372.jpeg";
import img15 from "../../../public/images/ambassadors/tempImage2HGNTH.jpg";
import img16 from "../../../public/images/ambassadors/Devan Bonebrake Headshot-2.png";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "react-feather";
import clsx from "clsx";
const anton = Anton({ weight: "400", subsets: ["latin"] });

const ImageSlider = () => {
  const [slideAmount, setSlideAmount] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width: 1180px)" });

  const IMAGE_DIMENSIONS = isMobile ? 350 : 350;
  const MAX_SCROLL = isMobile ? 15 : 14;

  const handleSlideRight = () => {
    setSlideAmount((prev) => (prev <= 0 ? prev : prev - 1));
  };

  const handleSlideLeft = () => {
    setSlideAmount((prev) => (prev >= MAX_SCROLL ? prev : prev + 1));
  };

  const genPictures = () => {
    const arr = [
      {
        image: img1,
        name: "Sean Foley",
        description:
          "No. 5 on Golf Digest's 50 Best Teachers, GOLF.com Top 100",
      },
      {
        image: img2,
        name: "Erika Larkin",
        description:
          "Golf Digest 50 Best Teacher, Golf Digest No. 1 Best Teacher in Virginia",
      },
      {
        image: img3,
        name: "Mike Adams",
        description:
          "No. 3 on Golf Digest's 50 Best Teachers, GOLF.com Top 100",
      },
      {
        image: img4,
        name: "David Leadbetter",
        description:
          "No. 8 on Golf Digest's 50 Best Teachers, GOLF.com Top 100",
      },
      {
        image: img5,
        name: "Dana Dahlquist",
        description: "Golf Digest 50 Best Teacher, GOLF.com Top 100 Instructor",
      },
      {
        image: img6,
        name: "Terry Rowles",
        description: "Golf Digest 50 Best Teacher, GOLF.com Top 100 Instructor",
      },
      {
        image: img7,
        name: "Jeff Smith",
        description: "GOLF.com Top 100 Instructor",
      },
      {
        image: img8,
        name: "Chris Mayson",
        description: "GOLF.com Top 100 Instructor",
      },
      {
        image: img9,
        name: "Suzy Whaley",
        description:
          "Golf Digest 50 Best Teacher, Golf.com Top 100, PGA of America Honorary President",
      },
      {
        image: img10,
        name: "James Oh",
        description:
          "U.S. Junior Amateur Champion, Korn Ferry Tour Winner, Former PGA Tour Player",
      },
      {
        image: img11,
        name: "Jorge Parada",
        description: "Golf Digest Best Young Teacher",
      },
      {
        image: img12,
        name: "Austin Na",
        description: "Top Instructor in Korea, SBS Golf Commentator",
      },
      {
        image: img13,
        name: "Scott Cowx",
        description: "OPGA Teacher of the Year",
      },
      {
        image: img14,
        name: "Ken Macdonald",
        description: "Golf Digest 50 Best Golf Fitness Trainer",
      },
      {
        image: img15,
        name: "Pia Nilsson & Lynn Marriott",
        description: "Golf Digest 50 Best Teacher, Golf.com Top 100 Instructor",
      },
      {
        image: img16,
        name: "Devan Bonebrake",
        description: "Golf Digest Best Young Teacher",
      },
    ];
    // for (let i = 0; i < 15; i++) {
    //   arr.push(img);
    // }

    return arr.map((el, i) => (
      <div key={i}>
        <div className="relative h-[330px] w-[330px] overflow-hidden">
          <Image
            className=" object-cover object-center z-0"
            src={el.image}
            fill
            alt="img"
          />
        </div>
        <div
          style={{ bottom: "0px" }}
          className="absolute w-[330px] z-20 p-5 bg-black bg-opacity-30"
        >
          <div className={` text-xl ${anton.className}`}>{el.name}</div>
          <div className={`  `}>{el.description}</div>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex justify-between gap-20 px-10 lg:px-[100px] 2xl:px-[200px] py-[100px] flex-wrap lg:flex-nowrap">
      <div className="w-full md:w-[300px] xl:w-full">
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
        <div className="relative w-[80vw] md:w-[90vw] lg:w-[64vw] xl:w-[50vw] overflow-hidden h-full">
          <div
            className="flex transition-transform duration-300 gap-5"
            style={{
              transform: `translateX(${slideAmount * -IMAGE_DIMENSIONS}px)`,
            }}
          >
            {genPictures()}
          </div>
        </div>
        <div className="flex gap-0 lg:gap-5 items-center">
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
