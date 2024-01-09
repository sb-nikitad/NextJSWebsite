"use client";

import { Anton } from "next/font/google";
import { Separator } from "@/components/Separator";
import { lazy } from "react";
import { HoverButton } from "../../components/HoverButton/HoverButton";
import Image from "next/image";

import firstImg from "../../../public/images/learning/1.png";
import secondImg from "../../../public/images/learning/2.png";
import thirdImg from "../../../public/images/learning/3.png";
import fourthImg from "../../../public/images/learning/4.png";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Learning() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="p-12 lg:p-32 w-full h-fit bg-sb-darkblue bg-center">
      <Separator height={230} />

      <div className="w-full h-fit bg-cover flex flex-col items-center">
        <div className="flex flex-col justfy-center items-center">
          <div
            className={`font-bold text-white ${anton.className} mb-4`}
            style={{ fontSize: "3rem" }}
          >
            <p className="border-b-4 border-blue-500 inline-block">LEARNING</p>
          </div>
          <p className={`text-xl text-white mb-4`}>
            Here’s information on how we measure and what we measure.
          </p>
          <p className={`text-xl text-white mb-8`}>
            More educational and learning resources are available to Sportsbox
            3D Golf subscribers.
          </p>

          <HoverButton
            text="Get Sportsbox Certified"
            color="bg-sb-blue"
            width="w-[270px]"
            height="h-[60px]"
            link="https://sportsbox-ai.teachable.com/p/sportsbox-ai-level-1-certification"
          />
        </div>
        <Separator height={230} />
        <div className={`font-bold text-5xl mb-8 ${anton.className}`}>
          TUTORIALS FOR HOW-TO-USE THE SPORTSBOX 3D GOLF APP
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 pt-[100px]">
          <iframe
            width={isMobile ? "300px" : "500px"}
            height={isMobile ? "200px" : "250px"}
            src="https://www.youtube.com/embed/0y39gWWREMo?si=LzqQlmDvD882gueq"
            title="YouTube Video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width={isMobile ? "300px" : "500px"}
            height={isMobile ? "200px" : "250px"}
            src="https://www.youtube.com/embed/ZobbJiGzBAM?si=EagNj18VCCM8cTRk"
            title="YouTube Video 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            width={isMobile ? "300px" : "500px"}
            height={isMobile ? "200px" : "250px"}
            src="https://www.youtube.com/embed/dVZlPkzWkog?si=0v_htoJiOhnEhCPh"
            title="YouTube Video 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            width={isMobile ? "300px" : "500px"}
            height={isMobile ? "200px" : "250px"}
            src="https://www.youtube.com/embed/lrxqc_eejnY?si=5ZUooisc78WI_iQH"
            title="YouTube Video 4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            width={isMobile ? "300px" : "500px"}
            height={isMobile ? "200px" : "250px"}
            src="https://www.youtube.com/embed/DJKOxQm38tM?si=9a2WFYLp_rBnrFGh"
            title="YouTube Video 4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <Separator height={230} />

        <div className="w-full h-fit bg-cover flex flex-col items-center">
          <div
            className={`font-bold text-white ${anton.className} mb-4`}
            style={{ fontSize: "3rem" }}
          >
            MORE TUTORIALS AND 3D BIOMECHANICS WEBINARS
          </div>

          <iframe
            className="pt-[100px]"
            width={isMobile ? "300px" : "700px"}
            height={isMobile ? "200px" : "400px"}
            src="https://www.youtube.com/embed/2vlbCyjLzLU?si=ETJYv3caWcNGnix4"
            title="YouTube Video 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <Separator height={230} />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center w-full h-fit gap-y-4">
            <a
              w-fit
              h-fit
              className=""
              href="learning/sportsbox-3d-golf-app-do-this-not-that"
              rel="noopener noreferrer"
            >
              <Image
                src={firstImg}
                alt="YouTube Video 2"
                style={{ width: "500px", height: "350px", objectFit: "cover" }}
              />
            </a>

            <p className={`text-xs text-white ${anton.className}`}>10/29/21</p>

            <p className={`text-2xl text-white ${anton.className}`}>
              <a
                href="learning/sportsbox-3d-golf-app-do-this-not-that"
                rel="noopener noreferrer"
              >
                SPORTSBOX 3D GOLF APP: DO THIS, NOT THAT{" "}
              </a>
            </p>

            <p className="text-m border-b-[1px] border-white inline-block">
              <a
                href="learning/sportsbox-3d-golf-app-do-this-not-that"
                rel="noopener noreferrer"
              >
                Read More{" "}
              </a>
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-full h-fit gap-y-4">
            <a
              w-fit
              h-fit
              className=""
              href="learning/sportsbox-golf-six-degrees-of-freedom-primer"
              rel="noopener noreferrer"
            >
              <Image
                src={secondImg}
                alt="YouTube Video 2"
                style={{ width: "500px", height: "350px", objectFit: "cover" }}
              />
            </a>

            <p className={`text-xs text-white ${anton.className}`}>8/6/21</p>

            <p className={`text-2xl text-white ${anton.className}`}>
              <a
                href="learning/sportsbox-golf-six-degrees-of-freedom-primer"
                rel="noopener noreferrer"
              >
                SPORTSBOX GOLF: SIX DEGREES OF FREEDOM PRIMER{" "}
              </a>
            </p>

            <p className="text-m border-b-[1px] border-white inline-block">
              <a
                href="learning/sportsbox-golf-six-degrees-of-freedom-primer"
                rel="noopener noreferrer"
              >
                Read More{" "}
              </a>
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-full h-fit gap-y-4">
            <a
              w-fit
              h-fit
              className=""
              href="learning/sportsbox-golf-visuals"
              rel="noopener noreferrer"
            >
              <Image
                src={thirdImg}
                alt="YouTube Video 2"
                style={{ width: "500px", height: "350px", objectFit: "cover" }}
              />
            </a>

            <p className={`text-xs text-white ${anton.className}`}>8/6/21</p>

            <p className={`text-2xl text-white ${anton.className}`}>
              <a
                href="learning/sportsbox-golf-visuals"
                rel="noopener noreferrer"
              >
                SPORTSBOX 3DGOLF: VISUALS AND TRACKER DEFINITIONS{" "}
              </a>
            </p>

            <p className="text-m border-b-[1px] border-white inline-block">
              <a
                href="learning/sportsbox-golf-visuals"
                rel="noopener noreferrer"
              >
                Read More{" "}
              </a>
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-full h-fit gap-y-4">
            <a
              w-fit
              h-fit
              className=""
              href="learning/sportsbox-golf-app-key-swing-positions"
              rel="noopener noreferrer"
            >
              <Image
                src={fourthImg}
                alt="YouTube Video 2"
                style={{ width: "500px", height: "350px", objectFit: "cover" }}
              />
            </a>

            <p className={`text-xs text-white ${anton.className}`}>8/6/21</p>

            <p className={`text-2xl text-white ${anton.className}`}>
              <a
                href="learning/sportsbox-golf-app-key-swing-positions"
                rel="noopener noreferrer"
              >
                SPORTSBOX GOLF: KEY SWING POSITIONS{" "}
              </a>
            </p>

            <p className="text-m border-b-[1px] border-white inline-block">
              <a
                href="learning/sportsbox-golf-app-key-swing-positions"
                rel="noopener noreferrer"
              >
                Read More{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
