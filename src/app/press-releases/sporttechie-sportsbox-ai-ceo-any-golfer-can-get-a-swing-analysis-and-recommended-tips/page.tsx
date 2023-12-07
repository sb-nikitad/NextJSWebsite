import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        SPORTTECHIE: SPORTSBOX AI CEO: ANY GOLFER CAN GET A SWING ANALYSIS AND
        RECOMMENDED TIPS
      </div>

      <div className={`${anton.className} py-10`}>Sep 7</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>Via SportTechie:</div>
        <div>On what sets this tech apart from others she had seen . . .</div>
        <div>
          The tech itself is—obviously I must be biased—legitimately incredible.
          It’s like magic. What it does is turn a 2D video into full 3D
          information that renders an avatar that you can see from multiple
          angles. And there are a lot of solutions out there that use
          pose-estimation tools; a lot of them are licensing something that
          somebody else built, or are using an open source system like a PoseNet
          or OpenPose. Those are 2D estimation tools that other people are using
          and we know exactly what the accuracy rate of those are, and it just
          wasn't good enough.
        </div>
        <div>
          So we built everything in-house. And instead of a 17 key-point model,
          which is typical of a 2D pose estimation tool, we have a 39 key-point
          model that allows us to track every joint and body segment in a really
          detailed way, which allows us to do the 3D rendering accurately.
        </div>
        <div>Read the full story here.</div>
      </div>
    </div>
  );
}
