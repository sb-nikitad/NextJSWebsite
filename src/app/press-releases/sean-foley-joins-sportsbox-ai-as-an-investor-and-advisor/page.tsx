import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        SEAN FOLEY JOINS SPORTSBOX AI AS AN INVESTOR AND ADVISOR
      </div>

      <div className={`${anton.className} py-10`}>Jul 30</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>
          Sportsbox AI, an AI-powered technology company that brings 3D AI
          Coaching to mobile applications, is pleased to announce that
          world-renowned golf instructor Sean Foley has invested. Foley joins
          other Golf Magazine Top 100 coaches, including Mike Adams and Terry
          Rowles, as advisors to Sportsbox Golf's Product Advisory Group.
        </div>
        <div>
          "We are thrilled to have Sean as an investor and an advisor," said
          Jeehae Lee, Co-Founder and CEO. "As a leader in the golf world and one
          of the greatest coaches in the game, Sean has seen the entire spectrum
          of golf improvement tools and coaching technologies.
        </div>
        <div>
          "It means the world to us that he wanted to not only support but
          invest in our product and team. His vision for golf instruction and
          learning using 3D data and visualization tools aligns so well with
          ours and we will build a better product for coaches and students with
          his guidance"
        </div>
        <div>
          Foley has coached the likes of 2013 U.S. Open Champion and Olympic
          Gold Medalist Justin Rose, 2016 Masters champion Danny Willett,
          three-time PGA Tour champion Cameron Champ -- who captured last week's
          3M Championship -- and worked with Tiger Woods from 2010 to 2014. He
          has been voted as the top golf teacher in the world by players on the
          PGA Tour.
        </div>
        <div>
          Foley also teaches former Women's World No. 1 and current No. 10
          player Lydia Ko.
        </div>
        <div>
          "I've seen it all when it comes to coaching tools and 'AI Golf'
          applications," said Foley. "Sportsbox’s technology is years ahead of
          anything I've seen. With advanced 3D technology we will be able to
          transform a single video into a 3D avatar, capturing over ten thousand
          data points for every swing, all with just a mobile phone. The
          platform will revolutionize coaching in golf and other sports.
        </div>
        <div>
          "In familiarizing myself with the technology, the management team at
          Sportsbox and the vast experience they bring, I knew immediately that
          taking part in its growth was an incredible opportunity.”
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
          Drills and Guided Personalized Practice Plan to Improve Your Outcome
          Goal(s): Guided practice and training roadmap tailored to your needs
          and goals
        </div>
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
