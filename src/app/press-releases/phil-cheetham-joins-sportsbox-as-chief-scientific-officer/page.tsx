import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        DR. PHIL CHEETHAM JOINS SPORTSBOX AS CHIEF SCIENCE OFFICER
      </div>

      <div className={`${anton.className} py-10`}>Jan 11</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>
          BELLEVUE, WA — January 11, 2022 — Sportsbox AI, an AI-powered
          technology company that brings single-camera markerless 3D motion
          capture and AI analysis to mobile applications, is excited to announce
          that Dr. Phil Cheetham, an innovator in 3D Motion Analysis and Sports
          Biomechanics for over 30 years, also known as “The 3D Guy”, has joined
          Sportsbox as the Chief Science Officer.{" "}
        </div>
        <div>
          Dr. Cheetham, served as the Director of Sports Technology and
          Innovation at the United States Olympic and Paralympic Committee until
          December 2021 and worked as performance staff for Team USA in the past
          three Olympic Games. In the last 12 months, he has also consulted for
          Sportsbox AI, where he helped develop their first product, Sportsbox
          3D Golf, which launched successfully in October 2021. His move to
          Sportsbox from his leadership role at the USOPC was not an easy
          decision but was prompted by the impressive AI powered 3D Motion
          Analysis technology that Sportsbox has developed.
        </div>
        <div>
          “We are thrilled to welcome Phil - officially - to our executive team.
          Over the last year or so of working with Phil as our consultant, I
          have seen time and again the value of his deep knowledge and
          experience in the field of 3D and biomechanics,” said Jeehae Lee, CEO
          and Co-Founder of Sportsbox AI. “And his leadership and credibility in
          the golf industry - especially among the elite coaches in the game -
          is going to continue to help further cement our position as the leader
          in “3D Golf.”
        </div>
        <div>
          "I have been blown away by what Sportsbox’s team has been able to
          accomplish in just a short period of time that I’ve been involved,"
          said Dr. Cheetham, who has a PhD in Exercise Science with a specialty
          in Biomechanics from Arizona State University. "Sportsbox has
          developed by far the most advanced and accurate single-camera 3D
          motion capture system I have ever encountered. I was skeptical a year
          ago that true 3D could be done using no markers or sensors - with just
          a single camera - but fast forward a year, we have, indeed, created a
          never-before-seen technology that allows anyone to be able to do 3D
          just from a mobile phone -- literally, walk up, set your phone up,
          film your swing, and get a 3D analysis – which, to me, is still
          mind-boggling."
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
          Biomechanics Advisory Board, Dr. Cheetham co-developed TPI 3D, which
          was licensed from AMM, a motion analysis system that is specifically
          designed to measure golf swing motion and efficiency using a respected
          biomechanics principle called the Kinematic Sequence.
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
          "I’m proud to have been part of the journey with this team so far,"
          said Dr. Cheetham. "Now, as a full-time employee and officer of the
          company, I can’t wait to run faster than ever before and bring more
          amazing technology to the sports world.”{" "}
        </div>
        <div>
          "What we’re doing is not just another version of 3D motion capture.
          The potential with democratizing 3D and leveraging ‘3D on the Go’ with
          golf and other sports - the ability to measure the motion in full 3D
          detail WHEREVER the sport is being played or performed - is bigger
          than what we can currently imagine. I can’t wait to change the world
          of sports with Sportsbox AI."
        </div>
        <div>
          To learn more, visit sportsbox.ai, and follow us on Instagram,
          Twitter, Facebook, LinkedIn and YouTube.{" "}
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
