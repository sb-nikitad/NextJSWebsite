import Image from "next/image";
import imagePath from "../../../../public/images/what-is-1.png";
import "../../../app/globals.css";
import { ABOUT_WHATIS__URL } from "../../URL's";

import { Lato, Anton } from "next/font/google";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });

export function WhatIs() {
  return (
    //   <div className="mx-32">
    //     <div className="flex justify-between items-center mb-28 gap-x-16">
    //       <div className="text-4xl font-bold text-white border-b-4 border-blue-500 inline anton-fon w-[55%]">WHAT IS SPORTSBOX AI?</div>
    //       <div className="text-white text-lg w-[50%]">
    //         Founded in 2020, Sportsbox AI is an AI-powered technology company that develops AI Coach mobile applications
    //         in sports and fitness, using patent-pending 3D Motion Analysis and Kinematic AI technology.
    //       </div>
    //     </div>

    //     <div className="flex justify-between items-center gap-x-20">
    //       <div className="text-white text-lg w-[70%]">
    //         Through our unique technology that can capture, measure and analyze complex athletic motions in 3D, combined
    //         with the knowledge and experience of the world’s leading instructors in each sport, Sportsbox AI provides
    //         real-time corrective feedback to help users achieve their goals in sports and fitness — all in the palm of
    //         your hand using only your mobile phone and at a fraction of the cost of existing 3D Motion Capture Systems.
    //       </div>
    //       <img src={ABOUT_WHATIS__URL} alt="Image Description" className="w-[50%] rounded-[30px]" />
    //     </div>
    //   </div>
    // );
    <div className="flex flex-col gap-y-20 justify-center">
      <div className="flex flex-row gap-x-8 items-center">
        <div className="text-4xl font-bold text-white anton-font w-1/2 px-12">
          <span className="border-b-4 border-blue-500 inline-block p-2">
            WHAT IS SPORTSBOX AI?
          </span>
        </div>
        <div className="text-white text-lg w-[40%]">
          Founded in 2020, Sportsbox AI is an AI-powered technology company that
          develops AI Coach mobile applications in sports and fitness, using
          patent-pending 3D Motion Analysis and Kinematic AI technology.
        </div>
      </div>

      <div className="flex flex-row items-center gap-x-8">
        <div className="text-white text-lg w-[50%] px-12">
          Through our unique technology that can capture, measure and analyze
          complex athletic motions in 3D, combined with the knowledge and
          experience of the world’s leading instructors in each sport, Sportsbox
          AI provides real-time corrective feedback to help users achieve their
          goals in sports and fitness — all in the palm of your hand using only
          your mobile phone and at a fraction of the cost of existing 3D Motion
          Capture Systems.
        </div>
        <div className="w-[45%] p-8">
          <img
            src={ABOUT_WHATIS__URL}
            alt="Image Description"
            className="rounded-[30px]"
          />
        </div>
      </div>
    </div>
  );
}
