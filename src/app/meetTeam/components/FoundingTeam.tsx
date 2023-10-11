"use client";

import Image from "next/image";
import clsx from "clsx";
import "../../../app/globals.css";
import { Lato, Anton } from "next/font/google";

import firstImg from "../../../../public/images/ambassadors/Sean+Foley-Headshot.jpg";
import secondImg from "../../../../public/images/ambassadors/Erika+Larkin.jpeg";
import thirdImg from "../../../../public/images/ambassadors/Mike+Adams.jpeg";

import { CardPersonInfo } from "../../../components/PersonInfCard/CardPersonInfo";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });
const ambassadors = [
  {
    imageSrc: firstImg,
    mainText: "SEAN FOLEY",
    secondText: "NO. 5 ON GOLF DIGEST'S 50 BEST TEACHERS, GOLF.COM TOP 100",
    thirdText:
      "Former #1 instructor in the world who has helped many pros including #1 in the world win many major tournaments including but not limited to: Tiger Woods, Justin Rose, Lydia Ko, Ben An, Sean O’haire, Stephen Ames, as well as other PGA and LPGA Tour players. Sean Foley is a world-renowned golf instructor based in Orlando, Florida. He has coached the likes of 2013 U.S. Open Champion and Olympic Gold Medalist Justin Rose, 2016 Masters champion Danny Willett, three-time PGA Tour champion Cameron Champ -- who captured last week's 3M Championship -- and worked with Tiger Woods from 2010 to 2014. He has been voted as the top golf teacher in the world by players on the PGA Tour. Foley also teaches former Women's World No. 1 and current No. 10 player Lydia Ko. Foley is a Golf Magazine Top 100 Instructor and is also ranked no. 5 on Golf Digest’s Top 50 Instructors in America.",
  },
  {
    imageSrc: secondImg,
    mainText: "ERIKA LARKIN",
    secondText:
      "GOLF DIGEST 50 BEST TEACHER, GOLF DIGEST NO. 1 BEST TEACHER IN VIRGINIA",
    thirdText:
      "Erika Larkin is the Director of Instruction at The Club at Creighton Farms, in Aldie, Virgina, and she was recently honored as a 'Top 50 Teacher in America' (#46) by Golf Digest. Since 2014, Erika has been named Golf Digest's No. 1 Teacher in the State of Virginia. Erika wrote her first book, 'A True Swing', in May 2017 and has since grown a large following on social media with her #golfedutainment videos as @erikalarkingolf on IG / TikTok and YouTube. In 2020 she joined an amazing team of coaches with GolfFanatics.com to provide instructional content and destination golf experiences. In 2021 Erika attended her first PGA Tour events as a coach, with her player Larkin Gross (no relation), who was named 2022 PGA National Player of the Year.",
  },
  {
    imageSrc: thirdImg,
    mainText: "MIKE ADAMS",
    secondText: "NO. 3 ON GOLF DIGEST'S 50 BEST TEACHERS, GOLF.COM TOP 100",
    thirdText:
      'Known as the "Swing Doctor" and "Teacher of Teachers", Mike Adams has been included on every GOLF Magazine Top 100 Instructor and Golf Digest Top 50 Teacher list since their inception. He is currently ranked no. 3 in Golf Digest\'s Top 50 Teacher list and is a member of the World Golf Teachers Hall of Fame. Mike, who has conducted extensive research on swing biomechanics, has written and co-written 18 golf instruction books, including two GOLF Magazine Instruction Books of the Year: Play Better Golf and The LAWs of the Golf Swing. His latest book, The Ultimate Golf Lesson, with Terry Rowles and Golf Digest\'s Matthew Rudy, will be released later this year. Mike spends his winters as the Director of Instruction at Medalist GC in Hobe Sound, Florida, and during the summer, he teaches at Fiddler\'s Elbow CC in Bedminster, New Jersey.',
  },
];

export function FoundingTeam() {
  return (
    <div className="flex flex-col gap-y-12">
      <div
        className={clsx(anton.className, "flex", "items-center", "gap-x-52")}
      >
        <span className={clsx("border-b-4", "border-sb-blue", "text-4xl")}>
          FOUNDING AND EXECUTIVE TEAM
        </span>
        <span className={clsx("text-2xl", "w-[550px]")}>
          WE ARE A TEAM OF EXPERTS IN SPORTS, AI TECHNOLOGY, AND BIOMECHANICAL
          SCIENCE.
        </span>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {ambassadors.map((ambassador) => (
          <CardPersonInfo
            imageSrc={ambassador.imageSrc}
            mainText={ambassador.mainText}
            secondText={ambassador.secondText}
            thirdText={ambassador.thirdText}
            width="w-[440px]"
          />
        ))}
      </div>
    </div>
  );
}
