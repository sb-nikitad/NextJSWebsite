"use client";

import Image from "next/image";
import clsx from "clsx";
import "../../../app/globals.css";
import { Lato, Anton } from "next/font/google";

import firstImg from "../../../../public/images/team/jeehae.jpeg";
import secondImg from "../../../../public/images/team/sam.jpg";
import thirdImg from "../../../../public/images/team/philJPG.jpeg";

import { CardPersonInfo } from "../../../components/PersonInfCard/CardPersonInfo";

const lato = Lato({ weight: "400", subsets: ["latin"] });

const ambassadors = [
  {
    imageSrc: firstImg,
    mainText: "JEEHAE LEE",
    secondText: "CEO AND CO-FOUNDER",
    thirdText: `
    <p>Jeehae Lee is a former professional golfer on the LPGA Tour and an executive in the sports media entertainment industry. As the Founder & CEO of Sportsbox.ai, Jeehae is building products using 3D motion analysis technology that will transform the way people learn and improve skills in sports, starting with golf.</p>
    <br>
    <p>Prior to founding Sportsbox, she led strategy and new business development for various divisions at Topgolf, including Toptracer. Jeehae has a BA in Economics from Yale and an MBA from The Wharton School at University of Pennsylvania.</p>
  `,
  },
  {
    imageSrc: secondImg,
    mainText: "SAM MENAKER",
    secondText: "CTO AND CO-FOUNDER",
    thirdText: `
    <p> As SVP of Engineering at VoiceBox Technologies, Sam Menaker led teams in building solutions using AI and ML, which shipped in 100s of millions of mobile phones, consumer electronic products, and cars for companies such as Samsung, Toyota, Chrysler and BestBuy. Previous positions also include Senior Director at Nuance Communications and Software Architect at Amazon.</p> 
    <br>
    <p>Sam was born in Latvia and graduated from the University of Latvia with B.S. in Applied Math and an M.S. in Computer Science. In 1988, he emigrated from Latvia to the U.S., and started working in startup companies in New York, and later in Boston, MA, where he held key engineering positions at companies before they went private or were acquired, such as MathSoft and Planet All. Sam has worked on many patents in managing mathematical documents, voice recognition and natural language processing. In addition, he works as an advisor with the TK Foundation to restore and preserve memories of the Holocaust.</p>`,
  },
  {
    imageSrc: thirdImg,
    mainText: "DR. PHIL CHEETHAM",
    secondText: "CHIEF SCIENCE OFFICER",
    thirdText: `
    <p> Dr. Cheetham, who was previously the Director of Sports Technology and Innovation at the United States Olympic and Paralympic Committee and has been dubbed the "3D guy," has been an innovator in 3D Motion Analysis and Sports Biomechanics for over 30 years. </p>
    <br>
    <p> Dr. Cheetham, an Olympian in gymnastics, competed in the 1976 Montreal Olympic Games for Australia, also co-developed one of the first sports motion analysis systems while working as Head of Engineering Technology for the U.S. Olympic Committee's Sports Science Program in the 1980s. He has also co-developed several motion analysis systems for companies he has co-founded, including; Peak Performance Technologies Inc., Skill Technologies Inc. and Advanced Motion Measurement Inc. (AMM). </p>
    <br>
    <p> With his work as the Head Biomechanist and Director of the TPI Biomechanics Advisory Board, Dr. Cheetham co-developed TPI 3D, a motion analysis system that is specifically designed to measure golf swing motion and efficiency using a respected biomechanics principle called the Kinematic Sequence.</p> 
    <br>
    <p> Dr. Cheetham has worked on various research projects with elite golf coaches, such as Chris Como, Terry Rowles, Mike Adams, Greg Rose and Dave Phillips (TPI), Jeff Smith and Joe Mayo. He has also conducted 3D Motion Analysis Assessment on the best golfers in the world, including Phil Mickelson, Bryson DeChambeau, Aaron Baddeley, Mike Weir, Pat Perez, Scott Piercy, Brian Gay, Brandon Hagy, Kevin Tway, William McGirt, JJ Spaun, Aaron Wise, Wyndham Clark and Patrick Rogers.</p>`,
  },
];

export function FoundingTeam() {
  return (
    <div className="flex flex-col gap-y-12">
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
