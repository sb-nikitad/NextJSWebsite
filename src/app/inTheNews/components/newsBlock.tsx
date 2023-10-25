"use client";

import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import React, { useState } from "react";
import { Lato, Anton } from "next/font/google";
import { HoverButton } from "@/components/HoverButton/HoverButton";
import { NewsItem } from "./newsItem";
const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });

import firstImg from "../../../../public/images/news/News_1.jpeg";

const newsItems = [
  {
    imageSrc: firstImg,
    mainText:
      "Golf Digest: Two of golf's most innovative companies are joining forces. Here's what it means for golfers",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: firstImg,
    mainText:
      "Golf Digest: Two of golf's most innovative companies are joining forces. Here's what it means for golfers",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: firstImg,
    mainText:
      "Golf Digest: Two of golf's most innovative companies are joining forces. Here's what it means for golfers",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: firstImg,
    mainText:
      "Golf Digest: Two of golf's most innovative companies are joining forces. Here's what it means for golfers",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
];

export function NewsBlock() {
  return (
    <div
      className={clsx(
        "flex",
        "justify-center",
        "w-[100%]",
        "bg-white",
        "pt-10"
      )}
    >
      <div
        className={clsx(
          "pl-4",
          "flex",
          "flex-col",
          "items-center",
          "gap-y-8",
          "w-[25%]"
        )}
      >
        <span className={clsx("text-black", "text-4xl", anton.className)}>
          IN THE NEWS
        </span>
        <HoverButton
          text="Read More"
          color="bg-sb-blue"
          height="h-[50px]"
          width="w-[150px]"
        />
      </div>
      <div className="w-[75%] grid grid-cols-1 xl:grid-cols-3 gap-y-4">
        {newsItems.map((newsItem) => (
          <NewsItem
            imageSrc={newsItem.imageSrc}
            mainText={newsItem.mainText}
            link={newsItem.link}
          />
        ))}
      </div>
    </div>
  );
}
