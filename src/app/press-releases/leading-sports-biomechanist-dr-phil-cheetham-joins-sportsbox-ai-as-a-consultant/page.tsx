import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        LEADING SPORTS BIOMECHANIST DR. PHIL CHEETHAM JOINS SPORTSBOX AI AS A
        CONSULTANT
      </div>

      <div className={`${anton.className} py-10`}>Dec 1</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>
          BELLEVUE, WA — December 1, 2020 — Sportsbox AI, an AI-powered
          technology company that brings 3D AI Coaching to mobile applications,
          is excited to announce that Dr. Phil Cheetham, an innovator in 3D
          Motion Analysis and Sports Biomechanics for over 30 years, has joined
          the team as a consulting advisor.
        </div>
        <div>
          Dr. Cheetham, who is currently the Director of Sports Technology and
          Innovation at the United States Olympic and Paralympic Committee and
          has been dubbed the "3D guy," brings his extensive expertise and
          experience working with 3D Motion Analysis and measuring 3D
          biomechanical data to the development of Sportsbox AI's sports and
          fitness apps, with golf being the first activity the company will beta
          test.
        </div>
        <div>
          "I am looking forward to being able to liberate 3D analysis and
          measurements," said Dr. Cheetham, who has a PhD in Exercise Science
          with a specialty in Biomechanics from Arizona State University. "I
          want to democratize 3D and to be able to do 3D just from a mobile
          phone -- literally, walk up, set your iPhone up, film your swing, and
          get a 3D analysis-- which, to me, is amazing."
        </div>
        <div>
          Dr. Cheetham, an Olympian in gymnastics, competed in the 1976 Montreal
          Olympic Games for Australia, also co-developed one of the first sports
          motion analysis systems while working as Head of Engineering
          Technology for the U.S. Olympic Committee's Sports Science Program in
          the 1980s. He has also co-developed several motion analysis systems
          for companies he has co-founded, including; Peak Performance
          Technologies Inc., Skill Technologies Inc. and Advanced Motion
          Measurement Inc. (AMM).
        </div>
        <div>
          With his work as the Head Biomechanist and Director of the TPI
          Biomechanics Advisory Board, Dr. Cheetham co-developed TPI 3D, a
          motion analysis system that is specifically designed to measure golf
          swing motion and efficiency using a respected biomechanics principle
          called the Kinematic Sequence.
        </div>
        <div>
          Dr. Cheetham has worked on various research projects with elite golf
          coaches, such as Chris Como, Terry Rowles, Mike Adams, Greg Rose and
          Dave Phillips (TPI), Jeff Smith and Joe Mayo. He has also conducted 3D
          Motion Analysis Assessment on the best golfers in the world, including
          Phil Mickelson, Bryson DeChambeau, Aaron Baddeley, Mike Weir, Pat
          Perez, Scott Piercy, Brian Gay, Brandon Hagy, Kevin Tway, William
          McGirt, JJ Spaun, Aaron Wise, Wyndham Clark and Patrick Rogers.
        </div>
        <div>
          "One of the things that's cool about what Sportsbox is doing is
          they've created their own custom model," said Dr. Cheetham. "So now we
          will be able to track many more points -- 39 points -- and we'll be
          able to be much more accurate.
        </div>
        <div>
          "We can look at the ankles, we can look at the feet, we can look at
          the hands and club much more closely and accurately. I'm very excited
          about working with Sportsbox."
        </div>
        <div>
          To learn more, visit sportsbox.ai, and follow us on Instagram,
          Twitter, Facebook, LinkedIn and YouTube.
        </div>
        <div>###</div>
        <div>About AITHINKTANK LLC</div>
        <div>
          AITHINKTANK LLC (AI Thinktank) is a software technology incubator
          developing state-of-the-art artificial intelligence platforms to
          accelerate and simplify the development of AI applications. The team
          is composed of seasoned professionals with decades of experience in
          delivering professional quality software, including 15 years in
          artificial intelligence.
        </div>
        <div>
          AI Thinktank works with entrepreneurs to incubate companies that will
          incorporate these AI models and algorithms into innovative and
          transformative applications for both the consumer and the enterprise.
          The founders will also provide these companies with access to
          experienced hardware and software architects, as well as AI scientists
          who are leaders in their field.
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
