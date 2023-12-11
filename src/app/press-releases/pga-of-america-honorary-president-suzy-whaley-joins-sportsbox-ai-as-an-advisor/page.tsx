import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        PGA OF AMERICA HONORARY PRESIDENT SUZY WHALEY JOINS SPORTSBOX AI AS AN
        ADVISOR
      </div>

      <div className={`${anton.className} py-10`}>Mar 17</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>
          BELLEVUE, Wash. -- Sportsbox AI, an AI-powered technology company that
          brings single-camera markerless 3D motion capture and AI analysis to
          mobile applications, announced today that PGA of America Honorary
          President and PGA Master Professional Suzy Whaley has signed on as an
          advisor.
        </div>
        <div>
          “Suzy has been a role model for me personally for a long time and to
          be able to work with her on bringing Sportsbox to the golf world is a
          dream,” said Jeehae Lee, Founder and CEO. “She is one of the most
          passionate people that I know and her ability to lead others and
          create change is truly extraordinary.
        </div>
        <div>
          “Suzy will be influential in not only speaking for the broader group
          of coaches and golf professionals we want to serve, given her vast
          experience as a Top 100 coach, but also in how we go to market.
        </div>
        <div>
          The first woman elected to serve as an Officer of the PGA of America,
          Whaley is the PGA Director of Instruction for the Country Club at
          Mirasol in Palm Beach Gardens, Florida. After serving two years as PGA
          Secretary, and two years as Vice President, Whaley was elected as the
          PGA of America's first female President at the 2018 PGA Annual
          Meeting.
        </div>
        <div>
          “I joined Sportsbox because of the leadership team and the product,”
          said Whaley. “It's exciting to support a female-led sports technology
          company, and I understand as the Honorary President of the PGA of
          America how crucial female representation is within golf.”
        </div>
        <div>
          Recognized as one of GOLF’s “Top 100 Teachers in America” and with the
          Metropolitan Golf Association’s Distinguished Service Award in 2019,
          Whaley's resume includes numerous other teaching awards: Golf Digest
          Top 50 Instructor, LPGA Top 50 Instructor, two-time Connecticut PGA
          Teacher of the Year, 10-time Golf Digest State Teacher of the Year and
          U.S. Kids Golf Master Kids Teacher. She is a five-time PGA Jr. League
          Championship finals Coach and has instructed more than 300 children to
          collegiate golf.
        </div>
        <div>
          “As a coach for over 30 years, the Sportsbox AI app allows me to be a
          better coach and affords my students incredible technology in the palm
          of my hand, said Whaley. “This app delivers information that isn't
          possible on a two-dimensional platform.
        </div>
        <div>
          “To view my students in 3D has given me far better tools to assess
          needed changes and deliver faster results and improvement. Every PGA
          coach and LPGA coach can use this platform on their phones to get the
          same results with their students. Sportsbox AI is pushing the
          boundaries of traditional technology, and I am excited to help educate
          the industry on its possibilities for all coaches and consumers.”
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
          Twitter, Facebook and LinkedIn.
        </div>
        <div>###</div>
        <div>About Sportsbox.ai, Inc. </div>
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
        <div>—</div>
        <div>Media Contact: </div>
        <div>Stephanie Wei </div>
        <div>+1 917.617.7183 </div>
        <div>stephaniew@sportsbox.ai</div>
      </div>
    </div>
  );
}
