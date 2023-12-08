import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[100px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        SPORTSBOX AI LAUNCHES FIRST VERSION OF CONSUMER APP 3D PRACTICE WITH
        CONTENT FROM TOP 100 COACHES AND TRAINING AID PARTNERS
      </div>

      <div className={`${anton.className} py-10`}>Dec 4</div>
      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>
          Bellevue, WA (December 5, 2022) — Following last fall’s release of its
          revolutionary coaching app, Sportsbox 3DGolf, Sportsbox AI, the leader
          and innovator in single camera markerless 3D motion capture on a
          mobile phone, has launched the first version of its consumer app
          Sportsbox 3D Practice in the App Store.
        </div>
        <div>
          Sportsbox 3D Practice, the ultimate practice experience, provides
          golfers of all abilities to benefit from data-driven practices – with
          or without a coach – in an organized set of activities with
          easy-to-follow content that target the swing change or “Watchlist”
          item that golfers are trying to achieve.
        </div>
        <div>
          With a 3D Practice subscription, golfers have access to over 150
          Practice Guides, with content from world-acclaimed coaches, like Erika
          Larkin, Terry Rowles, Jorge Parada, VISION 54’S Lynn Marriott and Pia
          Nilsson, and Golf Digest Top 50 Trainers Ken Macdonald.
        </div>
        <div>
          Each practice guide includes the following:Each practice guide
          includes the following:
        </div>
        <ul className="list-disc pl-[40px]">
          <li>Focus area or swing goal: Defined by a Watchlist </li>
          <li>Drills to help that Watchlist item</li>
          <li>Assessment to measure your swing against your swing goal</li>
          <li>Target practice</li>
        </ul>
        <div>
          The consumer app is available in the App Store to purchase for
          $15.99/month or $110/year.
        </div>
        <div>
          In addition, Sportsbox has partnered with the industry’s leading
          training aid companies, such as Tourstriker, Orange Whip, Down Under
          Board and Mach 3, to serve as their official companion app.
        </div>
        <div>
          “This is a huge product milestone for the team and it’s been a
          longtime dream and passion of mine to be able to develop an
          application to help golfers practice more effectively and
          efficiently,” said Jeehae Lee, Sportsbox AI Co-Founder and CEO.
        </div>
        <div>
          “With the introduction of the ULTIMATE practice experience in 3D
          Practice, we’re able to help golfers stay on track and focus on what
          they’re working on with real-time feedback and concrete, measurable
          data. We also believe this will enhance the job of coaches around the
          world to provide a plan for their students to improve and never get
          lost between lessons again.
        </div>
        <div>
          “We’re also very proud of our training aid partnerships – this is a
          huge part of the industry, and we are thrilled to complement their
          great products with a user-friendly app that transforms protocols into
          easy-to-follow content in an app, not to mention measurable data to
          validate their claims.”
        </div>
        <div>
          For the first time, consumers who purchase products from these
          companies will be able to follow the product’s protocols with
          easy-to-follow content in the 3D Practice app and measure the results
          with real-time feedback using 3D data.
        </div>
        <div>
          "As Director of Instruction and Fitness for OrangeWhip, I provide
          online, swing training programs that capitalize on our product's
          pre-existing ability to improve a golfer's body and swing,” said Brian
          Newman. “Getting our content into the hands of our current and future
          customers is important. Sportsbox is another first-class channel
          through which we can distribute our instructional content. With their
          interactive training sessions and guides, I am excited to continue
          making it easier for Orange Whip users to maximize their body and
          swing with Sportsbox as a resource."
        </div>
        <div>
          "It's amazing what you can inspire a student to do when they can see
          and measure their body movements,” said Martin Chuck, Director of
          Instruction at TourStriker Golf Academy. “Sportsbox AI is a simple way
          to show motion improvement and when the body moves better the golf
          swings get better."
        </div>
        <div>###</div>
        <div>About Sportsbox AI</div>
        <div>
          Founded in 2020, Sportsbox.ai, Inc. is an AI-powered technology
          company that develops coaching and training mobile applications in
          sports and fitness using patent-pending 3D Motion Capture and
          Kinematic AI technology. Through our unique technology that can
          capture, measure and analyze complex athletic motions in 3D, combined
          with the knowledge and experience of the world’s leading instructors
          in each sport, Sportsbox AI brings real-time corrective feedback to
          help athletes achieve their goals in sports and fitness.
        </div>
        <div>
          The company launched its first product in October 2021 with Sportsbox
          3DGolf -- an app that turns your mobile phone into a 3D motion-capture
          device and instantly provides 3D animation and motion data about your
          golf swing with just a single video.
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
            sports - in full 3D
          </li>
          <li>
            Seamless Coaching Live and Remote: 3D data and visualization tools
            whether you’re with the student or remote; communication, CRM, and
            payment tools, as well as video editing tools for visually impactful
            lesson notes integrated for an all-in-one coaching platform
          </li>
          <li>
            Immersive Personalized Practice Plans and Drills to Improve Your
            Outcome Goal(s): Guided practice and training roadmap tailored to
            your needs and goals
          </li>
        </ul>
        <div>
          For more information about Sportsbox and the 3DGolf app, visit
          sportsbox.ai and follow us on Instagram.
        </div>
      </div>
    </div>
  );
}
