import Image from "next/image";
import imagePath from "../../../../public/images/what-is-1.png"
import { ABOUT_WHATIS__URL } from "../../URL's";


export function WhatIs() {
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div className="text-5xl font-bold text-white border-b-4 border-blue-500 inline p-2">WHAT IS SPORTSBOX AI?</div>
        <div className="text-white w-[45%]">
          Founded in 2020, Sportsbox AI is an AI-powered technology company that develops AI Coach mobile applications
          in sports and fitness, using patent-pending 3D Motion Analysis and Kinematic AI technology.
        </div>
      </div>

      <div className="flex justify-between items-center mb-10">
        <div className="text-white w-[45%]">
          Through our unique technology that can capture, measure and analyze complex athletic motions in 3D, combined
          with the knowledge and experience of the world’s leading instructors in each sport, Sportsbox AI provides
          real-time corrective feedback to help users achieve their goals in sports and fitness — all in the palm of
          your hand using only your mobile phone and at a fraction of the cost of existing 3D Motion Capture Systems.
        </div>
        <img src= {ABOUT_WHATIS__URL} 
        alt="Image Description" className="w-[45%]" />
      </div>
    </div>
  );
}
