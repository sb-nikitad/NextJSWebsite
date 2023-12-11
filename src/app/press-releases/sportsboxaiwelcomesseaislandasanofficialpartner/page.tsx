import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        SPORTSBOX AI WELCOMES SEA ISLAND GOLF PERFORMANCE CENTER AS AN OFFICIAL
        PARTNER
      </div>

      <div className={`${anton.className} py-10`}>Jan 19</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>
          BELLEVUE, Wash., January 19, 2022 -- Sportsbox AI, an AI-powered
          technology company that brings single-camera markerless 3D motion
          capture and AI analysis to mobile applications, announced today that
          Sea Island Golf Performance Center - a world-class golf instruction
          and training facility - has become an official partner of Sportsbox AI
          to begin offering “3D Golf” lessons with Sportsbox 3D Golf application
          to their members and customers.
        </div>
        <div>
          “Sea Island has been an iconic brand in the golf world, a destination
          resort with world-class golf courses and instruction facilities. Since
          my very first visit as a member of the Yale Women’s Golf Team during
          our Spring training trip, I’ve always admired the world-class caliber
          of instructors and their leadership when it comes to incorporating
          cutting-edge technology that could help everyone who comes through Sea
          Island advance their game.” said Jeehae Lee, CEO and Co-Founder of
          Sportsbox AI.
        </div>
        <div>
          “We are extremely proud to partner with Sea Island GPC to provide our
          “3D on the go” technology for their elite instructors, and we’re
          excited to work with their team to help golfers improve faster with
          accurate 3D motion data in every lesson.”
        </div>
        <div>
          Sea Island Golf Performance Center is a state-of-the-art 17,000 square
          foot facility with a team of world-renowned golf instructors, experts
          in every area of the game including putting and fitness. With two of
          Golf Digest’s “50 Best Teachers in America,” one of Golf Magazine’s
          “Top 100 Instructors in America,” two Golf Digest “Best Young Teachers
          in America,” three Golf Digest‘s “Top 100 Fitters in America,” and one
          of Golf Digest‘s Best International Teachers, the Golf Performance
          Center boasts more top teachers than any other single golf
          instructional center in the country. Students of all levels - from
          beginners to PGA TOUR and LPGA players - can access industry-leading
          technology, oceanfront hitting and club fitting bays, and a highly
          advanced putting studio.
        </div>
        <div>
          “We always strive to offer the best technology in the game to all of
          our students - whether they are major champions or someone just
          starting to learn the game, and Sportsbox 3D Golf is a one-of-a-kind
          technology that provides incredibly valuable data needed for golf
          instruction - 3D motion data on the go.” said Craig Allen, Director of
          Sea Island Golf Performance Center. “It’s truly amazing that within a
          few seconds, a mobile phone can generate a complete 3D model of the
          golf swing motion and tell us 3D motion data that only a multi-camera
          3D motion capture studio requiring markers and sensors could capture
          previously.”
        </div>
        <div>
          “We believe that this is going to be a game-changer for golf
          instructors and players worldwide and are proud to be at the forefront
          of the change, offering this unique technology to all our students.”
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
          Twitter, Facebook, LinkedIn, and YouTube.
        </div>
        <div>###</div>
        <div>About Sea Island</div>
        <div>
          Since 1928, Sea Island has been known as an exceptional destination
          appealing to those who appreciate gracious service and heartfelt
          hospitality. With four Forbes Five-Star experiences -- The Cloister at
          Sea Island, The Lodge at Sea Island, The Spa at Sea Island, and the
          Georgian Room restaurant – Sea Island entices families, outdoor
          enthusiasts, and those simply wanting to refresh. It is the only
          resort in the world to have received four Forbes Five-Star awards for
          13 consecutive years and the only U.S. resort to host a G-8 Summit.
        </div>
        <div>
          Located on the southeastern coast of Georgia, Sea Island features five
          miles of private beach, a Beach Club, tennis center, Yacht Club,
          Shooting School, and children’s programs, as well as three
          championship golf courses, including Seaside and Plantation, home of
          the PGA TOUR’s RSM Classic and a 17,000-square-foot, state-of-the-art
          Golf Performance Center.
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
        <div>Media Contact:</div>
        <div>Stephanie Wei</div>
        <div>+1 917.617.7183</div>
        <div>stephaniew@sportsbox.ai</div>
      </div>
    </div>
  );
}
