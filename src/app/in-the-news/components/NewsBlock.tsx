import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import React, { useState } from "react";
import { Lato, Anton } from "next/font/google";
import { HoverButton } from "@/components/HoverButton/HoverButton";
import { NewsItem } from "./NewsItem";
import { shadowStyles } from "@/app/misc/shadowStyles";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });

import firstImg from "../../../../public/images/news/News_1.jpeg";
import secondImg from "../../../../public/images/news/News_2.jpg";
import thirdImg from "../../../../public/images/news/News_3.jpg";
import fourthImg from "../../../../public/images/news/News_4.png";
import fifthImg from "../../../../public/images/news/News_5.png";
import sixthImg from "../../../../public/images/news/News_6.png";
import seventhImg from "../../../../public/images/news/News_7.png";
import eighthImg from "../../../../public/images/news/News_8.jpeg";
import ninthImg from "../../../../public/images/news/News_9.png";
import tenthImg from "../../../../public/images/news/News_10.jpg";
import eleventhImg from "../../../../public/images/news/News_11.png";
import twelfthImg from "../../../../public/images/news/News_12.png";
import thirteenthImg from "../../../../public/images/news/News_13.png";
import fourteenthImg from "../../../../public/images/news/News_14.png";
import fifteenthImg from "../../../../public/images/news/News_15.png";
import sixteenthImg from "../../../../public/images/news/News_16.jpg";

const newsItems = [
  {
    imageSrc: firstImg,
    mainText:
      "Golf Digest: Two of golf's most innovative companies are joining forces. Here's what it means for golfers",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: secondImg,
    mainText:
      "The First Call: Is Sportsbox AI leading golf’s next technological revolution?",
    link: "https://www.firstcallgolf.com/features/feature/2022-12-13/is-sportsbox-ai-leading-golfs-next-technological-revolution",
  },
  {
    imageSrc: thirdImg,
    mainText:
      "Golf.com: This app boosted my swing speed in just 1 practice session",
    link: "https://golf.com/instruction/sportbox-ai-boost-swing-speed/",
  },
  {
    imageSrc: fourthImg,
    mainText:
      "SportTechie: Sportsbox AI Is Releasing a Consumer Product to Appeal to Golfers of All Levels With Objective Data and Feedback",
    link: "https://www.sportsbusinessjournal.com/Daily/Issues/2022/11/09/Technology/sportsbox-ai-3d-golf-app-3d-practice-objective-data",
  },
  {
    imageSrc: fifthImg,
    mainText:
      "Golf Digest: This little-known formula is the secret to Rory McIlroy's signature shot",
    link: "https://www.golfdigest.com/story/rory-mcilroy-golf-swing-draw",
  },
  {
    imageSrc: sixthImg,
    mainText: "Sports Business Journal: Gamechangers: Jeehae Lee",
    link: "https://www.sportsbusinessjournal.com/Journal/Issues/2022/09/26/Game-Changers/Lee.aspx",
  },
  {
    imageSrc: seventhImg,
    mainText:
      "SportTechie: Improving My Golf Swing at Five Iron Golf With the Help of TrackMan Radar and Sportsbox AI",
    link: "https://www.sportsbusinessjournal.com/Daily/Issues/2022/10/28/Technology/golf-swing-five-iron-golf-trackman-sportsbox-ai-sandbox-series",
  },
  {
    imageSrc: eighthImg,
    mainText:
      "Golf.com: This fatal mistake is causing your slice, according to state-of-the-art technology",
    link: "https://golf.com/instruction/fatal-mistake-causing-your-slice/",
  },
  {
    imageSrc: ninthImg,
    mainText:
      "The Athletic: How Billie Jean King, with Dodgers’ backing, helps female-founded sports startups",
    link: "https://theathletic.com/3562233/2022/09/06/billie-jean-king-trailblazer/",
  },
  {
    imageSrc: tenthImg,
    mainText:
      "Sportsbox AI Closes $5.5 Million Seed Round Led by EP Golf Ventures",
    link: "https://www.sportsbusinessjournal.com/Technology.aspx",
  },
  {
    imageSrc: eleventhImg,
    mainText:
      "Blitzer, Wie West and EP Golf Close $5.5M Round for Sports AI Startup",
    link: "https://sports.yahoo.com/blitzer-wie-west-ep-golf-130000184.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuc3BvcnRzYm94LmFpLw&guce_referrer_sig=AQAAAIxG8S520z1r7HLUn3hZaQ0MJGPrmHrev4UNASeBUw8VDps9w6LuaqZcwCzqs12ctxf41T0b9yUB0NfK8JDiWwjlRBCtLDDnvKAQiRkWJn5Rskr8pA0BlttjJE1CuXzG6Tf2hrVJjU35La96qkP3ZrmEB4Vbkgtznyzk4ZfBnnFu",
  },
  {
    imageSrc: twelfthImg,
    mainText: "Five Iron Golf Enters The World of 3D AI Swing Analysis",
    link: "https://www.sportsbusinessjournal.com/Technology.aspx",
  },
  {
    imageSrc: thirteenthImg,
    mainText:
      "Ex-golf pro links with Seattle-area AI experts on app that uses 3D motion analysis to improve game",
    link: "https://www.geekwire.com/2022/ex-golf-pro-links-with-seattle-area-ai-experts-on-app-that-uses-3d-motion-analysis-to-improve-game/",
  },
  {
    imageSrc: fourteenthImg,
    mainText:
      "BEYOND THE FAIRWAY: Sportsbox 3D Golf visualizes swings and motions",
    link: "https://www.nbcsports.com/video/sportsbox-ais-sportbox-3d-golf-visualizes-swings-coach-players",
  },
  {
    imageSrc: fifteenthImg,
    mainText:
      "Watch: 3D motion analysis captured Nelly Korda's swing; you can do it, too, with Sportsbox AI",
    link: "https://golfweek.usatoday.com/2022/02/04/sportsbox-ai-3d-motion-analysis-golf-swing/",
  },
  {
    imageSrc: sixteenthImg,
    mainText:
      "Meet Sportsbox AI, a swing app with potentially revolutionary swagger",
    link: "https://golf.com/instruction/sportsbox-ai-swing-app-revolutionary-swagger/",
  },
];

export function NewsBlock() {
  return (
    <div
      className={
        "flex justify-between gap-10 w-full bg-white py-20 px-10 flex-wrap"
      }
    >
      <div
        className={clsx(
          "flex",
          "flex-col",
          "items-center",
          "gap-y-8",
          "gap-x-4",
          "w-[300px]"
        )}
      >
        <span className={clsx("text-black", "text-5xl", anton.className)}>
          IN THE NEWS
        </span>
        <HoverButton
          text="Read More"
          color="bg-sb-blue"
          height="h-[50px]"
          width="w-[150px]"
          shadowColor={shadowStyles.black}
        />
      </div>
      <div className="w-full lg:w-[75%] grid grid-cols-1 xl:grid-cols-3 gap-5">
        {newsItems.map((newsItem) => (
          <NewsItem
            key={newsItem.mainText}
            imageSrc={newsItem.imageSrc}
            mainText={newsItem.mainText}
            link={newsItem.link}
          />
        ))}
      </div>
    </div>
  );
}
