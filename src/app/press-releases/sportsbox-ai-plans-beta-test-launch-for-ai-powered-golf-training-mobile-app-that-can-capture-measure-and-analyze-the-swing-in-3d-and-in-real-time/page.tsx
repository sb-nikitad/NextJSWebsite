import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        SPORTSBOX AI PLANS BETA TEST LAUNCH FOR AI-POWERED GOLF TRAINING MOBILE
        APP THAT CAN CAPTURE, MEASURE AND ANALYZE THE SWING IN 3D AND IN REAL
        TIME
      </div>

      <div className={`${anton.className} py-10`}>Mar 11</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>
          Bellevue, Washington -- March 11, 2021 -- Sportsbox AI, an AI-powered
          technology company that brings 3D AI Coaching to mobile applications,
          announced its plans in April to beta test the company’s proprietary
          technology that can capture, measure and analyze the golf swing in 3D
          and in real time, using a single camera from a mobile phone.
        </div>
        <div>
          Sportsbox Golf will empower instructors, professionals and amateurs to
          quantify their golf swings in 3D, while also providing instant
          biomechanical and comprehensive patent-pending Kinematic AI feedback
          and shot analysis based on biomechanical measurements personalized to
          each golfer -- without the constraints of systems using markers and/or
          sensors or require access to a five- or- six-figure swing studio.
        </div>
        <div>
          “We’re passionate about making these technologies accessible to the
          masses and facilitating the ability to learn and teach golf more
          effectively and accurately,” said Jeehae Lee, Founder and CEO of
          Sportsbox AI.
        </div>
        <div>
          “For the first time, every Body can quantify their game, stop guessing
          and start measuring. We look forward to closing the gap between what I
          like to call, ‘feel and real,’ and actually ‘see’ what we couldn’t
          before in 2D -- all in your back pocket.”
        </div>
        <div>Sportsbox Golf will include the following features:</div>

        <ul className="list-disc pl-[40px]">
          <li>
            2D to 3D video capture: Turning a 2D Video into a 3D Avatar from a
            single camera on a mobile phone
          </li>
          <li>
            Biomechanical Measurements: Hundreds of highly accurate kinematic
            parameters and sequences to analyze the every swing and outcome
          </li>
          <li>
            3D AI Coach: Real-time and corrective feedback based on
            biomechanical measurements and personalized to each golfer
          </li>
        </ul>
        <div>
          The beta testers will Include a select group of elite instructors and
          golfers.
        </div>
        <div>
          To learn more, visit sportsbox.ai, and follow us on Instagram,
          Twitter, Facebook, LinkedIn and YouTube.
        </div>
        <div>###</div>
        <div>About AITHINKTANK LLC</div>
        <div>
          AITHINKTANK LLC (AI Thinktank) is a software technology incubator
          developing state-of-the-art artificial intelligence platforms to
          accelerate and simplify the development of AI applications. The team
          is composed of seasoned professionals with decades of experience in
          delivering professional quality software, including 15 years in
          artificial intelligence.
        </div>
        <div>
          AI Thinktank works with entrepreneurs to incubate companies that will
          incorporate these AI models and algorithms into innovative and
          transformative applications for both the consumer and the enterprise.
          The founders will also provide these companies with access to
          experienced hardware and software architects, as well as AI scientists
          who are leaders in their field.
        </div>
        <div>About Sportsbox.ai, Inc.</div>
        <div>
          Founded in 2020, Sportsbox.ai, Inc. is an AI-powered technology
          company that develops AI Coach mobile applications in sports and
          fitness using patent-pending 3D Motion Capture and Kinematic AI
          technology. Through our unique technology that can capture, measure
          and analyze complex athletic motions in 3D, combined with the
          knowledge and experience of the world’s leading instructors in each
          sport, Sportsbox AI brings real-time corrective feedback to help
          athletes achieve their goals in sports and fitness.
        </div>
        <div>***</div>
        <div>Media Contact:</div>
        <div>Stephanie Wei</div>
        <div>VP of Comms & Co-Founder</div>
        <div>stephaniew@sportsbox.ai</div>
        <div>+1 917.617.7183</div>
      </div>
    </div>
  );
}
