"use client";

import Image from "next/image";
import clsx from "clsx";
import "../../../app/globals.css";
import { Lato, Anton } from "next/font/google";

import firstImg from "../../../../public/images/team/MikeAdams.jpg";
import secondImg from "../../../../public/images/team/TerryRowles.jpg";
import thirdImg from "../../../../public/images/team/David-Leadbetter.png";
import fourthImg from "../../../../public/images/team/Sean-Foley-Headshot.jpg";
import fifthImg from "../../../../public/images/team/Jeffrey+Clay.jpg";

import { CardPersonInfo } from "../../../components/PersonInfCard/CardPersonInfo";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });
const ambassadors = [
  {
    imageSrc: firstImg,
    mainText: "MIKE ADAMS",
    secondText: "GOLF DIGEST #2 RANKED INSTRUCTOR",
    thirdText: `
    <p>Known as the "Swing Doctor" and "Teacher of Teachers," Mike Adams has been included on every GOLF Magazine Top 100 Instructor and Golf Digest Top 50 Teacher list since their inception. He is currently ranked no. 2 in Golf Digest's Top 50 Teacher list and is a member of the World Golf Teachers Hall of Fame.</p>
    <br>
    <p>Mike, who has conducted extensive research on swing biomechanics, has written and co-written 18 golf instruction books, including two GOLF Magazine Instruction Books of the Year: Play Better Golf and The LAWs of the Golf Swing. His latest book The Ultimate Golf Lesson, with Terry Rowles and Golf Digest's Matthew Rudy, will be released later this year.</p>
    <br>
    <p>Mike spends his winters as the Director of Instruction at Medalist GC in Hobe Sound, Florida, and during the summer, he teaches at Fiddler's Elbow CC in Bedminster, New Jersey.</p>


  `,
  },
  {
    imageSrc: secondImg,
    mainText: "TERRY ROWLES",
    secondText: "GOLF MAGAZINE TOP 100 INSTRUCTOR",
    thirdText: `
    <p>Terry Rowles, who is ranked as a GOLF Magazine Top 100 Instructor and Best In State by Golf Digest, has conducted his own independent research and has been on the forefront of integrating technology with golf coaching. In his work alongside Dr. Phil Cheetham and Dr. Sasho Mackenzie, they created the first system ever to measure and define the grip.</p>
    <br>
    <p>As a coach, Terry, who teaches out of Mountain Ridge CC in West Caldwell, New Jersey, specializes in helping golfers overcome slumps and become the best version of themselves. He has coached winner on every major professional tour. Some of the more notables players he has taught include Bernd Wiesberger, Val Skinner, Na Yeon Choi, Stephanie Meadow, Luke Donald, Kevin Streelman, Aaron Baddeley, Jazz Janewattananond, Ben Crane, Mike Weir, Kevin Stadler, Seung Yul Noh, Colt Knost, and Paul McGinley.</p>
`,
  },
  {
    imageSrc: thirdImg,
    mainText: "DAVID LEADBETTER",
    secondText: "CONSULTANT",
    thirdText: `
    Originally from Worthing in Sussex, England, David began his career in golf on the European and South African Tours. He soon realized his interest was in the technique, mechanics, and intricacies of the game, which eventually led him to spend more time teaching than playing. Soon after David’s retirement from playing, he began to incorporate his methods and philosophies into a stringent, holistic training program for qualified instructors that remains unmatched even today. Since launching the first Leadbetter Golf Academy over 30 years ago, David has coached players to over a dozen Major Championship titles and over 100 individual worldwide tournament victories. Four of those players have even held first place in the Official World Golf Ranking. With a desire to bring that same world-class instruction to players of all ages and abilities, and in addition to the numerous articles written for publications like Golf Digest and Golf International over the past three decades, David has authored seven books on the topic.
`,
  },
  {
    imageSrc: fourthImg,
    mainText: "SEAN FOLEY",
    secondText: "CONSULTANT",
    thirdText: `
    <p>Sean Foley is a world-renowned golf instructor based in Orlando, Florida. He has coached the likes of 2013 U.S. Open Champion and Olympic Gold Medalist Justin Rose, 2016 Masters champion Danny Willett, three-time PGA Tour champion Cameron Champ -- who captured last week's 3M Championship -- and worked with Tiger Woods from 2010 to 2014. He has been voted as the top golf teacher in the world by players on the PGA Tour. Foley also teaches former Women's World No. 1 and current No. 10 player Lydia Ko.</p>
    <br>
    <p>Foley is a Golf Magazine Top 100 Instructor and is also ranked no. 8 on Golf Digest’s Top 50 Instructors in America.</p>
`,
  },
  {
    imageSrc: fifthImg,
    mainText: "JEFF CLAY",
    secondText: "CONSULTANT",
    thirdText: `
    <p>Jeff Clay is a Class A PGA Golf Professional with extensive experience over 20 years teaching the game of golf to golfers of all levels. He owns and manages the Pacific Northwest Golf Center in Redmond, WA. Jeff was the Head Professional at TPC Snoqualmie Ridge and has worked at Sand Point Country Club in Seattle and Bear Creek Country Club in Woodinville.</p>
    <br>
    <p>An accomplished player, Jeff most recently held a handicap of +2, the course record at Lynnwood Golf Course and several tournament victories. A 2004 graduate of The University of Washington with a degree in History and Visual Communications, Jeff was also a member of the Husky Football team.</p>
`,
  },
];

export function GolfAdvisors() {
  return (
    <div className="flex flex-col gap-y-12">
      <div className={clsx(anton.className, "flex", "items-center")}>
        <span className={clsx("border-b-4", "border-sb-blue", "text-4xl")}>
          GOLF ADVISORS
        </span>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {ambassadors.map((ambassador) => (
          <CardPersonInfo
            key={ambassador.mainText}
            imageSrc={ambassador.imageSrc}
            mainText={ambassador.mainText}
            secondText={ambassador.secondText}
            thirdText={ambassador.thirdText}
            width="max-w-[440px]"
          />
        ))}
      </div>
    </div>
  );
}
