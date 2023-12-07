import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        SPORTSBOX AI WELCOMES LEADBETTER GOLF ACADEMY AS AN OFFICIAL PARTNER
      </div>

      <div className={`${anton.className} py-10`}>Jan 18</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>
          BELLEVUE, Wash., January 18, 2022 -- Sportsbox AI, an AI-powered
          technology company that brings single-camera markerless 3D motion
          capture and AI analysis to mobile applications, announced today that
          Leadbetter Golf Academy - a global network of golf instruction
          academies and instructor education - has become an official partner of
          Sportsbox AI to begin offering “3D Golf” lessons with Sportsbox 3D
          Golf application to their students.{" "}
        </div>
        <div>
          “I have known David for a long time - since my playing days working on
          my game at his academy at ChampionsGate - and have the utmost respect
          for his expertise as an instructor and long-standing leadership in the
          industry.” said Jeehae Lee, CEO and Co-Founder of Sportsbox AI.{" "}
        </div>
        <div>
          “Further, Leadbetter Golf Academy has a globally renowned reputation
          for producing elite players and their ability to help golfers of all
          skill levels. So we are thrilled to partner with such an iconic brand
          in golf instruction globally to provide our “3D on the go” technology
          for nearly 40 LGA facilities and to work with their team to help
          golfers improve faster with accurate 3D motion data in every lesson.”
        </div>
        <div>
          “We are known as leaders in golf instruction and technology, and
          Sportsbox 3D Golf is a cutting-edge technology that provides a crucial
          piece that’s been missing in golf instruction - 3D motion data on the
          go.” said Ben Riches, CEO of Leadbetter Golf Academy.{" "}
        </div>
        <div>
          “We are proud to be at the forefront of the change, offering this
          unique technology to all our instructors and students globally.”
        </div>
        <div>
          Legendary instructor and Sportsbox investor David Leadbetter added,
          "There’s no doubt in my mind that 3D motion data is absolutely
          critical for understanding the golf swing for all levels of golfers --
          Sportsbox will provide millions of golfers and instructors the access
          to 3D golf data in the palm of their hands.”
        </div>
        <div>
          “Sportsbox is really an amazing tool that enables coaches, teachers
          and golfers to observe golf swings as never seen before. It makes our
          job so much easier to pinpoint problems, create solutions, quantify
          improvement and get golfers, no matter their level, on the road to
          improvement quicker than ever before. It’s going to be an absolutely
          essential tool in every instructor’s toolbox.”
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
          {" "}
          Sportsbox plans to work with a broad spectrum of elite instructors who
          believe in the power of 3D measurements -- agnostic to swing
          methodology. The AI Coach will be built using the data collected on
          what creates optimal outcomes for different golfers based on their
          skill level and biomechanics.
        </div>
        <div>
          To learn more, visit sportsbox.ai, and follow us on Instagram,
          Twitter, Facebook, LinkedIn, and YouTube.
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
