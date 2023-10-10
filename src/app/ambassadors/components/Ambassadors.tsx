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
import tenthImg from "../../../../public/images/ambassadors/James+OH.jpg";
import eleventhImg from "../../../../public/images/ambassadors/Jorge+Parada.jpg";
import twelfthImg from "../../../../public/images/ambassadors/Austin+Na.jpg";
import thirteenthImg from "../../../../public/images/ambassadors/Scott+Cowx+2.jpeg";
import fourteenthImg from "../../../../public/images/ambassadors/TJM_0372.jpeg";
import fifteenthImg from "../../../../public/images/ambassadors/tempImage2HGNTH.jpg";
import sixteenthImg from "../../../../public/images/ambassadors/Devan Bonebrake Headshot-2.png";

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
      "The first woman elected to serve as an Officer of the PGA of America, PGA Honorary President and PGA Master Professional Suzy Whaley is the PGA Director of Instruction for the Country Club at Mirasol in Palm Beach Gardens, Florida. After serving two years as PGA Secretary, and two years as Vice President, Whaley was elected as the PGA of America's first female President at the 2018 PGA Annual Meeting. Recognized as one of GOLF’s “Top 100 Teachers in America” and with the Metropolitan Golf Association’s Distinguished Service Award in 2019, Whaley's resume includes numerous other teaching awards: Golf Digest Top 50 Instructor, LPGA Top 50 Instructor, two-time Connecticut PGA Teacher of the Year, 10-time Golf Digest State Teacher of the Year and U.S. Kids Golf Master Kids Teacher. She is a five-time PGA Jr. League Championship finals Coach and has instructed more than 300 children to collegiate golf. A dual member of the PGA of America and LPGA Teaching & Club Professional division, Whaley was a LPGA Tour member in 1990 and 1993. She famously qualified and participated in the 2003 Greater Hartford Open, becoming the first woman since Babe Zaharias in 1945 to qualify for a PGA Tour event. This occurred afterWhaley became the first PGA of America woman professional to win the Connecticut PGA Championship. She competed in both the 2002 and 2005 PGA Professional Championships. Whaley also recently competed in the USGA Senior Women's Open, as well at the LPGA Senior Women’s Championship.",
  },
  {
    imageSrc: tenthImg,
    mainText: "JAMES OH",
    secondText:
      "U.S. JUNIOR AMATEUR CHAMPION, KORN FERRY TOUR WINNER, FORMER PGA TOUR PLAYER",
    thirdText:
      "James Oh is currently a golf instructor at Hacienda Golf Club in La Habra Heights, CA. As a former PGA Tour player, James has a track record of developing top tour professionals and amateurs over the last two decades. His students have won PGA Tour titles to USGA National Championships and he has helped over 50 students earn full scholarships to the nation’s Top Division 1 golf programs. In 1996, James became the youngest golfer to qualify for U.S. Amateur at age 14 years, 4 months, 20 day--one month younger than Bobby Jones in 1916. James won the 1998 U.S. Junior Amateur at Conway Farms, defeating Aaron Baddeley in the finals. James played one season of college golf at UNLV before turning pro in 2001. He Monday-qualified for the 2003 Mark Christopher Charity Classic on the Nationwide Tour and went on to win the event. After earning his card at Q-school in 2009, James played a season on the PGA Tour.",
  },
  {
    imageSrc: eleventhImg,
    mainText: "JORGE PARADA",
    secondText: "GOLF DIGEST BEST YOUNG TEACHER",
    thirdText:
      "Jorge Parada is currently the Director of Instruction at Liberty National Golf Club, where he has been since 2018 after spending 10 years at the TOUR Academy TPC Sawgrass where he held roles such as Master Instructor and Head Instructor/Facility Director. Jorge has been named one of America's Best Young Instructors biannually since 2012 by Golf Digest and has most recently been ranked #3 in the Golf Digest Best Teachers in the State of New Jersey. Some of the players Jorge has worked with in the past or currently works with include Jonas Blixt and Matt Every, Carlota Ciganda, Mel Reid and Ryan O'Toole, to name a few. In 2016 Jorge, as a coach, had 4 of his clients compete in the Rio Olympics representing their countries. He has been published in Golf Digest, Golfweek Magazine, Golf.com, and recently he was featured on Golf Channel's show Swing Expedition with Chris Como.",
  },
  {
    imageSrc: twelfthImg,
    mainText: "AUSTIN NA",
    secondText: "TOP INSTRUCTOR IN SOUTH KOREA, SBS GOLF COMMENTATOR",
    thirdText:
      "Austin Na is recognized as one of the top instructors in Korea. He has coached major tour professionals around the world. When he’s not coaching, you can find him commentating on SBS Golf, on the Asia’s Top 100 Golf Course Selection Committee, and shooting some low scores on the golf course himself. Austin grew up playing competitive golf with his brother, Kevin Na, a 5x PGA Tour winner. After graduating from UCLA with a degree in Economics, followed by a Master’s Degree at UNLV, Austin earned his Ph.D. from Korean National Sport University in Sports Management.",
  },
  {
    imageSrc: thirteenthImg,
    mainText: "SCOTT COWX",
    secondText: "OPGA TEACHER OF THE YEAR",
    thirdText:
      "Scott Cowx was named the 2019 Canadian PGA Teacher of the Year and is regarded as on of the top coaches in the world, especially in the field of swing biomechanics. Scott was named the 2011 OPGA Teacher of the Year. Scott combines cutting-edge technology with precise swing geometry, efficient biomechanics and maximizing human physiology to each individuals needs and capabilities. His continued work with PGA Tour players and Canada's top-ranked amateurs have brought Scott international attention, along with his continual research into motor skill development and implementation at the highest levels.",
  },
  {
    imageSrc: fourteenthImg,
    mainText: "KEN MACDONALD",
    secondText: "GOLF DIGEST 50 BEST GOLF FITNESS TRAINER",
    thirdText:
      "Ken Macdonald is a Golf Digest Top 50 Fitness Instructor who owns and operates Lifetime Performance in Palm Beach Gardens, Florida – a golf- and tennis-specific training studio. Ken, a level 3 TPI Certified golf fitness professional, has a Masters degree in Human Movement and is a certified Corrective Exercise Specialist and Performance Enhancement Specialist through the National Academy of Sports Medicine. Ken played collegiate golf at the University of Richmond and 5 years of competitive professional golf, a career that is highlighted by numerous professional wins including the 1998 NJ Open Championships. His intricate knowledge of the biomechanics behind the most efficient golfswings, allows him to work effectively on improving the body’s ability to perform at a high level while limiting the potential for injury. He’s trained many tour players including but not limited to Raymond Floyd, Lee Westwood, Brad Faxon, Charles Howell, Anirban Lahiri, Ashleigh Buhai, Mel Reid, Morgan Pressel, and more.",
  },
  {
    imageSrc: fifteenthImg,
    mainText: "VISION54",
    secondText: "PIA NILSSON & LYNN MARRIOTT",
    thirdText:
      "Lynn Marriott & Pia Nilsson are co-founders of VISION54, a breakthrough program and golf school based at Talking Stick Golf Club in Scottsdale, Arizona. Lynn and Pia are internationally recognized, are the two highest ranked female instructors in America, and are both regularly featured among Golf Digest's Top 50 Greatest Teachers. VISION54's Golf Schools, 54GOLF, have been awarded the 'Best Golf School in America' multiple times. VISION54's Coach Programs, 54COACH, have repeatedly received the highest marks by peers of training for teachers / coaches. Lynn and Pia have coached players to well over one hundred tour victories on the LPGA Tour, PGA Tour, European Tour, Ladies European Tour, and Japan Tour. They've coached ten different major winners and four #1 ranked players in the world.",
  },
  {
    imageSrc: sixteenthImg,
    mainText: "DEVAN BONEBRAKE",
    secondText: "GOLF DIGEST BEST YOUNG TEACHER",
    thirdText:
      "Devan Bonebrake is currently the host of the #1 Golf Show on NBC GolfPass and NBC Peacock. He has brought the sport to millions, captivating audiences with his deep knowledge and infectious passion for the game. Devan's impact on golf extends far beyond the screen. He is the proud owner of Studio Golf and the Southern California Golf Academy, institutions revered for their commitment to developing top-notch golf talent. Devan's dedication to teaching the game has earned him the prestigious title of Golf Digest's 'Best Young Teachers in America' for an impressive 10 consecutive years. Devan's journey to becoming a golf luminary began with a pivotal role as Jim McLean's personal teaching assistant in 2009. During this time, he had the privilege of working with tour players such as Lexi Thompson, Keegan Bradley, and Greg Norman. Devan's talent was undeniable, leading to his appointment as a Master Instructor for Jim McLean from 2010 to 2016.",
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
