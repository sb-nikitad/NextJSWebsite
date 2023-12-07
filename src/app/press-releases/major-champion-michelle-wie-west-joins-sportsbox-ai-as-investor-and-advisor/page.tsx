import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        MAJOR CHAMPION MICHELLE WIE WEST JOINS SPORTSBOX AI AS INVESTOR AND
        ADVISOR
      </div>

      <div className={`${anton.className} py-10`}>Oct 22</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>
          BELLEVUE, Wash. -- Sportsbox AI, an AI-powered technology company that
          brings 3D AI Coaching to mobile applications, announced today that
          professional golfer and 2014 U.S. Women’s Open champion Michelle Wie
          West has invested in the company. Michelle is also the first touring
          professional to officially join the Sportsbox 3D Golf’s Product
          Advisory Group.
        </div>
        <div>
          “Michelle is a global icon in the game of golf and has always been a
          thought leader in the space,” said Jeehae Lee, CEO and Co-Founder of
          Sportsbox AI. “To have her endorsement as a player and investor is a
          huge achievement and win for our mission as a company to help every
          golfer improve faster and perform their best with accurate 3D motion
          analysis and personalized coaching.
        </div>
        <div>
          “We’re excited to have Michelle as an advisor as we’re building out a
          completely revolutionary product that will democratize game
          improvement and provide an effective practice and training tool
          essential for all levels of golfers who want to improve.”
        </div>
        <div>
          Michelle began making international headlines when she was 10 years
          old and became the youngest player to qualify for a USGA championship.
          Since then, she has continued to break records and act as a role model
          for athletes around the world. After turning pro at 15, Michelle has
          won five LPGA titles, including two while she was enrolled as a
          full-time student at Stanford University.
        </div>
        <div>
          More recently, Michelle has contributed as an analyst and on-course
          commentator for Golf Channel and CBS, including the 2019 Masters when
          she became the first woman of color to work the broadcast at the
          storied Augusta National. In 2020, Michelle gave birth to her daughter
          Makenna Kamalei Yoona West and returned to competitive golf earlier
          this year. She launched the Hoodie Project with the LPGA to promote
          and help diversify women’s golf and getting more girls of color not
          only to start playing, but to stay in the game, as well.
        </div>
        <div>
          “As a competitor, I’m really looking forward to being able to use data
          to drive my practice and make measurable improvements,” said Wie West.
          “I love that I can use the Sportsbox 3D Golf app while I’m working on
          my game on the practice tee, as well as on the golf course -- the
          ability to compare my numbers in different environments and settings
          is a gamechanger.
        </div>
        <div>
          “What’s more, Sportsbox is lowering the barrier for entry for both
          coaches and golfers to have access to 3D data. Facilities used to have
          to spend tens of thousands of dollars to install a 3D Motion Capture
          system, and students would have to pay hundreds of dollars for a
          specialized lesson. Now, with Sportsbox, we’re democratizing the
          process and cost, so we can provide more athletes with this type of
          experience and information.”
        </div>
        <div>
          Michelle joins her longtime coach David Leadbetter as an investor and
          advisor.
        </div>
        <div>
          “I’ve spoken at length with David and he really believes Sportsbox is
          going to revolutionize golf instruction and make golfers better and
          more efficient. With David being my coach all my life, that means a
          lot and speaks volumes about the potential of the product and it’s a
          project I’m excited to put my name on.”
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
