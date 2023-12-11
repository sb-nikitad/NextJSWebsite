import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        LEARN MORE ABOUT OUR GOLF ADVISORS
      </div>

      <div className={`${anton.className} py-10`}>Mar 25</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>
          Sportsbox AI, an AI-powered technology company that brings 3D AI
          Coaching to mobile applications, is pleased to announce that three
          internationally-renowned, elite golf instructors, Mike Adams, Peter
          Murphy and Terry Rowles, have joined its team as advisors to consult
          on the company's golf product.
        </div>
        <div>
          Known as the "Swing Doctor" and "Teacher of Teachers," Mr. Adams has
          been included on every GOLF Magazine Top 100 Instructor and Golf
          Digest Top 50 Teacher list since their inception. He is currently
          ranked no. 2 in Golf Digest's Top 50 Teacher list and is a member of
          the World Golf Teachers Hall of Fame.
        </div>
        <div>
          Mr. Adams, who has conducted extensive research on swing biomechanics,
          has written and co-written 18 golf instruction books, including two
          GOLF Magazine Instruction Books of the Year: Play Better Golf and The
          LAWs of the Golf Swing. His latest book The Ultimate Golf Lesson, with
          Mr. Rowles and Golf Digest's Matthew Rudy, will be released later this
          year.
        </div>
        <div>
          Mr. Adams spends his winters as the Director of Instruction at
          Medalist GC in Hobe Sound, Florida, and during the summer, he teaches
          at Fiddler's Elbow CC in Bedminster, New Jersey.
        </div>
        <div>
          "My entire career I have emphasized the importance of measuring
          instead of guessing," said Mr. Adams. "For the few of us who have been
          fortunate enough to have access to high-end technology, we have been
          able to understand golf swing biomechanics that can't be demonstrated
          in 2D video.
        </div>
        <div>
          "I'm excited to be part of a company that will democratize 3D Motion
          Capture technology and to learn from the AI that will generate
          insights from the data collected in the mass market."
        </div>
        <div>
          Mr. Rowles, who is ranked as a GOLF Magazine Top 100 Instructor and
          Best In State by Golf Digest, has conducted his own independent
          research and has been on the forefront of integrating technology with
          golf coaching. In his work alongside Dr. Phil Cheetham and Dr. Sasho
          Mackenzie, they created the first system ever to measure and define
          the grip.
        </div>
        <div>
          As a coach, Mr. Rowles, who teaches out of Mountain Ridge CC in West
          Caldwell, New Jersey, specializes in helping golfers overcome slumps
          and become the best version of themselves. He has coached winner on
          every major professional tour. Some of the more notables players he
          has taught include Bernd Wiesberger, Val Skinner, Na Yeon Choi,
          Stephanie Meadow, Luke Donald, Kevin Streelman, Aaron Baddeley, Jazz
          Janewattananond, Ben Crane, Mike Weir, Kevin Stadler, Seung Yul Noh,
          Colt Knost, and Paul McGinley.
        </div>
        <div>
          Peter Murphy, who hails from Australia originally, has coached elite
          players worldwide on all professional tours, including three World No.
          1 players. He was named China's National Coach in 2005 and served as
          India's National Coach in 2010. More recently, he was appointed as
          Morocco's National Director for Golf Development.
        </div>
        <div>
          Mr. Murphy has worked with players that have won on the PGA Tour,
          European Tour, Korn Ferry Tour, Asian Tour, LPGA, LET and KLPGA Tours.
          He has been instrumental in the development of junior golfers that
          have won USGA, NCAA and AJGA Championships.
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
