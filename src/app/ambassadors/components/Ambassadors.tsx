"use client";

import Image from "next/image";
import clsx from "clsx";
import "../../../app/globals.css";
import { Lato, Anton } from "next/font/google";

import firstImg from "../../../../public/images/ambassadors/Sean+Foley-Headshot.jpg";
import secondImg from "../../../../public/images/ambassadors/Erika+Larkin.jpeg";
import thirdImg from "../../../../public/images/ambassadors/Mike+Adams.jpeg";
import fourthImg from "../../../../public/images/ambassadors/David+Leadbetter.png";
import fifthImg from "../../../../public/images/ambassadors/Dana+Dahlquist.jpeg";
import sixthImg from "../../../../public/images/ambassadors/Terry+Rowles.jpeg";
import seventhImg from "../../../../public/images/ambassadors/Jeff+Smith.jpeg";
import eighthImg from "../../../../public/images/ambassadors/Chris+Mayson.png";
import ninthImg from "../../../../public/images/ambassadors/Suzy+Whaley.jpeg";

import { CardAmbassador } from "./CardAmbassador/CardAmbassador";

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
  {
    imageSrc: fourthImg,
    mainText: "DAVID LEADBETTER",
    secondText: " ",
    thirdText:
      "David has helped many pros including #1 in the world win many major tournaments including but not limited to: Ernie Els, Nick Faldo, Michelle Wie, Se Ri Park, Nick Price, Lydia Ko, Danielle Kang, Ian Baker-Finch, and more. Originally from Worthing in Sussex, England, David began his career in golf on the European and South African Tours. He soon realized his interest was in the technique, mechanics, and intricacies of the game, which eventually led him to spend more time teaching than playing. Soon after David’s retirement from playing, he began to incorporate his methods and philosophies into a stringent, holistic training program for qualified instructors that remains unmatched even today. Since launching the first Leadbetter Golf Academy over 30 years ago, David has coached players to over a dozen Major Championship titles and over 100 individual worldwide tournament victories. Four of those players have even held first place in the Official World Golf Ranking. With a desire to bring that same world-class instruction to players of all ages and abilities, and in addition to the numerous articles written for publications like Golf Digest and Golf International over the past three decades, David has authored seven books on the topic.",
  },
  {
    imageSrc: fifthImg,
    mainText: "DANA DAHLQUIST",
    secondText: "GOLF DIGEST 50 BEST TEACHER, GOLF.COM TOP 100 INSTRUCTOR",
    thirdText:
      "Dana Dahlquist is a GOLF Magazine Top 100 Teacher and Golf Digest Top 50 Teacher in America. Born and raised in Long Beach, CA, Dana grew up playing competitive golf in the junior ranks and NCAA Division I in college. After graduating from Long Beach State, he set his sights to be the instructor he never had. With his curiosity of how things worked, he started working at Heartwell Golf Course - manning the shops in the morning and practicing his instruction on the range. In 2005, the Internet boom of YouTube and “forums” flooded the golf-verse. In a blink of an eye, Dana created a massive interest on his lesson forum with only 200 students but thousands of followers! After 20 years of lessons instructing at two other golf courses, Dana set up shop at El Dorado Golf Course with his own teaching methodology that involves a simple breakdown of the golf swing mechanics. He is always looking to adapt this method to create that working golf swing for his student through biometrics and of course, trial and error.",
  },
  {
    imageSrc: sixthImg,
    mainText: "TERRY ROWLES",
    secondText: "GOLF DIGEST 50 BEST TEACHER, GOLF.COM TOP 100 INSTRUCTOR",
    thirdText:
      "Terry Rowles, who is ranked as a GOLF Magazine Top 100 Instructor and Golf Digest’s 50 Best Teachers, has conducted his own independent research and has been on the forefront of integrating technology with golf coaching. In his work alongside Dr. Phil Cheetham and Dr. Sasho Mackenzie, they created the first system ever to measure and define the grip. As a coach, Terry, who teaches out of Hudson National Golf Club in Croton-on-Hudson, New York, specializes in helping golfers overcome slumps and become the best version of themselves. He has coached winner on every major professional tour. Some of the more notables players he has taught include Bernd Wiesberger, Val Skinner, Na Yeon Choi, Stephanie Meadow, Luke Donald, Kevin Streelman, Aaron Baddeley, Jazz Janewattananond, Ben Crane, Mike Weir, Kevin Stadler, Seung Yul Noh, Colt Knost, and Paul McGinley.",
  },
  {
    imageSrc: seventhImg,
    mainText: "JEFF SMITH",
    secondText: "GOLF.COM TOP 100 INSTRUCTOR",
    thirdText:
      "Jeff Smith has helped players win collegiate tournaments, conference championships, national championships, prestigious amateur events as well as coached players to victories on the Mackenzie Tour, Web.com and PGA Tour. Coaches Viktor Hovland, Patrick Rodgers, Davis Riley, Aaron Wise, among other elite tour players.",
  },
  {
    imageSrc: eighthImg,
    mainText: "CHRIS MAYSON",
    secondText: "GOLF.COM TOP 100 INSTRUCTOR",
    thirdText:
      "Chris is currently the Director of Golf at National Golf Links of America, in Southampton, New York. He is also recognized as a GOLF Magazine-Top 100 Teacher, a Golf Digest-Best Young Teacher in America, and one of the Top Ranked Coaches in California according to Golf Digest. After a professional career was cut short due to a back injury in 2007, Chris found his true passion of coaching while helping fellow players on the mini tour. He was previously the Head Coach of the La Costa Resort and Spa Golf Academy and started the Maderas Golf Academy presented by Chris Mayson in 2011. Chris has coached multiple players to the winners’ circle on each of the PGA Tour, LPGA Tour, Korn Ferry Tour and Epson Tour. He has coached World Number 1s Ariya Jutanugarn, Yani Tseng and Lydia Ko, as well as coaching IK Kim and JeongEun Lee6 to the British Open and US Open Championships respectively. Chris caddied for longtime student Brendan Steele when he won the 2017 PGA Tour Safeway Open and worked with Kyoung Hoon Lee for 5 years guiding him from the Korn Ferry Tour to becoming a PGA Tour Champion during that time. Chris' passion is in developing elite young players from the junior tours, through college and into the professional ranks. He has had over 100 players gain spots on NCAA Division 1 Teams in the last 12 years and has proudly coached over 50 AJGA Champions. Chris has taught Ricky Castillo from age 12 and helped Ricky become a Number 1 Ranked Junior in America, the Number 1 Ranked Amateur in the World and a Walker Cup star in 2021 going 4-0",
  },
  {
    imageSrc: ninthImg,
    mainText: "SUZY WHALEY",
    secondText:
      "GOLF DIGEST 50 BEST TEACHER, GOLF.COM TOP 100, PGA OF AMERICA HONORARY PRESIDENT",
    thirdText:
      "Jeff Smith has helped players win collegiate tournaments, conference championships, national championships, prestigious amateur events as well as coached players to victories on the Mackenzie Tour, Web.com and PGA Tour. Coaches Viktor Hovland, Patrick Rodgers, Davis Riley, Aaron Wise, among other elite tour players.",
  },
];

export function Ambassadors() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      {ambassadors.map((ambassador) => (
        <CardAmbassador
          imageSrc={ambassador.imageSrc}
          mainText={ambassador.mainText}
          secondText={ambassador.secondText}
          thirdText={ambassador.thirdText}
        />
      ))}
    </div>
  );
}
