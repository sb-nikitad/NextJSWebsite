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
import thirdImg from "../../../../public/images/press-releases/3.png";
import fourthImg from "../../../../public/images/press-releases/4.jpeg";
import fifthImg from "../../../../public/images/press-releases/5.png";
import sixthImg from "../../../../public/images/press-releases/6.png";
import seventhImg from "../../../../public/images/press-releases/7.png";
import eighthImg from "../../../../public/images/press-releases/8.png";
import ningthImg from "../../../../public/images/press-releases/9.jpeg";
import tenthImg from "../../../../public/images/press-releases/10.png";
import eleventhImg from "../../../../public/images/press-releases/11.png";
import twelfthImg from "../../../../public/images/press-releases/12.png";
import thirteenthImg from "../../../../public/images/press-releases/13.png";
import fourteenthImg from "../../../../public/images/press-releases/14.jpeg";
import fifteenthImg from "../../../../public/images/press-releases/15.png";
import sixteenthImg from "../../../../public/images/press-releases/16.png";
import seventeenthImg from "../../../../public/images/press-releases/17.jpeg";
import eighteenthImg from "../../../../public/images/press-releases/18.png";
import nineteenthImg from "../../../../public/images/press-releases/19.png";
import twentiethImg from "../../../../public/images/press-releases/20.png";
import twentyfirstImg from "../../../../public/images/press-releases/21.jpg";
import twentysecondImg from "../../../../public/images/press-releases/22.jpeg";
import twentythirdImg from "../../../../public/images/press-releases/23.png";
import twentyfourthImg from "../../../../public/images/press-releases/24.jpeg";
import twentyfifthImg from "../../../../public/images/press-releases/25.png";
import twentysixthImg from "../../../../public/images/press-releases/26.png";

import { debug } from "console";
import { imageOptimizer } from "next/dist/server/image-optimizer";
import { title } from "process";

