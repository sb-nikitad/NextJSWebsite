import { Anton } from "next/font/google";
import { Separator } from "@/components/Separator";
import { lazy } from "react";
import { HoverButton } from "../../components/HoverButton/HoverButton";
import Image from "next/image";

import firstImg from "../../../public/images/learning/1.png";
import secondImg from "../../../public/images/learning/2.png";
import thirdImg from "../../../public/images/learning/3.png";
import fourthImg from "../../../public/images/learning/4.png";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Learning() {
  return (
    <div className="p-32 w-full h-fit bg-sb-darkblue bg-center">
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
          />
        </div>
        <Separator height={230} />
        <div className={`font-bold text-5xl mb-8 ${anton.className}`}>
          TUTORIALS FOR HOW-TO-USE THE SPORTSBOX 3D GOLF APP
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <iframe
            width="500px"
            height="250px"
            src="https://www.youtube.com/embed/0y39gWWREMo?si=LzqQlmDvD882gueq"
            title="YouTube Video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="500px"
            height="250px"
            src="https://www.youtube.com/embed/ZobbJiGzBAM?si=EagNj18VCCM8cTRk"
            title="YouTube Video 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            width="500px"
            height="250px"
            src="https://www.youtube.com/embed/dVZlPkzWkog?si=0v_htoJiOhnEhCPh"
            title="YouTube Video 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            width="500px"
            height="250px"
            src="https://www.youtube.com/embed/lrxqc_eejnY?si=5ZUooisc78WI_iQH"
            title="YouTube Video 4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            width="500px"
            height="250px"
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
            width="700px"
            height="400px"
            src="https://www.youtube.com/embed/2vlbCyjLzLU?si=ETJYv3caWcNGnix4"
            title="YouTube Video 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <Separator height={230} />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <a
            className="flex justify-center"
            href="https://www.youtube.com/watch?v=ZobbJiGzBAM&si=EagNj18VCCM8cTRk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={firstImg}
              alt="YouTube Video 2"
              style={{ width: "95%", height: "70%", objectFit: "cover" }}
            />
          </a>

          <a
            className="flex justify-center"
            href="https://www.youtube.com/watch?v=dVZlPkzWkog&si=0v_htoJiOhnEhCPh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={secondImg}
              alt="YouTube Video 3"
              style={{ width: "95%", height: "80%", objectFit: "cover" }}
            />
          </a>

          <a
            className="flex justify-center"
            href="https://www.youtube.com/watch?v=lrxqc_eejnY&si=5ZUooisc78WI_iQH"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={thirdImg}
              alt="YouTube Video 4"
              style={{ width: "95%", height: "80%", objectFit: "cover" }}
            />
          </a>

          <a
            className="flex justify-center"
            href="https://www.youtube.com/watch?v=DJKOxQm38tM&si=9a2WFYLp_rBnrFGh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={fourthImg}
              alt="YouTube Video 5"
              style={{ width: "95%", height: "95%", objectFit: "cover" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
