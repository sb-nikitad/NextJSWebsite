import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        FIVE IRON GOLF ENTERS THE WORLD OF 3D AI SWING ANALYSIS
      </div>

      <div className={`${anton.className} py-10`}>Jun 27</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>
          The company's partnership with SportsboxAI will bring 3D motion
          capture and AI analysis to all 3 NYC locations
        </div>
        <div>
          NEW YORK, June 27, 2022 /PRNewswire/ -- Five Iron Golf, the nation's
          leading indoor golf and entertainment experience, has partnered with
          SportsboxAi, the only technology in golf providing comprehensive 3D
          motion data and analysis using a single camera. Sportsbox has
          exclusively invited a select group of golf instructors to implement
          the technology into their instruction. With Sportsbox 3DGolf, Five
          Iron Golf's instructors will have the ability to take a single 2D
          video from a mobile phone — without markers and sensors — and turn
          their students into a full 3D avatar that can be viewed from six
          different angles. The cutting-edge technology provides 3D
          biomechanical measurements in inches, degrees, linear and angular
          velocities.
        </div>
        <div>
          Founded in Manhattan in 2017, Five Iron Golf has since expanded to
          thirteen total locations across eight cities from coast to coast,
          bringing a reputation for turning traditional golf on its head and
          energizing communities through accessible and enjoyable golf
          experiences.
        </div>
        <div>
          "Providing urban golfers with the accessibility to leading golf
          instruction is core to what Five Iron does, and this partnership with
          Sportsbox AI will enable our coaches to provide our customers with an
          even more personalized experience to help improve their game," says
          CEO and Co-Founder Jared Solomon.
        </div>
        <div>
          Five Iron Golf locations include custom-built golf simulators,
          featuring multiple high-speed cameras to capture every angle of the
          golf swing, and, in addition, offers complimentary top-of-the-line
          equipment, custom club fitting at The Fitting Lab — a Golf Digest Top
          100 Clubfitter — widescreen TVs, leisure games, a full-service
          restaurant and bar, league play, private lessons, clinics and social
          events.
        </div>
        <div>
          "Five Iron has quickly become a leader in providing urban golfers with
          state-of-the art golf instruction and entertainment," said Jeehae Lee,
          CEO and Co-Founder of Sportsbox AI. "We're excited they're adding
          Sportsbox 3DGolf to their offerings — beginning in their NYC locations
          — to optimize lessons and practices for their clients."
        </div>
        <div>
          Sportsbox is currently the only technology in golf that provides
          comprehensive markerless 3D motion data and analysis using a single
          camera — a first-of-its-kind coaching application. 3D Motion Analysis
          provides real-time understanding of the golf swing for coaches with
          quantifiable and actionable data that helps golfers get better more
          efficiently.
        </div>
        <div>
          "This partnership drives home Five Iron's dedication to growing the
          game of golf by providing our guests with state-of-the-art technology
          and dedicated onsite golf professionals offering quality, effective
          and holistic instruction, in an inclusive and inviting environment,"
          says Director of Golf and Co-Founder Mike Doyle.
        </div>
        <div>
          Sportxbox 3DGolf analysis will be available across all three Five Iron
          Manhattan locations beginning July 1, and will be rolling out across
          all other locations throughout 2022. For the entire month of July,
          Five Iron Golf locations in NYC will offer a free 30-minute swing
          analysis powered by Sportsbox alongside their current lesson options.
          Customers will be able to book this service with select golf
          instructors at https://fiveirongolf.com/sportsbox-3d-golf/
        </div>
        <div>About Five Iron Golf</div>
        <div>
          Five Iron Golf is an urban indoor golf experience that combines a
          unique mixture of golf and entertainment with a community-focused
          vision of making the game more inclusive and accessible. Founded in
          2017, Five Iron Golf has since expanded from New York to 12 total
          locations across eight cities from coast to coast, bringing a
          reputation for turning traditional golf on its head, celebrating the
          unconventional, and energizing communities through accessible and
          enjoyable golf experiences.
        </div>
      </div>
    </div>
  );
}