const pressItems = [
  {
    imageSrc: firstImg,
    mainText:
      "SPORTSBOX AI UNVEILS PARTNERSHIP WITH FORESIGHT SPORTS TO INTEGRATE LAUNCH MONITOR DATA INTO ITS 3DGOLF APP",
    secondText:
      "Sportsbox Ai and Foresight Sports are joining forces to create the first-ever app with 3D body motion data as well as club and ball data from a launch monitor.",
    dateText: "12/14/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: secondImg,
    mainText:
      "SPORTSBOX AI LAUNCHES FIRST VERSION OF CONSUMER APP 3D PRACTICE WITH CONTENT FROM TOP 100 COACHES AND TRAINING AID PARTNERS",
    secondText:
      "3D Practice provides golfers of all abilities to benefit from data-driven Practice Guides – with or without a coach.",
    dateText: "12/14/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: thirdImg,
    mainText:
      "SPORTSBOX AI CLOSES SEED ROUND LED BY EP GOLF VENTURES, AN INVESTMENT PARTNERSHIP BETWEEN ELYSIAN PARK VENTURES AND THE PGA OF AMERICA",
    secondText:
      "Sportsbox AI closes first seed round, bringing the company’s total amount raised to more than $5.5 million to date.",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
    dateText: "Press Releases  8/4/22",
    customContent: [
      {
        title: "test",
        redirect:
          "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
      },
    ],
  },
  {
    imageSrc: fourthImg,
    mainText: "FIVE IRON GOLF ENTERS THE WORLD OF 3D AI SWING ANALYSIS",
    secondText: "",
    dateText: "Press Releases, Partnerships  6/27/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: fifthImg,
    mainText:
      "PGA OF AMERICA HONORARY PRESIDENT SUZY WHALEY JOINS SPORTSBOX AI AS AN ADVISOR",
    secondText: "",
    dateText: "3/17/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: sixthImg,
    mainText:
      "SPORTSBOX AI WELCOMES SEA ISLAND GOLF PERFORMANCE CENTER AS AN OFFICIAL PARTNER",
    secondText: "",
    dateText: "Press Releases  1/19/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: seventhImg,
    mainText:
      "SPORTSBOX AI WELCOMES LEADBETTER GOLF ACADEMY AS AN OFFICIAL PARTNER",
    secondText: "",
    dateText: "Press Releases  1/18/22",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: eighthImg,
    mainText: "DR. PHIL CHEETHAM JOINS SPORTSBOX AS CHIEF SCIENCE OFFICER",
    secondText: "",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: ningthImg,
    mainText: "HAPPY HOLIDAYS FROM SPORTSBOX!",
    secondText: "",
    dateText: "12/22/21",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: tenthImg,
    mainText:
      "LPGA TOUR PRO MARINA ALEX BECOMES THE NEWEST SPORTSBOX AI INVESTOR",
    secondText: "",
    dateText: "Press Releases  11/17/21",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: eleventhImg,
    mainText:
      "MAJOR CHAMPION MICHELLE WIE WEST JOINS SPORTSBOX AI AS INVESTOR AND ADVISOR",
    secondText: "",
    dateText: "Press Releases  10/22/21",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: twelfthImg,
    mainText:
      "SPORTTECHIE: SPORTSBOX AI TO LAUNCH 3D GOLF ON MONDAY, DELIVERS SLO-MO BIOMECHANICS TO SMARTPHONES",
    secondText: "",
    dateText: "News  10/10/21",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: thirteenthImg,
    mainText: "SPORTSBOX 3D GOLF HOSTS VIRTUAL LAUNCH EVENT",
    secondText: "",
    dateText: "10/7/21",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
  },
  {
    imageSrc: fourteenthImg,
    mainText: "SPORTSBOX AI ADDS DAVID LEADBETTER AS AN INVESTOR AND ADVISOR",
    secondText: "",
    dateText: "9/23/21",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
    customContent: [
      {
        title: "Press Releases",
        redirect:
          "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
      },
    ],
  },
  {
    imageSrc: fifteenthImg,
    mainText:
      "SPORTTECHIE: SPORTSBOX AI CEO: ANY GOLFER CAN GET A SWING ANALYSIS AND RECOMMENDED TIPS",
    secondText: "",
    dateText: " 9/7/21",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
    customContent: [
      {
        title: "News",
        redirect:
          "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
      },
    ],
  },
  {
    imageSrc: sixteenthImg,
    mainText:
      "SGOLF.COM: NEW TECH SHOWS EXACTLY HOW MUCH BRYSON TURNS ON HIS BACKSWING",
    secondText: "",
    dateText: "8/30/21",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
    customContent: [
      {
        title: "News",
        redirect:
          "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
      },
    ],
  },
  {
    imageSrc: seventeenthImg,
    mainText:
      "RANDI ZUCKERBERG SIGNS ON WITH SPORTSBOX AI AS AN INVESTOR AND ADVISOR",
    secondText: "",
    dateText: "8/11/21",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
    customContent: [
      {
        title: "Press Releases",
        redirect:
          "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
      },
    ],
  },
  {
    imageSrc: eighteenthImg,
    mainText: "SEAN FOLEY JOINS SPORTSBOX AI AS AN INVESTOR AND ADVISOR",
    secondText: "",
    dateText: "7/30/21",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
    customContent: [
      {
        title: "Press Releases",
        redirect:
          "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
      },
    ],
  },
  {
    imageSrc: nineteenthImg,
    mainText:
      "USA TODAY: FORMER LPGA PLAYER JEEHAE LEE SHOWS OFF NEW GOLF APP THAT TURNS 2D VIDEO INTO 3D",
    secondText: "",
    dateText: "7/15/21",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
    customContent: [
      {
        title: "News",
        redirect:
          "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
      },
    ],
  },
  {
    imageSrc: twentiethImg,
    mainText:
      "GENERATING MORE SPEED WITH EFFICIENT TURNS IN YOUR BACKSWING AND DOWNSWING",
    secondText: "",
    dateText: "4/27/21",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
    customContent: [
      {
        title: "Blogs",
        redirect:
          "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
      },
    ],
  },
  {
    imageSrc: twentyfirstImg,
    mainText: "CAN AI APPS HELP YOUR GOLF SWING? - WSJ",
    secondText: "",
    dateText: "4/21/21",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
    customContent: [
      {
        title: "News",
        redirect:
          "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
      },
    ],
  },
  {
    imageSrc: twentysecondImg,
    mainText: "LEARN MORE ABOUT OUR GOLF ADVISORS",
    secondText: "",
    dateText: "3/25/21",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
    customContent: [
      {
        title: "Press Releases",
        redirect:
          "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
      },
    ],
  },
  {
    imageSrc: twentythirdImg,
    mainText:
      "SPORTSBOX AI PLANS BETA TEST LAUNCH FOR AI-POWERED GOLF TRAINING MOBILE APP THAT CAN CAPTURE, MEASURE AND ANALYZE THE SWING IN 3D AND IN REAL TIME",
    secondText: "",
    dateText: "3/11/21",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
    customContent: [
      {
        title: "Press Releases",
        redirect:
          "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
      },
    ],
  },
  {
    imageSrc: twentyfourthImg,
    mainText:
      "LEADING SPORTS BIOMECHANIST DR. PHIL CHEETHAM JOINS SPORTSBOX AI AS A CONSULTANT",
    secondText: "",
    dateText: "12/1/20",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
    customContent: [
      {
        title: "Press Releases",
        redirect:
          "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
      },
    ],
  },
  {
    imageSrc: twentyfifthImg,
    mainText:
      "SPORTSBOX AI NAMES FORMER TOPGOLF EXECUTIVE AND LPGA PLAYER JEEHAE LEE AS PRESIDENT AND CEO",
    secondText: "",
    dateText: "11/2/20",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
    customContent: [
      {
        title: "Press Releases",
        redirect:
          "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
      },
    ],
  },
  {
    imageSrc: twentyfourthImg,
    mainText: "AITHINKTANK ANNOUNCES FORMATION OF SPORTSBOX AI",
    secondText: "",
    dateText: "9/1/20",
    link: "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
    customContent: [
      {
        title: "Press Releases",
        redirect:
          "https://www.golfdigest.com/story/foresight-sports-sportsbox-partnership",
      },
    ],
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
    <div>
      <div
        className={
          "flex flex-col justify-center items-center gap-10 w-full bg-white py-20 px-10 flex-wrap"
        }
      >
        <div className="w-[70%] lg:w-[75%] grid grid-cols-1 xl:grid-cols-2 gap-[30px] row-start-auto">
          {pressItems
            .slice(pageToIndex, pageToIndex + limit)
            .map((pressItem) => (
              <PressItem
                imageSrc={pressItem.imageSrc}
                mainText={pressItem.mainText}
                secondText={pressItem.secondText}
                dateText={pressItem.dateText}
                link={pressItem.link}
                customContent={pressItem.customContent}
              />
            ))}
        </div>
      </div>
      <div className="bg-white flex justify-between text-black w-full px-24 pb-24">
        {page > 1 ? (
          <div
            className="flex place-self-start text-[20px]"
            onClick={handleReadNewer}
          >
            {" "}
            {"< Newer Posts"}
          </div>
        ) : (
          <div></div>
        )}
        {page + 1 <= totalPages ? (
          <div
            className="flex place-self-end text-[20px]"
            onClick={handleReadOlder}
          >
            {"Older Posts >"}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
