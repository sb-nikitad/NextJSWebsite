import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        LPGA TOUR PRO MARINA ALEX BECOMES THE NEWEST SPORTSBOX AI INVESTOR
      </div>

      <div className={`${anton.className} py-10`}>Nov 17</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>
          BELLEVUE, Wash., November 17, 2021 -- Sportsbox AI, an AI-powered
          technology company that brings 3D AI Coaching to mobile applications,
          announced today that professional golfer Marina Alex has invested in
          the company. Marina joins fellow LPGA pro Michelle Wie as a member of
          the Sportsbox 3D Golf’s Product Advisory Group.
        </div>
        <div>
          “We’re excited to have Marina as an investor and advisor -- her input
          will be a huge asset as she is one of the sharpest minds on the LPGA,”
          said Jeehae Lee, CEO and Co-Founder of Sportsbox AI. “She’s worked
          hard over the years to grow the game and be an advocate for women in
          golf.”
        </div>
        <div>
          Following a successful career playing college golf at Vanderbilt
          University, Marina turned professional in 2012 and has played
          full-time on the LPGA Tour since 2014. She won her first LPGA event at
          the 2018 Cambria Portland Classic and she was a member of the 2019
          U.S. Solheim Cup with a 1-1-2 record.
        </div>
        <div>
          “I’ve been friends with Jeehae for a long time and when she first
          showed me the app, I was blown away and knew I wanted to be involved
          in some capacity,” said Marina. “I believe in Jeehae and Sportsbox’s
          technology. This is the future of golf instruction and analysis, not
          to mention it can be applied to countless other sports and activities
          -- the possibilities are endless.
        </div>
        <div>
          “The app also has the potential to be as simple or as complex as one
          needs, so it can be customized to each individual, which makes it
          invaluable to both the coach and student.”
        </div>
        <div>
          With Sportsbox Golf, coaches and golfers have the ability to take a
          single 2D video from a mobile phone -- with no markers and sensors --
          and turn it into a full 3D avatar that can be viewed from six
          different angles, as well as provide 3D biomechanical measurements in
          inches, degrees, linear and angular velocities. The app enables
          golfers to:
        </div>
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
        <div>
          Sportsbox plans to work with a broad spectrum of elite instructors who
          believe in the power of 3D measurements -- agnostic to swing
          methodology. The AI Coach will be built using the data collected on
          what creates optimal outcomes for different golfers based on their
          skill level and biomechanics.
        </div>
        <div>
          To learn more, visit sportsbox.ai, and follow us on Instagram,
          Twitter, Facebook, LinkedIn and YouTube.
        </div>
        <div>###</div>
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
