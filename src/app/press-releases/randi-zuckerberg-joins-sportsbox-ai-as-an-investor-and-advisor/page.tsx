import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        RANDI ZUCKERBERG SIGNS ON WITH SPORTSBOX AI AS AN INVESTOR AND ADVISOR
      </div>

      <div className={`${anton.className} py-10`}>Aug 11</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>
          Sportsbox AI, an AI-powered technology company that brings 3D AI
          Coaching to mobile applications, is delighted to announce that Randi
          Zuckerberg, an entrepreneur, investor, bestselling author and
          award-winning producer, has invested. She will also be involved as an
          advisor.
        </div>
        <div>
          “As an entrepreneur, investor, and advisor to numerous startups, Randi
          has an incredible vantage point and insight into building successful
          businesses," said CEO and Founder Jeehae Lee. "We are thrilled to have
          Randi as an investor and advisor to help us build Sportsbox into a
          global leader in sports performance technology.”
        </div>
        <div>
          Zuckerberg has dubbed herself "a professional mom” to entrepreneurs
          and takes great pleasure in working closely with startups and
          founders. She currently works with numerous early and mid-stage
          companies as an investor and advisor and is delighted about adding
          Sportsbox AI to her portfolio.
        </div>
        <div>
          “Sportsbox AI brings together many of my passions - technology, media,
          female entrepreneurs, and golf," said Zuckerberg. "As a new golfer who
          is obsessed with bettering my game, I know how painful it is to try to
          improve technique. I love that Sportsbox helps me understand what I
          need to change in my swing in degrees and inches and leaves nothing to
          ambiguous instruction.
        </div>
        <div>
          "This technology is going to be a game-changer for golf and many other
          sports and I am proud to support Jeehae and her team in their journey
          as an investor.”
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
            Learns Each User’s Ideal Motion: Learns the kinematic parameters and
            sequences that will result in the best outcome for each user
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
