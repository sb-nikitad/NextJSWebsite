import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });
export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        SPORTSBOX AI CLOSES SEED ROUND LED BY EP GOLF VENTURES, AN INVESTMENT
        PARTNERSHIP BETWEEN ELYSIAN PARK VENTURES AND THE PGA OF AMERICA
      </div>
      <div className={`${anton.className} py-10`}>Aug 4</div>
      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>
          AI Powered Technology Transforms 2D Mobile Phone Video to Real-Time 3D
          Analysis and Breakdowns for Athletes and Coaches
        </div>
        <div>
          Bellevue, WA (August 4, 2022) – Sportsbox AI, an AI-powered
          single-camera 3D motion capture technology company that brings
          real-time corrective feedback to help athletes achieve their goals in
          sports and fitness, today announced it has closed its first seed
          round, bringing the company’s total amount raised to more than $5.5
          million to date.
        </div>
        <div>
          The round was led by EP Golf Ventures, a new investment partnership
          created by the PGA of America and Elysian Park Ventures, the private
          investment arm affiliated with the Los Angeles Dodgers ownership
          group; with participation from David Blitzer and Randi Zuckerberg;
          LPGA Tour players Michelle Wie West, Marina Alex, and Mel Reid;
          leading golf coaches Sean Foley, David Leadbetter and Erika Larkin;
          and broadcasters Amanda Balionis and Kira K. Dixon.
        </div>
        <div>
          Sportsbox AI is an AI-powered technology company that develops
          coaching and training mobile applications in sports and fitness, using
          patent-pending single-camera 3D Motion Analysis and Kinematic AI
          technology. The company’s first product, Sportsbox 3DGolf, enables
          coaches and golfers to access comprehensive 3D motion data and
          analysis at an unparalleled degree of accuracy previously only
          available through complex and costly motion capture systems with wires
          and sensors. With Sportsbox, coaches and athletes can take a single 2D
          video from a mobile phone – with no markers or sensors – and turn it
          into a 3D avatar that can be viewed from six different angles to
          provide a full analysis of the swing, as well as track improvement
          using 3D biomechanical measurements in inches, degrees, linear and
          angular velocities.
        </div>
        <div>
          “We are excited to have the support of EP Golf Ventures and our
          incredible investors,” said Jeehae Lee, Sportsbox AI CEO & Founder.
          “This new round of funding enables us to accelerate our growth to
          transform the game of golf and sports overall with accessible,
          accurate 3D technology. We want to make it possible for every coach
          and athlete to easily unlock real-time data and visualization tools
          using our transformative technology that takes 2D video and transforms
          it into a holistic 3D analysis straight from a mobile phone.”
        </div>
        <div>
          Sportsbox 3DGolf’s technology offers coaches and players the ability
          to access:
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
            sports - in full 3
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
          “Our mission at EP Golf Ventures is to invest in companies and teams
          that are going to have a profound impact on the golf industry and
          support the PGA Professional,” said Jay Adya, EP Golf Ventures
          Managing Partner. We are pleased to have Sportsbox AI as one of the
          first investments of our new portfolio and believe that the company
          will not just improve the way golf is coached and practiced, but can
          do the same for other sports to give athletes and coaches the
          actionable, detailed analysis they need to improve their game at all
          levels.”
        </div>
        <div>
          Sportsbox was founded in 2020 by Jeehae Lee, a former LPGA
          professional and former Topgolf strategy leader; Sam Menaker, former
          SVP of Engineering at VoiceBox Technologies; and Stephanie Wei, a
          former golf broadcaster, writer and blogger. Rounding out the
          executive team is renowned 3D Biomechanist Dr. Phil Cheetham, an
          innovator in 3D Motion Analysis and Sports Biomechanics for over 30
          years, as its Chief Science Officer. The company has entered into
          partnerships with Five Iron Golf and Leadbetter Academy; and counts
          golf and coaching legends Sean Foley, Suzy Whaley, Mike Adams and
          Terry Rowles on its advisory board.
        </div>
        <div>###</div>
        <div>About Sportsbox.ai, Inc.</div>
        <div>
          Founded in 2020, Sportsbox.ai, Inc. is an AI-powered technology
          company that develops coaching and training mobile applications in
          sports and fitness using patent-pending 3D Motion Capture and
          Kinematic AI technology. Through our unique technology that can
          capture, measure and analyze complex athletic motions in 3D, combined
          with the knowledge and experience of the world’s leading instructors
          in each sport, Sportsbox AI brings real-time corrective feedback to
          help athletes achieve their goals in sports and fitness. For more
          information, visit sportsbox.ai.
        </div>
        <div>About EP Golf Ventures</div>
        <div>
          EP Golf Ventures is a new investment entity created by Elysian Park
          Ventures in partnership with the PGA of America. Elysian Park Ventures
          is a private investment firm created by the ownership group of the Los
          Angeles Dodgers that partners with exceptional entrepreneurs operating
          at the intersection of sports, technology, and entertainment. Based in
          Los Angeles, New York, and London, Elysian Park invests across stages
          from seed to growth, and also provides entrepreneurs with strategic,
          operational, and management resources through the Global Sports
          Venture Studio, Robin, and Breakaway Data, among others. Learn more at
          elysianpark.ventures. For more information about the PGA of America,
          visit PGA.com and follow us on Twitter, Instagram and Facebook.
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
