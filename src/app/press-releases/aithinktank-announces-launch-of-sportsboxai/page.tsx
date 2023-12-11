import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        AITHINKTANK ANNOUNCES FORMATION OF SPORTSBOX AI
      </div>

      <div className={`${anton.className} py-10`}>Sep 1</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>
          BELLEVUE, WA, September 1, 2020 -- AITHINKTANK LLC, a software
          technology incubator developing state-of-the-art artificial
          intelligence platforms to accelerate and simplify the development of
          AI applications, announced the launch of its first spinoff, Sportsbox
          AI, an AI-powered technology company that will introduce the first 3D
          AI Coach for Sports and Fitness, using patent-pending Kinematic AI
          Technology.
        </div>
        <div>
          Sportsbox AI’s core technology will have the ability to capture,
          measure and analyze complex athletic motions in 3D that will bring
          real-time corrective feedback based on highly accurate biomechanical
          measurement to every Body, which up to now have only been available to
          elite athletes.
        </div>
        <div>
          The Sportsbox AI team was assembled by the managing partners of AI
          Thinktank, bringing together a group of seasoned experts in
          technology, artificial intelligence and engineering, all proven
          entrepreneurs, along with veteran sports industry professionals. The
          AI Thinktank team includes Mike Kennewick and Rich Kennewick, the
          founders of Voicebox Technologies, which invented the first Smart
          Speaker and Voice Assistant back in 2005.
        </div>
        <div>
          “We are very excited and proud for Sportsbox to be our first spinoff,”
          said Mike Kennewick, founder and managing partner of AI Thinktank.
          “Sportsbox will be the first company to deploy a true 3D and
          personified AI coach on a mobile phone. The technology combines 3D
          motion capture, measurable biomechanics and personalized coaching,
          making it the only true AI alternative to traditional 3D motion
          capture systems.”
        </div>
        <div>
          The Kennewick brothers pioneered advances in speech recognition and
          natural language understanding, which are supported by many patents
          issued in the United States, Europe and China. The Voicebox AI
          technology has been deployed in over 20 million cars and over 300
          million mobile devices. The venture was successfully acquired by
          Oracle and Nuance.
        </div>
        <div>
          Using the techniques deployed with voice and natural language
          understanding, the Kennewick brothers developed the “Action
          Understanding” technology, which derives meaning from the contextual
          relationship of objects and their motion across video frames.
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
