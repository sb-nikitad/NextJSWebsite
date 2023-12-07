import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <>
      <div className="bg-white mt-[130px] text-black lg:px-[300px]"></div>
      <div className={`${anton.className} pt-10 text-6xl`}></div>

      <div className={`${anton.className} py-10`}></div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg"></div>

      <ul className="list-disc pl-[40px]">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div>###</div>
      <div>About Sportsbox.ai, Inc.</div>
      <div>
        Founded in 2020, Sportsbox.ai, Inc. is an AI-powered technology company
        that develops AI Coach mobile applications in sports and fitness using
        patent-pending 3D Motion Capture and Kinematic AI technology. Through
        our unique technology that can capture, measure and analyze complex
        athletic motions in 3D, combined with the knowledge and experience of
        the world’s leading instructors in each sport, Sportsbox AI brings
        real-time corrective feedback to help athletes achieve their goals in
        sports and fitness.
      </div>
      <div>***</div>
      <div>Media Contact:</div>
      <div>Stephanie Wei</div>
      <div>VP of Comms & Co-Founder</div>
      <div>stephaniew@sportsbox.ai</div>
      <div>+1 917.617.7183</div>

      <ul className="list-disc pl-[40px]">
        <li>
          3D Motion Capture: Use of a mobile phone camera to create a detailed
          3D model of an athletic motion from a single 2D video -- without any
          markers using over 30 key points
        </li>
        <li>
          Highly Accurate 3D Kinematic Measurements: Kinematic parameters and
          sequences relevant to measuring and analyzing the body movement in
          sports - in full 3D
        </li>
        <li>
          Seamless Coaching Live and Remote: 3D data and visualization tools
          whether you’re with the student or remote; communication, CRM, and
          payment tools, as well as video editing tools for visually impactful
          lesson notes integrated for an all-in-one coaching platform
        </li>
        <li>
          Drills and Guided Personalized Practice Plan to Improve Your Outcome
          Goal(s): Guided practice and training roadmap tailored to your needs
          and goals
        </li>
      </ul>
    </>
  );
}
