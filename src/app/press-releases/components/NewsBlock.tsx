"use client";

import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import React, { useState } from "react";
import { Lato, Anton } from "next/font/google";
import { HoverButton } from "@/components/HoverButton/HoverButton";
import { PressItem } from "./PressItem";
import { shadowStyles } from "@/app/misc/shadowStyles";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });

import firstImg from "../../../../public/images/press-releases/1.gif";
import secondImg from "../../../../public/images/press-releases/2.gif";
import { debug } from "console";

const pressItems = [
  {
    imageSrc: firstImg,
    mainText:
      "Golf Digest: Two of golf's most innovative companies are joining forces. Here's what it means for golfers",
    secondText:
      "Sportsbox Ai and Foresight Sports are joining forces to create the first-ever app with 3D body motion data as well as club and ball data from a launch monitor.",
    dateText: "12/14/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: secondImg,
    mainText:
      "Golf Digest: Two of golf's most innovative companies are joining forces. Here's what it means for golfers",
    secondText:
      "Sportsbox Ai and Foresight Sports are joining forces to create the first-ever app with 3D body motion data as well as club and ball data from a launch monitor.",
    dateText: "12/14/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: firstImg,
    mainText:
      "Golf Digest: Two of golf's most innovative companies are joining forces. Here's what it means for golfers",
    secondText:
      "Sportsbox Ai and Foresight Sports are joining forces to create the first-ever app with 3D body motion data as well as club and ball data from a launch monitor.",
    dateText: "12/14/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: firstImg,
    mainText:
      "Golf Digest: Two of golf's most innovative companies are joining forces. Here's what it means for golfers",
    secondText:
      "Sportsbox Ai and Foresight Sports are joining forces to create the first-ever app with 3D body motion data as well as club and ball data from a launch monitor.",
    dateText: "12/14/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: firstImg,
    mainText:
      "Golf Digest: Two of golf's most innovative companies are joining forces. Here's what it means for golfers",
    secondText:
      "Sportsbox Ai and Foresight Sports are joining forces to create the first-ever app with 3D body motion data as well as club and ball data from a launch monitor.",
    dateText: "12/14/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: firstImg,
    mainText:
      "Golf Digest: Two of golf's most innovative companies are joining forces. Here's what it means for golfers",
    secondText:
      "Sportsbox Ai and Foresight Sports are joining forces to create the first-ever app with 3D body motion data as well as club and ball data from a launch monitor.",
    dateText: "12/14/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: firstImg,
    mainText:
      "Golf Digest: Two of golf's most innovative companies are joining forces. Here's what it means for golfers",
    secondText:
      "Sportsbox Ai and Foresight Sports are joining forces to create the first-ever app with 3D body motion data as well as club and ball data from a launch monitor.",
    dateText: "12/14/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: firstImg,
    mainText:
      "Golf Digest: Two of golf's most innovative companies are joining forces. Here's what it means for golfers",
    secondText:
      "Sportsbox Ai and Foresight Sports are joining forces to create the first-ever app with 3D body motion data as well as club and ball data from a launch monitor.",
    dateText: "12/14/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: firstImg,
    mainText:
      "Golf Digest: Two of golf's most innovative companies are joining forces. Here's what it means for golfers",
    secondText:
      "Sportsbox Ai and Foresight Sports are joining forces to create the first-ever app with 3D body motion data as well as club and ball data from a launch monitor.",
    dateText: "12/14/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: firstImg,
    mainText:
      "Golf Digest: Two of golf's most innovative companies are joining forces. Here's what it means for golfers",
    secondText:
      "Sportsbox Ai and Foresight Sports are joining forces to create the first-ever app with 3D body motion data as well as club and ball data from a launch monitor.",
    dateText: "12/14/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: firstImg,
    mainText:
      "Golf Digest: Two of golf's most innovative companies are joining forces. Here's what it means for golfers",
    secondText:
      "Sportsbox Ai and Foresight Sports are joining forces to create the first-ever app with 3D body motion data as well as club and ball data from a launch monitor.",
    dateText: "12/14/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: firstImg,
    mainText:
      "Golf Digest: Two of golf's most innovative companies are joining forces. Here's what it means for golfers",
    secondText:
      "Sportsbox Ai and Foresight Sports are joining forces to create the first-ever app with 3D body motion data as well as club and ball data from a launch monitor.",
    dateText: "12/14/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: firstImg,
    mainText:
      "Golf Digest: Two of golf's most innovative companies are joining forces. Here's what it means for golfers",
    secondText:
      "Sportsbox Ai and Foresight Sports are joining forces to create the first-ever app with 3D body motion data as well as club and ball data from a launch monitor.",
    dateText: "12/14/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: firstImg,
    mainText:
      "Golf Digest: Two of golf's most innovative companies are joining forces. Here's what it means for golfers",
    secondText:
      "Sportsbox Ai and Foresight Sports are joining forces to create the first-ever app with 3D body motion data as well as club and ball data from a launch monitor.",
    dateText: "12/14/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
];

export function NewsBlock() {
  const [page, setPage] = useState(1);
  const limit = 6;
  const pageToIndex = limit * (page - 1);
  const totalPages = Math.ceil(pressItems.length / limit);

  const handleReadNewer = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleReadOlder = () => {
    console.log("Total Pages:", totalPages);
    console.log("Current Page:", page);

    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  console.log("Total Pages:", totalPages);
  console.log("Current Page:", page);

  return (
    <div
      className={
        "flex flex-col justify-center items-center gap-10 w-full bg-white py-20 px-10 flex-wrap"
      }
    >
      <div className="w-[80%] lg:w-[80%] grid grid-cols-1 xl:grid-cols-2 gap-[30px] row-start-auto">
        {pressItems.slice(pageToIndex, pageToIndex + limit).map((pressItem) => (
          <PressItem
            imageSrc={pressItem.imageSrc}
            mainText={pressItem.mainText}
            dateText={pressItem.dateText}
            link={pressItem.link}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 text-black w-[80%]">
        {page > 1 && (
          <div
            className="flex place-self-start text-[20px]"
            onClick={handleReadNewer}
          >
            {" "}
            {"< Newer Posts"}
          </div>
        )}
        {page + 1 <= totalPages && (
          <div
            className="flex place-self-end text-[20px]"
            onClick={handleReadOlder}
          >
            {"Older Posts >"}
          </div>
        )}
      </div>
    </div>
  );
}
