import Image from "next/image";
import { ABOUT_WHATIS__URL } from "../URL's";

import { Lato, Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export function MainWhatIs() {
  return (
    <div className="flex flex-col gap-y-16 items-center px-10 lg:px-[250px]">
      <div className="flex flex-col gap-x-12 gap-y-8 items-center text-center">
        <h2
          className={`font-bold text-white text-4xl md:text-5xl lg:text-5xl ${anton.className} w-full md:w-1/2`}
        >
          WHAT IS SPORTSBOX AI?
        </h2>
        <p className="text-white text-base md:text-lg lg:text-xl w-full md:w-1/2">
          Founded in 2020, Sportsbox AI is an AI-powered technology company that
          develops AI Coach mobile applications in sports and fitness, using
          patent-pending 3D Motion Analysis and Kinematic AI technology.
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-x-0 md:gap-x-12 gap-y-8 md:gap-y-0">
        <p className="text-white text-base md:text-lg lg:text-xl w-full md:w-[55%]">
          Through our unique technology that can capture, measure, and analyze
          complex athletic motions in 3D, combined with the knowledge and
          experience of the world’s leading instructors in each sport, Sportsbox
          AI provides real-time corrective feedback to help users achieve their
          goals in sports and fitness — all in the palm of your hand using only
          your mobile phone and at a fraction of the cost of existing 3D Motion
          Capture Systems.
        </p>
        <div className="lg:w-[45%]">
          <Image
            src={ABOUT_WHATIS__URL}
            alt="Image Description"
            className="rounded-[30px]"
            layout="responsive"
            width={400}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
